const fs = require('fs');
const fetch = require('node-fetch');

// Configuration
const ODDS_API_KEY = process.env.ODDS_API_KEY || 'YOUR_API_KEY_HERE';
const SPORTS = 'soccer_epl,soccer_serie_a,soccer_spain_la_liga,soccer_germany_bundesliga';
const REGIONS = 'eu';
const MARKETS = 'h2h,overunder';

// Mapping for league names
const leagueMapping = {
    'soccer_epl': 'English Premier League',
    'soccer_serie_a': 'Serie A',
    'soccer_spain_la_liga': 'La Liga',
    'soccer_germany_bundesliga': 'Bundesliga'
};

async function fetchLiveOdds() {
    try {
        console.log('📡 Fetching live odds from The Odds API...');
        
        const url = `https://api.the-odds-api.com/v4/sports/${SPORTS}/odds/?apiKey=${ODDS_API_KEY}&regions=${REGIONS}&markets=${MARKETS}&oddsFormat=decimal`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (!Array.isArray(data)) {
            throw new Error('Invalid API response');
        }
        
        console.log(`✅ Fetched ${data.length} matches`);
        return data;
    } catch (error) {
        console.error('❌ Error fetching odds:', error.message);
        return [];
    }
}

function updateTipsWithFreshOdds(currentTips, liveMatches) {
    let updatedCount = 0;
    let newMatchesCount = 0;
    
    // Create a map for quick lookup
    const matchMap = new Map();
    liveMatches.forEach(match => {
        const matchKey = `${match.home_team} vs ${match.away_team}`;
        const league = leagueMapping[match.sport_key] || match.sport_title;
        
        // Get best odds from bookmakers
        let bestOdds = { home: 0, draw: 0, away: 0, over: 0, under: 0 };
        
        match.bookmakers.forEach(bookmaker => {
            bookmaker.markets.forEach(market => {
                if (market.key === 'h2h') {
                    market.outcomes.forEach(outcome => {
                        if (outcome.name === match.home_team && outcome.price > bestOdds.home) {
                            bestOdds.home = outcome.price;
                        } else if (outcome.name === match.away_team && outcome.price > bestOdds.away) {
                            bestOdds.away = outcome.price;
                        } else if (outcome.name === 'Draw' && outcome.price > bestOdds.draw) {
                            bestOdds.draw = outcome.price;
                        }
                    });
                }
                
                if (market.key === 'overunder') {
                    market.outcomes.forEach(outcome => {
                        if (outcome.name === 'Over' && outcome.price > bestOdds.over) {
                            bestOdds.over = outcome.price;
                        } else if (outcome.name === 'Under' && outcome.price > bestOdds.under) {
                            bestOdds.under = outcome.price;
                        }
                    });
                }
            });
        });
        
        matchMap.set(matchKey, {
            odds: bestOdds,
            league: league,
            commenceTime: match.commence_time
        });
    });
    
    // Update existing tips
    const updatedTips = currentTips.tips.map(tip => {
        const matchData = matchMap.get(tip.match);
        if (matchData) {
            // Update odds based on prediction type
            let newOdds = tip.odds;
            const predictionLower = tip.prediction.toLowerCase();
            
            if (predictionLower.includes('home') || predictionLower === '1') {
                if (matchData.odds.home > 0) newOdds = matchData.odds.home.toFixed(2);
            } else if (predictionLower.includes('away') || predictionLower === '2') {
                if (matchData.odds.away > 0) newOdds = matchData.odds.away.toFixed(2);
            } else if (predictionLower.includes('draw') || predictionLower === 'x') {
                if (matchData.odds.draw > 0) newOdds = matchData.odds.draw.toFixed(2);
            } else if (predictionLower.includes('over')) {
                if (matchData.odds.over > 0) newOdds = matchData.odds.over.toFixed(2);
            } else if (predictionLower.includes('under')) {
                if (matchData.odds.under > 0) newOdds = matchData.odds.under.toFixed(2);
            }
            
            if (newOdds !== tip.odds) {
                updatedCount++;
                return { ...tip, odds: newOdds };
            }
            
            // Update league if needed
            if (matchData.league && tip.league !== matchData.league) {
                return { ...tip, league: matchData.league };
            }
        }
        return tip;
    });
    
    // Find new matches to add (optional - can be turned off)
    const existingMatches = new Set(currentTips.tips.map(t => t.match));
    const newMatches = [];
    
    for (const [matchName, matchData] of matchMap.entries()) {
        if (!existingMatches.has(matchName) && newMatchesCount < 5) { // Max 5 new matches
            newMatches.push({
                id: `auto_${Date.now()}_${newMatchesCount}`,
                match: matchName,
                league: matchData.league,
                prediction: "To be analyzed",
                odds: matchData.odds.home > 0 ? matchData.odds.home.toFixed(2) : "1.90",
                room: "ordinary",
                result: "pending",
                date: matchData.commenceTime.split('T')[0],
                time: matchData.commenceTime.split('T')[1]?.slice(0,5) || "00:00",
                confidence: "Medium",
                analysis: "Auto-added match — expert analysis coming soon",
                autoAdded: true
            });
            newMatchesCount++;
        }
    }
    
    const finalTips = [...updatedTips, ...newMatches];
    
    return {
        ...currentTips,
        tips: finalTips,
        totalTips: finalTips.length,
        winStats: currentTips.winStats,
        lastUpdated: new Date().toISOString(),
        autoUpdateInfo: {
            updatedCount: updatedCount,
            newMatchesAdded: newMatchesCount,
            lastAutoUpdate: new Date().toISOString()
        }
    };
}

async function main() {
    console.log('🔄 Starting odds update process...');
    
    // Read current tips.json
    let currentData;
    try {
        const fileContent = fs.readFileSync('tips.json', 'utf8');
        currentData = JSON.parse(fileContent);
        console.log('✅ Loaded existing tips.json');
    } catch (error) {
        console.error('❌ Could not read tips.json:', error.message);
        process.exit(1);
    }
    
    // Fetch live odds
    const liveMatches = await fetchLiveOdds();
    if (liveMatches.length === 0) {
        console.log('⚠️ No live matches found. Using existing data.');
        process.exit(0);
    }
    
    // Update tips
    const updatedData = updateTipsWithFreshOdds(currentData, liveMatches);
    
    // Write back to file
    fs.writeFileSync('tips.json', JSON.stringify(updatedData, null, 2));
    console.log(`✅ Updated ${updatedData.autoUpdateInfo.updatedCount} tips`);
    console.log(`✅ Added ${updatedData.autoUpdateInfo.newMatchesAdded} new matches`);
    console.log('💾 tips.json saved successfully!');
    console.log(`📊 Total tips: ${updatedData.tips.length}`);
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { fetchLiveOdds, updateTipsWithFreshOdds };