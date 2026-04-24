[index.html](https://github.com/user-attachments/files/27066400/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>SM.PREDICTIONS | Elite Betting Tips Uganda</title>
    <!-- Google Fonts + Font Awesome -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {[ordinary-room.html](https://github.com/user-attachments/files/27066404/ordinary-room.html)[vip-room.html](https://github.com/user-attachments/files/27066409/vip-room.html)
[tips.json](https://github.com/user-attachments/files/27066407/tips.json)
[results-room.html](https://github.com/user-attachments/files/27066406/results-room.html)
[package.json](https://github.com/user-attachments/files/27066405/package.json)

        body {
            font-family: 'Inter', sans-serif;
            background: radial-gradient(circle at 10% 20%, rgba(2, 20, 45, 1) 0%, rgba(0, 8, 20, 1) 100%);
            color: #f0f4fc;
            line-height: 1.5;
            scroll-behavior: smooth;
        }

        /* glassmorphism + blur edges */
        .glass-card {
            background: rgba(15, 35, 60, 0.55);
            backdrop-filter: blur(12px);
            border-radius: 32px;
            border: 1px solid rgba(0, 150, 255, 0.25);
            box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.4), 0 0 0 0.5px rgba(0, 180, 255, 0.2);
            transition: transform 0.25s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 28px 40px -16px rgba(0, 160, 255, 0.3);
            border-color: rgba(0, 160, 255, 0.6);
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem 1.5rem 4rem;
        }

        /* header gradient + shine */
        .hero {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }

        .hero h1 {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #FFF, #3b9eff, #0a5fcf);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            letter-spacing: -0.02em;
            animation: fadeSlideDown 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .hero p {
            font-size: 1.1rem;
            opacity: 0.85;
            margin-top: 0.5rem;
            animation: fadeSlideUp 0.7s ease;
        }

        .whatsapp-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #075e54;
            padding: 8px 20px;
            border-radius: 100px;
            margin-top: 16px;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.2s;
            border: none;
            text-decoration: none;
            color: white;
            box-shadow: 0 6px 14px rgba(0,0,0,0.3);
        }

        .whatsapp-badge i {
            font-size: 1.2rem;
        }

        .whatsapp-badge:hover {
            background: #128C7E;
            transform: scale(1.02);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        /* rooms grid */
        .rooms-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 2rem;
            margin: 3rem 0 2rem;
        }

        .room-card {
            background: rgba(8, 28, 55, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 36px;
            padding: 1.8rem 1.5rem;
            text-align: center;
            transition: all 0.3s;
            border: 1px solid rgba(0, 170, 255, 0.3);
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: block;
            animation: fadeInScale 0.5s ease backwards;
        }

        .room-card i {
            font-size: 2.6rem;
            color: #3b9eff;
            margin-bottom: 1rem;
        }

        .room-card h3 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .room-card p {
            font-size: 0.85rem;
            opacity: 0.8;
        }

        .vip-badge {
            background: linear-gradient(135deg, #f5b042, #e68a2e);
            width: fit-content;
            margin: 12px auto 0;
            padding: 4px 12px;
            border-radius: 30px;
            font-size: 0.7rem;
            font-weight: bold;
        }

        /* latest tips preview */
        .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin: 2rem 0 1rem;
            border-left: 5px solid #2b7fff;
            padding-left: 1rem;
        }

        .tips-preview {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .tip-item {
            background: rgba(0, 20, 45, 0.7);
            border-radius: 28px;
            padding: 1rem 1.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            transition: 0.2s;
            border-left: 5px solid #1e88e5;
        }

        .match-name {
            font-weight: 700;
            font-size: 1.1rem;
        }

        .prediction {
            background: #0f2a44;
            padding: 5px 14px;
            border-radius: 40px;
            font-size: 0.85rem;
            font-weight: 600;
        }

        .odds {
            font-family: monospace;
            font-weight: 800;
            background: #00000055;
            padding: 4px 10px;
            border-radius: 20px;
        }

        .result {
            font-weight: 800;
            text-transform: uppercase;
        }

        .won { color: #2ecc71; }
        .lost { color: #e74c3c; }
        .pending { color: #f39c12; }

        /* floating whatsapp */
        .float-wa {
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            text-align: center;
            font-size: 32px;
            line-height: 60px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            transition: all 0.2s;
            z-index: 100;
            animation: pulseRing 1.5s infinite;
        }

        .float-wa:hover {
            transform: scale(1.1);
            background: #128C7E;
        }

        @keyframes pulseRing {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
            80% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        footer {
            margin-top: 4rem;
            text-align: center;
            opacity: 0.7;
            font-size: 0.8rem;
            border-top: 1px solid rgba(59,158,255,0.2);
            padding-top: 2rem;
        }

        @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .btn-outline {
            background: transparent;
            border: 1.5px solid #3b9eff;
            padding: 10px 22px;
            border-radius: 40px;
            font-weight: 600;
            transition: 0.2s;
            color: white;
            text-decoration: none;
            display: inline-block;
        }
        .btn-outline:hover {
            background: #3b9eff33;
            transform: scale(1.02);
        }
        .room-header {
            background: rgba(0, 30, 60, 0.6);
            border-radius: 40px;
            padding: 1rem 2rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(8px);
        }
        @media (max-width: 700px) {
            .container { padding: 1rem; }
            .hero h1 { font-size: 2rem; }
            .tip-item { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
    </style>
</head>
<body>
    <div class="container" id="app">
        <!-- Hero -->
        <div class="hero">
            <h1><i class="fas fa-chart-line"></i> SM.PREDICTIONS</h1>
            <p>Elite betting tips • Data-driven accuracy • Uganda's #1 tipster</p>
            <a href="https://wa.me/25676722557?text=Hello%20SM.PREDICTIONS%2C%20I%20want%20VIP%20access" class="whatsapp-badge" target="_blank">
                <i class="fab fa-whatsapp"></i> +256 767 225 57 — Chat for VIP
            </a>
        </div>

        <!-- 4 Rooms -->
        <div class="rooms-grid">
            <a href="free-room.html" class="room-card">
                <i class="fas fa-ticket-alt"></i>
                <h3>🎫 Free Ticket</h3>
                <p>Daily free premium pick</p>
            </a>
            <a href="ordinary-room.html" class="room-card">
                <i class="fas fa-book-open"></i>
                <h3>📘 Ordinary Room</h3>
                <p>3-5 tips • value odds</p>
            </a>
            <a href="vip-room.html" class="room-card">
                <i class="fas fa-crown"></i>
                <h3>👑 VIP Room</h3>
                <p>Elite tips • high strike rate</p>
                <div class="vip-badge">🔒 restricted access</div>
            </a>
            <a href="results-room.html" class="room-card">
                <i class="fas fa-chart-simple"></i>
                <h3>📊 Results Room</h3>
                <p>Track all past predictions</p>
            </a>
        </div>

        <!-- Latest tips preview (dynamic from JSON) -->
        <div class="section-title"><i class="fas fa-clock"></i> ⚡ Latest Tips Preview</div>
        <div class="tips-preview" id="previewTips">
            <div class="tip-item">Loading latest predictions...</div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
            <a href="results-room.html" class="btn-outline"><i class="fas fa-chart-line"></i> View full results history</a>
        </div>

        <footer>
            <p>© 2025 SM.PREDICTIONS — 18+ only. Betting involves risk. Past results don't guarantee future wins.</p>
            <p><i class="fab fa-whatsapp"></i> Support: 25676722557 | <i class="fas fa-envelope"></i> smpredictions@proton.me</p>
        </footer>
    </div>

    <!-- floating whatsapp -->
    <a href="https://wa.me/25676722557?text=VIP%20Room%20Request%20%F0%9F%94%92" class="float-wa" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>

    <script>
        // Global fetch tips, show latest 3 on homepage
        async function loadTipsPreview() {
            try {
                const res = await fetch('tips.json?v=' + Date.now());
                if (!res.ok) throw new Error('tips.json not found');
                const tips = await res.json();
                const container = document.getElementById('previewTips');
                if (!container) return;
                const latest = tips.slice(-4).reverse(); // show most recent first
                if (latest.length === 0) {
                    container.innerHTML = '<div class="tip-item">No tips yet — check back soon!</div>';
                    return;
                }
                container.innerHTML = latest.map(tip => `
                    <div class="tip-item">
                        <div class="match-name"><i class="fas fa-futbol"></i> ${tip.match}</div>
                        <div class="prediction">🎯 ${tip.prediction}</div>
                        <div class="odds">Odds ${tip.odds}</div>
                        <div class="result ${tip.result}">${tip.result.toUpperCase()}</div>
                    </div>
                `).join('');
            } catch (err) {
                document.getElementById('previewTips').innerHTML = '<div class="tip-item">⚠️ Tips data loading: make sure tips.json exists. Using demo soon.</div>';
                console.warn(err);
            }
        }
        loadTipsPreview();
    </script>
</body>
</html>
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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>SM.PREDICTIONS | Ordinary Room - Value Tips</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: radial-gradient(circle at 10% 20%, #02142d, #000811);
            color: #eef5ff;
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1.5rem;
        }

        /* Header Section */
        .ordinary-header {
            text-align: center;
            margin-bottom: 2rem;
            animation: fadeSlideDown 0.6s ease;
        }

        .ordinary-header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #FFF, #5dade2, #2e86c1);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            letter-spacing: -0.02em;
        }

        .ordinary-header p {
            opacity: 0.8;
            margin-top: 0.5rem;
        }

        .room-banner {
            display: inline-block;
            background: rgba(46, 134, 193, 0.2);
            padding: 0.5rem 1.5rem;
            border-radius: 60px;
            margin-top: 1rem;
            font-size: 0.85rem;
            border: 1px solid rgba(93, 173, 226, 0.5);
        }

        /* Stats Dashboard */
        .stats-dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: rgba(10, 35, 55, 0.65);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 1rem;
            text-align: center;
            border: 1px solid rgba(93, 173, 226, 0.3);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
            transform: translateY(-4px);
            border-color: #5dade2;
            box-shadow: 0 12px 25px -10px rgba(93, 173, 226, 0.3);
        }

        .stat-icon {
            font-size: 1.8rem;
            color: #5dade2;
            margin-bottom: 0.3rem;
        }

        .stat-value {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #fff, #85c1e9);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .stat-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
        }

        /* Tabs Navigation */
        .tabs-nav {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            background: rgba(0, 20, 45, 0.5);
            padding: 0.5rem;
            border-radius: 60px;
            backdrop-filter: blur(8px);
        }

        .tab-btn {
            background: transparent;
            border: none;
            padding: 0.7rem 1.5rem;
            border-radius: 40px;
            color: #eef5ff;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.9rem;
        }

        .tab-btn.active {
            background: linear-gradient(135deg, #2e86c1, #1b4f72);
            box-shadow: 0 2px 8px rgba(46, 134, 193, 0.4);
        }

        .tab-btn:hover:not(.active) {
            background: rgba(93, 173, 226, 0.3);
        }

        /* Tips Grid */
        .tips-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .tip-card {
            background: rgba(8, 28, 48, 0.7);
            backdrop-filter: blur(12px);
            border-radius: 28px;
            padding: 1.3rem;
            border: 1px solid rgba(93, 173, 226, 0.3);
            transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            animation: fadeInUp 0.4s ease backwards;
        }

        .tip-card:hover {
            transform: translateY(-6px);
            border-color: #5dade2;
            box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.5);
        }

        .tip-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.8rem;
            font-size: 0.75rem;
        }

        .tip-date {
            background: rgba(0, 0, 0, 0.4);
            padding: 0.2rem 0.7rem;
            border-radius: 20px;
        }

        .tip-league {
            color: #85c1e9;
            font-weight: 600;
        }

        .tip-match {
            font-size: 1.3rem;
            font-weight: 800;
            margin: 0.5rem 0;
            line-height: 1.3;
        }

        .tip-prediction {
            background: rgba(46, 134, 193, 0.25);
            display: inline-block;
            padding: 0.4rem 1rem;
            border-radius: 30px;
            font-weight: 700;
            font-size: 0.9rem;
            margin: 0.7rem 0;
            border-left: 3px solid #5dade2;
        }

        .tip-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
            padding-top: 0.8rem;
            border-top: 1px dashed rgba(93, 173, 226, 0.3);
        }

        .tip-odds {
            font-family: monospace;
            font-size: 1.3rem;
            font-weight: 800;
            color: #85c1e9;
        }

        .tip-result {
            font-weight: 800;
            padding: 0.3rem 1rem;
            border-radius: 30px;
        }

        .result-won {
            background: rgba(46, 204, 113, 0.2);
            color: #2ecc71;
        }

        .result-lost {
            background: rgba(231, 76, 60, 0.2);
            color: #e74c3c;
        }

        .result-pending {
            background: rgba(243, 156, 18, 0.2);
            color: #f39c12;
        }

        .confidence-high {
            color: #2ecc71;
        }

        .confidence-medium {
            color: #f39c12;
        }

        .confidence-low {
            color: #e74c3c;
        }

        .analysis-text {
            font-size: 0.8rem;
            opacity: 0.7;
            margin-top: 0.8rem;
            padding: 0.5rem;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            font-style: italic;
        }

        /* Empty State */
        .empty-state {
            text-align: center;
            padding: 3rem;
            background: rgba(0, 20, 45, 0.5);
            border-radius: 32px;
            color: #85c1e9;
        }

        /* Pagination */
        .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
        }

        .page-btn {
            background: rgba(0, 30, 60, 0.7);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            color: white;
            cursor: pointer;
            transition: 0.2s;
        }

        .page-btn.active {
            background: #2e86c1;
        }

        .page-btn:hover:not(.active) {
            background: #5dade2;
        }

        /* Filter Bar */
        .filter-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            background: rgba(0, 20, 45, 0.5);
            padding: 0.8rem 1.2rem;
            border-radius: 50px;
            backdrop-filter: blur(8px);
        }

        .filter-group {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .filter-select {
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid #5dade2;
            padding: 0.4rem 1rem;
            border-radius: 30px;
            color: white;
            cursor: pointer;
        }

        /* Back Link */
        .back-link {
            margin-top: 2rem;
            text-align: center;
        }

        .back-link a {
            color: #85c1e9;
            text-decoration: none;
            border-bottom: 1px dashed #5dade2;
            transition: 0.2s;
        }

        .back-link a:hover {
            color: #5dade2;
        }

        footer {
            margin-top: 2rem;
            text-align: center;
            font-size: 0.75rem;
            opacity: 0.6;
            padding: 1rem;
        }

        /* Floating WhatsApp */
        .float-wa {
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            text-align: center;
            font-size: 32px;
            line-height: 60px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            transition: all 0.2s;
            z-index: 100;
            animation: pulseRing 1.5s infinite;
        }

        .float-wa:hover {
            transform: scale(1.1);
            background: #128C7E;
        }

        @keyframes pulseRing {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
            80% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            .ordinary-header h1 {
                font-size: 1.8rem;
            }
            .tips-grid {
                grid-template-columns: 1fr;
            }
            .filter-bar {
                flex-direction: column;
                align-items: stretch;
                border-radius: 24px;
            }
            .stat-value {
                font-size: 1.3rem;
            }
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Header -->
    <div class="ordinary-header">
        <h1><i class="fas fa-book-open"></i> ORDINARY ROOM</h1>
        <p>Value tips • Solid analysis • 3-5 daily picks</p>
        <div class="room-banner">
            <i class="fas fa-chart-line"></i> Free registration • No payment required
        </div>
    </div>

    <!-- Statistics Dashboard -->
    <div class="stats-dashboard" id="statsDashboard">
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-chart-simple"></i></div>
            <div class="stat-value" id="totalTips">--</div>
            <div class="stat-label">Total Tips</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-trophy"></i></div>
            <div class="stat-value" id="wonTips">--</div>
            <div class="stat-label">Won</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-times-circle"></i></div>
            <div class="stat-value" id="lostTips">--</div>
            <div class="stat-label">Lost</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-hourglass-half"></i></div>
            <div class="stat-value" id="pendingTips">--</div>
            <div class="stat-label">Pending</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-percent"></i></div>
            <div class="stat-value" id="winRate">--</div>
            <div class="stat-label">Win Rate</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-chart-line"></i></div>
            <div class="stat-value" id="avgOdds">--</div>
            <div class="stat-label">Avg Odds</div>
        </div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
        <div class="filter-group">
            <select id="resultFilter" class="filter-select">
                <option value="all">📊 All Results</option>
                <option value="won">✅ Won</option>
                <option value="lost">❌ Lost</option>
                <option value="pending">⏳ Pending</option>
            </select>
            <select id="confidenceFilter" class="filter-select">
                <option value="all">⭐ All Confidence</option>
                <option value="High">🔥 High</option>
                <option value="Medium">📘 Medium</option>
                <option value="Low">⚠️ Low</option>
            </select>
        </div>
        <div class="filter-group">
            <input type="text" id="searchInput" placeholder="🔍 Search matches..." style="background: rgba(0,0,0,0.4); border: 1px solid #5dade2; padding: 0.4rem 1rem; border-radius: 30px; color: white;">
        </div>
    </div>

    <!-- Tabs: Active vs Archived -->
    <div class="tabs-nav">
        <button class="tab-btn active" data-tab="active">🔥 Active / Pending</button>
        <button class="tab-btn" data-tab="archived">📜 Archived (Won/Lost)</button>
        <button class="tab-btn" data-tab="all">📋 All Tips</button>
    </div>

    <!-- Tips Grid -->
    <div class="tips-grid" id="tipsGrid">
        <div class="empty-state"><i class="fas fa-spinner fa-pulse"></i> Loading ordinary tips...</div>
    </div>

    <!-- Pagination -->
    <div class="pagination" id="pagination"></div>

    <!-- Back Link -->
    <div class="back-link">
        <a href="index.html"><i class="fas fa-arrow-left"></i> Back to SM.PREDICTIONS Home</a>
    </div>

    <footer>
        <p>© 2025 SM.PREDICTIONS — Ordinary Room tips are free for registered users. Bet responsibly. 18+</p>
        <p><i class="fab fa-whatsapp"></i> Support: 25676722557 | Upgrade to VIP for exclusive high-odds picks</p>
    </footer>
</div>

<!-- Floating WhatsApp -->
<a href="https://wa.me/25676722557?text=I%20want%20VIP%20upgrade%20from%20Ordinary%20Room" class="float-wa" target="_blank">
    <i class="fab fa-whatsapp"></i>
</a>

<script>
    let allTips = [];
    let currentTab = 'active';
    let currentResultFilter = 'all';
    let currentConfidenceFilter = 'all';
    let currentSearch = '';
    let currentPage = 1;
    const itemsPerPage = 9;

    // Fetch and load data
    async function loadOrdinaryTips() {
        try {
            const response = await fetch('tips.json?v=' + Date.now());
            if (!response.ok) throw new Error('tips.json not found');
            const data = await response.json();
            // Filter only ordinary room tips
            allTips = (data.tips || []).filter(tip => tip.room === 'ordinary');
            updateStatistics();
            renderTips();
        } catch (error) {
            console.error(error);
            document.getElementById('tipsGrid').innerHTML = '<div class="empty-state"><i class="fas fa-database"></i> Could not load tips.json. Please ensure the file exists with "room": "ordinary" entries.</div>';
        }
    }

    // Update Statistics Dashboard
    function updateStatistics() {
        const total = allTips.length;
        const won = allTips.filter(t => t.result === 'won').length;
        const lost = allTips.filter(t => t.result === 'lost').length;
        const pending = allTips.filter(t => t.result === 'pending').length;
        const winRate = (won + lost) > 0 ? ((won / (won + lost)) * 100).toFixed(1) : '0';
        
        let sumOdds = 0;
        allTips.forEach(t => {
            let odds = parseFloat(t.odds);
            if (!isNaN(odds)) sumOdds += odds;
        });
        const avgOdds = allTips.length > 0 ? (sumOdds / allTips.length).toFixed(2) : '0';

        document.getElementById('totalTips').innerText = total;
        document.getElementById('wonTips').innerText = won;
        document.getElementById('lostTips').innerText = lost;
        document.getElementById('pendingTips').innerText = pending;
        document.getElementById('winRate').innerText = `${winRate}%`;
        document.getElementById('avgOdds').innerText = avgOdds;
    }

    // Get filtered tips based on all criteria
    function getFilteredTips() {
        let filtered = [...allTips];
        
        // Tab filter
        if (currentTab === 'active') {
            filtered = filtered.filter(tip => tip.result === 'pending');
        } else if (currentTab === 'archived') {
            filtered = filtered.filter(tip => tip.result === 'won' || tip.result === 'lost');
        }
        
        // Result filter
        if (currentResultFilter !== 'all') {
            filtered = filtered.filter(tip => tip.result === currentResultFilter);
        }
        
        // Confidence filter
        if (currentConfidenceFilter !== 'all') {
            filtered = filtered.filter(tip => tip.confidence === currentConfidenceFilter);
        }
        
        // Search filter
        if (currentSearch.trim() !== '') {
            const searchTerm = currentSearch.toLowerCase();
            filtered = filtered.filter(tip => 
                tip.match.toLowerCase().includes(searchTerm) || 
                (tip.league && tip.league.toLowerCase().includes(searchTerm))
            );
        }
        
        // Sort by date (newest first)
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        return filtered;
    }

    // Render tips grid with pagination
    function renderTips() {
        const filtered = getFilteredTips();
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedTips = filtered.slice(start, start + itemsPerPage);
        
        const grid = document.getElementById('tipsGrid');
        
        if (paginatedTips.length === 0) {
            grid.innerHTML = `<div class="empty-state"><i class="fas fa-info-circle"></i> No ordinary tips match your filters.<br>Check back soon for new predictions!</div>`;
            document.getElementById('pagination').innerHTML = '';
            return;
        }
        
        grid.innerHTML = paginatedTips.map((tip, idx) => {
            const resultClass = tip.result === 'won' ? 'result-won' : (tip.result === 'lost' ? 'result-lost' : 'result-pending');
            const resultIcon = tip.result === 'won' ? '🏆' : (tip.result === 'lost' ? '❌' : '⏳');
            const confidenceClass = tip.confidence === 'High' ? 'confidence-high' : (tip.confidence === 'Medium' ? 'confidence-medium' : 'confidence-low');
            const confidenceIcon = tip.confidence === 'High' ? '🔥' : (tip.confidence === 'Medium' ? '📘' : '⚠️');
            
            return `
                <div class="tip-card" style="animation-delay: ${idx * 0.05}s">
                    <div class="tip-header">
                        <span class="tip-date"><i class="far fa-calendar-alt"></i> ${formatDate(tip.date)}</span>
                        <span class="tip-league"><i class="fas fa-flag-checkered"></i> ${escapeHtml(tip.league || 'Various')}</span>
                    </div>
                    <div class="tip-match">
                        ⚽ ${escapeHtml(tip.match)}
                    </div>
                    <div class="tip-prediction">
                        <i class="fas fa-chart-simple"></i> ${escapeHtml(tip.prediction)}
                    </div>
                    <div class="tip-footer">
                        <div>
                            <span class="tip-odds"><i class="fas fa-percent"></i> ${tip.odds}</span>
                        </div>
                        <div class="tip-result ${resultClass}">
                            ${resultIcon} ${tip.result.toUpperCase()}
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 0.5rem;">
                        <span class="${confidenceClass}"><i class="fas fa-chart-line"></i> ${confidenceIcon} ${tip.confidence || 'Medium'} Confidence</span>
                        ${tip.score ? `<span><i class="fas fa-futbol"></i> ${tip.score}</span>` : ''}
                    </div>
                    ${tip.analysis ? `<div class="analysis-text"><i class="fas fa-lightbulb"></i> ${escapeHtml(tip.analysis)}</div>` : ''}
                </div>
            `;
        }).join('');
        
        renderPagination(totalPages);
    }
    
    function renderPagination(totalPages) {
        const paginationDiv = document.getElementById('pagination');
        if (totalPages <= 1) {
            paginationDiv.innerHTML = '';
            return;
        }
        
        let pages = [];
        pages.push(`<button class="page-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>« Prev</button>`);
        
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                pages.push(`<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`);
            } else if (i === currentPage - 3 || i === currentPage + 3) {
                pages.push(`<span style="padding: 0.5rem; opacity: 0.5;">...</span>`);
            }
        }
        
        pages.push(`<button class="page-btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>Next »</button>`);
        
        paginationDiv.innerHTML = pages.join('');
        
        document.querySelectorAll('.page-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const page = parseInt(btn.dataset.page);
                if (!isNaN(page) && page >= 1 && page <= totalPages) {
                    currentPage = page;
                    renderTips();
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                }
            });
        });
    }
    
    function formatDate(dateStr) {
        if (!dateStr) return 'TBD';
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' });
    }
    
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    // Event Listeners
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            currentPage = 1;
            renderTips();
        });
    });
    
    document.getElementById('resultFilter').addEventListener('change', (e) => {
        currentResultFilter = e.target.value;
        currentPage = 1;
        renderTips();
    });
    
    document.getElementById('confidenceFilter').addEventListener('change', (e) => {
        currentConfidenceFilter = e.target.value;
        currentPage = 1;
        renderTips();
    });
    
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        currentPage = 1;
        renderTips();
    });
    
    // Initialize
    loadOrdinaryTips();
</script>
</body>
</html>
{
  "name": "sm-predictions-odds-updater",
  "version": "1.0.0",
  "description": "Auto-update odds for SM.PREDICTIONS",
  "main": "scripts/update-odds.js",
  "scripts": {
    "update-odds": "node scripts/update-odds.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "node-fetch": "^2.7.0"
  }
}
Here is the complete, professional **Results Room** HTML code with detailed statistics, filtering, win/loss tracking, and premium animations matching your blue theme.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>SM.PREDICTIONS | Results Room - Track Record</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: radial-gradient(circle at 10% 20%, #02142d, #000811);
            color: #eef5ff;
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1.5rem;
        }

        /* Header Section */
        .results-header {
            text-align: center;
            margin-bottom: 2rem;
            animation: fadeSlideDown 0.6s ease;
        }

        .results-header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #FFF, #3b9eff, #0a5fcf);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            letter-spacing: -0.02em;
        }

        .results-header p {
            opacity: 0.8;
            margin-top: 0.5rem;
        }

        /* Stats Dashboard */
        .stats-dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.2rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: rgba(10, 35, 55, 0.65);
            backdrop-filter: blur(12px);
            border-radius: 28px;
            padding: 1.3rem;
            text-align: center;
            border: 1px solid rgba(59, 158, 255, 0.3);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
            transform: translateY(-4px);
            border-color: #3b9eff;
            box-shadow: 0 12px 25px -10px rgba(59, 158, 255, 0.3);
        }

        .stat-icon {
            font-size: 2rem;
            color: #3b9eff;
            margin-bottom: 0.5rem;
        }

        .stat-value {
            font-size: 2.2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #fff, #7cb9ff);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .stat-label {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
        }

        /* Filter Bar */
        .filter-bar {
            background: rgba(0, 20, 45, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 60px;
            padding: 0.8rem 1.5rem;
            margin-bottom: 2rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: space-between;
            align-items: center;
        }

        .filter-group {
            display: flex;
            gap: 0.8rem;
            flex-wrap: wrap;
        }

        .filter-btn {
            background: rgba(255, 255, 255, 0.08);
            border: none;
            padding: 0.5rem 1.2rem;
            border-radius: 40px;
            color: #eef5ff;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.85rem;
        }

        .filter-btn.active {
            background: linear-gradient(135deg, #1e6ec5, #0a4a8a);
            box-shadow: 0 2px 8px rgba(30, 110, 197, 0.4);
        }

        .filter-btn:hover {
            background: #1e6ec5;
            transform: scale(1.02);
        }

        .search-box {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(0, 0, 0, 0.4);
            padding: 0.4rem 1rem;
            border-radius: 40px;
        }

        .search-box input {
            background: transparent;
            border: none;
            color: white;
            padding: 0.4rem;
            outline: none;
            width: 180px;
        }

        .search-box i {
            opacity: 0.6;
        }

        /* Tips Table */
        .tips-table-container {
            background: rgba(5, 20, 35, 0.6);
            backdrop-filter: blur(8px);
            border-radius: 32px;
            overflow-x: auto;
            border: 1px solid rgba(59, 158, 255, 0.2);
            animation: fadeInUp 0.5s ease;
        }

        .tips-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }

        .tips-table th {
            text-align: left;
            padding: 1rem 1rem;
            background: rgba(0, 40, 70, 0.6);
            font-weight: 700;
            color: #7cb9ff;
            border-bottom: 1px solid rgba(59, 158, 255, 0.3);
        }

        .tips-table td {
            padding: 1rem;
            border-bottom: 1px solid rgba(59, 158, 255, 0.15);
            vertical-align: middle;
        }

        .tips-table tr:hover {
            background: rgba(59, 158, 255, 0.08);
            transition: 0.2s;
        }

        .room-badge {
            display: inline-block;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.7rem;
            font-weight: 700;
        }

        .room-vip {
            background: linear-gradient(135deg, #f5b042, #e68a2e);
            color: #1a0f00;
        }

        .room-ordinary {
            background: #2c5f8a;
            color: white;
        }

        .room-free {
            background: #2c6e4f;
            color: white;
        }

        .result-won {
            color: #2ecc71;
            font-weight: 800;
        }

        .result-lost {
            color: #e74c3c;
            font-weight: 800;
        }

        .result-pending {
            color: #f39c12;
            font-weight: 800;
        }

        .confidence-high {
            color: #2ecc71;
        }

        .confidence-medium {
            color: #f39c12;
        }

        .confidence-low {
            color: #e74c3c;
        }

        /* Empty state */
        .empty-state {
            text-align: center;
            padding: 3rem;
            color: #7cb9ff;
        }

        /* Pagination */
        .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }

        .page-btn {
            background: rgba(0, 30, 60, 0.7);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            color: white;
            cursor: pointer;
            transition: 0.2s;
        }

        .page-btn.active {
            background: #1e6ec5;
        }

        .page-btn:hover {
            background: #3b9eff;
        }

        /* Footer */
        .back-link {
            margin-top: 2rem;
            text-align: center;
        }

        .back-link a {
            color: #7cb9ff;
            text-decoration: none;
            border-bottom: 1px dashed #3b9eff;
        }

        footer {
            margin-top: 2rem;
            text-align: center;
            font-size: 0.75rem;
            opacity: 0.6;
            padding: 1rem;
        }

        /* Animations */
        @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Floating WhatsApp */
        .float-wa {
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            text-align: center;
            font-size: 32px;
            line-height: 60px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            transition: all 0.2s;
            z-index: 100;
            animation: pulseRing 1.5s infinite;
        }

        .float-wa:hover {
            transform: scale(1.1);
            background: #128C7E;
        }

        @keyframes pulseRing {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
            80% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        @media (max-width: 768px) {
            .tips-table th, .tips-table td {
                padding: 0.7rem;
                font-size: 0.75rem;
            }
            .filter-bar {
                flex-direction: column;
                border-radius: 28px;
            }
            .stat-value {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Header -->
    <div class="results-header">
        <h1><i class="fas fa-chart-line"></i> RESULTS ROOM</h1>
        <p>Transparent tracking • Verified outcomes • Real performance data</p>
    </div>

    <!-- Statistics Dashboard -->
    <div class="stats-dashboard" id="statsDashboard">
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-trophy"></i></div>
            <div class="stat-value" id="totalTips">--</div>
            <div class="stat-label">Total Tips</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
            <div class="stat-value" id="wonTips">--</div>
            <div class="stat-label">Won</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-times-circle"></i></div>
            <div class="stat-value" id="lostTips">--</div>
            <div class="stat-label">Lost</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-hourglass-half"></i></div>
            <div class="stat-value" id="pendingTips">--</div>
            <div class="stat-label">Pending</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-chart-simple"></i></div>
            <div class="stat-value" id="winRate">--</div>
            <div class="stat-label">Win Rate</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-crown"></i></div>
            <div class="stat-value" id="vipWinRate">--</div>
            <div class="stat-label">VIP Win Rate</div>
        </div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
        <div class="filter-group">
            <button class="filter-btn active" data-filter="all">All Rooms</button>
            <button class="filter-btn" data-filter="vip">👑 VIP Room</button>
            <button class="filter-btn" data-filter="ordinary">📘 Ordinary Room</button>
            <button class="filter-btn" data-filter="free">🎫 Free Room</button>
        </div>
        <div class="filter-group">
            <button class="filter-btn" data-result="all">All Results</button>
            <button class="filter-btn" data-result="won">✅ Won</button>
            <button class="filter-btn" data-result="lost">❌ Lost</button>
            <button class="filter-btn" data-result="pending">⏳ Pending</button>
        </div>
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" placeholder="Search matches...">
        </div>
    </div>

    <!-- Tips Table -->
    <div class="tips-table-container">
        <table class="tips-table" id="tipsTable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Match</th>
                    <th>League</th>
                    <th>Prediction</th>
                    <th>Odds</th>
                    <th>Room</th>
                    <th>Result</th>
                    <th>Confidence</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <tr><td colspan="9" class="empty-state"><i class="fas fa-spinner fa-pulse"></i> Loading results...</td></tr>
            </tbody>
        </table>
    </div>

    <!-- Pagination -->
    <div class="pagination" id="pagination"></div>

    <!-- Back Link -->
    <div class="back-link">
        <a href="index.html"><i class="fas fa-arrow-left"></i> Back to SM.PREDICTIONS Home</a>
    </div>

    <footer>
        <p>© 2025 SM.PREDICTIONS — Verified results. Past performance doesn't guarantee future returns. Bet responsibly.</p>
        <p><i class="fab fa-whatsapp"></i> Support: 25676722557</p>
    </footer>
</div>

<!-- Floating WhatsApp -->
<a href="https://wa.me/25676722557?text=Results%20Room%20-%20I%20want%20VIP%20access" class="float-wa" target="_blank">
    <i class="fab fa-whatsapp"></i>
</a>

<script>
    let allTips = [];
    let currentFilterRoom = 'all';
    let currentFilterResult = 'all';
    let currentSearch = '';
    let currentPage = 1;
    const itemsPerPage = 15;

    // Fetch and load data
    async function loadResults() {
        try {
            const response = await fetch('tips.json?v=' + Date.now());
            if (!response.ok) throw new Error('tips.json not found');
            const data = await response.json();
            allTips = data.tips || [];
            updateStatistics();
            renderTable();
        } catch (error) {
            console.error(error);
            document.getElementById('tableBody').innerHTML = '<tr><td colspan="9" class="empty-state"><i class="fas fa-database"></i> Could not load tips.json. Please ensure the file exists with proper structure.</td></tr>';
        }
    }

    // Update Statistics Dashboard
    function updateStatistics() {
        const total = allTips.length;
        const won = allTips.filter(t => t.result === 'won').length;
        const lost = allTips.filter(t => t.result === 'lost').length;
        const pending = allTips.filter(t => t.result === 'pending').length;
        const winRate = (won + lost) > 0 ? ((won / (won + lost)) * 100).toFixed(1) : '0';
        
        const vipTips = allTips.filter(t => t.room === 'vip' && (t.result === 'won' || t.result === 'lost'));
        const vipWon = allTips.filter(t => t.room === 'vip' && t.result === 'won').length;
        const vipWinRate = vipTips.length > 0 ? ((vipWon / vipTips.length) * 100).toFixed(1) : '0';

        document.getElementById('totalTips').innerText = total;
        document.getElementById('wonTips').innerText = won;
        document.getElementById('lostTips').innerText = lost;
        document.getElementById('pendingTips').innerText = pending;
        document.getElementById('winRate').innerText = `${winRate}%`;
        document.getElementById('vipWinRate').innerText = `${vipWinRate}%`;
    }

    // Filter tips based on room, result, and search
    function getFilteredTips() {
        let filtered = [...allTips];
        
        // Room filter
        if (currentFilterRoom !== 'all') {
            filtered = filtered.filter(tip => tip.room === currentFilterRoom);
        }
        
        // Result filter
        if (currentFilterResult !== 'all') {
            filtered = filtered.filter(tip => tip.result === currentFilterResult);
        }
        
        // Search filter
        if (currentSearch.trim() !== '') {
            const searchTerm = currentSearch.toLowerCase();
            filtered = filtered.filter(tip => 
                tip.match.toLowerCase().includes(searchTerm) || 
                (tip.league && tip.league.toLowerCase().includes(searchTerm))
            );
        }
        
        // Sort by date (newest first)
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        return filtered;
    }

    // Render table with pagination
    function renderTable() {
        const filtered = getFilteredTips();
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        
        // Ensure current page is valid
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedTips = filtered.slice(start, start + itemsPerPage);
        
        const tbody = document.getElementById('tableBody');
        
        if (paginatedTips.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" class="empty-state"><i class="fas fa-search"></i> No tips match your filters</td></tr>';
            document.getElementById('pagination').innerHTML = '';
            return;
        }
        
        tbody.innerHTML = paginatedTips.map(tip => {
            const roomClass = tip.room === 'vip' ? 'room-vip' : (tip.room === 'ordinary' ? 'room-ordinary' : 'room-free');
            const roomIcon = tip.room === 'vip' ? '👑' : (tip.room === 'ordinary' ? '📘' : '🎫');
            const resultClass = tip.result === 'won' ? 'result-won' : (tip.result === 'lost' ? 'result-lost' : 'result-pending');
            const resultIcon = tip.result === 'won' ? '🏆' : (tip.result === 'lost' ? '❌' : '⏳');
            const confidenceClass = tip.confidence === 'High' ? 'confidence-high' : (tip.confidence === 'Medium' ? 'confidence-medium' : 'confidence-low');
            
            return `
                <tr>
                    <td>${formatDate(tip.date)}</td>
                    <td><strong>${escapeHtml(tip.match)}</strong></td>
                    <td>${escapeHtml(tip.league || '-')}</td>
                    <td>${escapeHtml(tip.prediction)}</td>
                    <td>${tip.odds}</td>
                    <td><span class="room-badge ${roomClass}">${roomIcon} ${tip.room.toUpperCase()}</span></td>
                    <td class="${resultClass}">${resultIcon} ${tip.result.toUpperCase()}</td>
                    <td class="${confidenceClass}">${tip.confidence || 'Medium'}</td>
                    <td>${tip.score || '-'}</td>
                </tr>
            `;
        }).join('');
        
        // Render pagination
        renderPagination(totalPages);
    }
    
    function renderPagination(totalPages) {
        const paginationDiv = document.getElementById('pagination');
        if (totalPages <= 1) {
            paginationDiv.innerHTML = '';
            return;
        }
        
        let pages = [];
        pages.push(`<button class="page-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>« Prev</button>`);
        
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                pages.push(`<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`);
            } else if (i === currentPage - 3 || i === currentPage + 3) {
                pages.push(`<span style="padding: 0.5rem">...</span>`);
            }
        }
        
        pages.push(`<button class="page-btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>Next »</button>`);
        
        paginationDiv.innerHTML = pages.join('');
        
        // Add event listeners to page buttons
        document.querySelectorAll('.page-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const page = parseInt(btn.dataset.page);
                if (!isNaN(page) && page >= 1 && page <= totalPages) {
                    currentPage = page;
                    renderTable();
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                }
            });
        });
    }
    
    function formatDate(dateStr) {
        if (!dateStr) return '-';
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    }
    
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    // Event Listeners for Filters
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilterRoom = btn.dataset.filter;
            currentPage = 1;
            renderTable();
        });
    });
    
    document.querySelectorAll('[data-result]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-result]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilterResult = btn.dataset.result;
            currentPage = 1;
            renderTable();
        });
    });
    
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        currentPage = 1;
        renderTable();
    });
    
    // Initialize
    loadResults();
</script>
</body>
</html>
```
{
  "lastUpdated": "2026-04-24T10:30:00+03:00",
  "totalTips": 12,
  "winStats": {
    "overallWinRate": 68.4,
    "vipWinRate": 74.2,
    "ordinaryWinRate": 62.5,
    "freeWinRate": 58.3
  },
  "tips": [
    {
      "id": "tip_001",
      "match": "Manchester United vs Liverpool",
      "league": "English Premier League",
      "prediction": "Over 2.5 Goals",
      "odds": "1.85",
      "room": "vip",
      "result": "won",
      "date": "2026-04-23",
      "time": "17:30",
      "confidence": "High",
      "analysis": "Both teams in attacking form, last 5 H2H saw 4 overs. Key attackers fit.",
      "score": "2-2"
    },
    {
      "id": "tip_002",
      "match": "Real Madrid vs Barcelona",
      "league": "La Liga",
      "prediction": "Both Teams to Score",
      "odds": "1.72",
      "room": "vip",
      "result": "won",
      "date": "2026-04-22",
      "time": "21:00",
      "confidence": "Very High",
      "analysis": "El Clasico always delivers goals. Defensive injuries on both sides.",
      "score": "3-1"
    },
    {
      "id": "tip_003",
      "match": "Bayern Munich vs Borussia Dortmund",
      "league": "Bundesliga",
      "prediction": "1 (Home Win)",
      "odds": "1.65",
      "room": "vip",
      "result": "won",
      "date": "2026-04-21",
      "time": "19:30",
      "confidence": "High",
      "analysis": "Bayern unbeaten at home in 12 games. Der Klassiker dominance.",
      "score": "4-0"
    },
    {
      "id": "tip_004",
      "match": "PSG vs Marseille",
      "league": "Ligue 1",
      "prediction": "Over 1.5 First Half Goals",
      "odds": "2.10",
      "room": "vip",
      "result": "lost",
      "date": "2026-04-20",
      "time": "20:45",
      "confidence": "Medium",
      "analysis": "High tempo expected but first half ended 0-0 despite chances.",
      "score": "2-0"
    },
    {
      "id": "tip_005",
      "match": "Arsenal vs Chelsea",
      "league": "English Premier League",
      "prediction": "GG & Over 2.5",
      "odds": "1.95",
      "room": "vip",
      "result": "pending",
      "date": "2026-04-25",
      "time": "16:00",
      "confidence": "High",
      "analysis": "London derby, both leaky defenses, attacking firepower available.",
      "score": null
    },
    {
      "id": "tip_006",
      "match": "Inter Milan vs AC Milan",
      "league": "Serie A",
      "prediction": "Under 2.5 Goals",
      "odds": "1.80",
      "room": "ordinary",
      "result": "won",
      "date": "2026-04-23",
      "time": "20:00",
      "confidence": "Medium",
      "analysis": "Derby della Madonnina tends to be tactical, last 3 unders.",
      "score": "1-0"
    },
    {
      "id": "tip_007",
      "match": "Ajax vs Feyenoord",
      "league": "Eredivisie",
      "prediction": "Over 3.5 Goals",
      "odds": "1.90",
      "room": "ordinary",
      "result": "won",
      "date": "2026-04-22",
      "time": "14:30",
      "confidence": "High",
      "analysis": "Dutch classics produce goals, both teams top scorers in league.",
      "score": "3-2"
    },
    {
      "id": "tip_008",
      "match": "Napoli vs Juventus",
      "league": "Serie A",
      "prediction": "Draw",
      "odds": "3.20",
      "room": "ordinary",
      "result": "lost",
      "date": "2026-04-21",
      "time": "18:00",
      "confidence": "Low",
      "analysis": "Value bet on draw but Napoli snatched late winner.",
      "score": "2-1"
    },
    {
      "id": "tip_009",
      "match": "Atletico Madrid vs Sevilla",
      "league": "La Liga",
      "prediction": "Under 2.5 Goals",
      "odds": "1.75",
      "room": "ordinary",
      "result": "pending",
      "date": "2026-04-24",
      "time": "22:00",
      "confidence": "Medium",
      "analysis": "Defensive setups expected, both teams prioritize shape.",
      "score": null
    },
    {
      "id": "tip_010",
      "match": "Brighton vs Tottenham",
      "league": "English Premier League",
      "prediction": "Both Teams to Score",
      "odds": "1.68",
      "room": "free",
      "result": "won",
      "date": "2026-04-23",
      "time": "15:00",
      "confidence": "Medium",
      "analysis": "Free tip! Brighton strong at home, Spurs always vulnerable away.",
      "score": "2-2"
    },
    {
      "id": "tip_011",
      "match": "Leverkusen vs RB Leipzig",
      "league": "Bundesliga",
      "prediction": "1X (Home or Draw)",
      "odds": "1.45",
      "room": "free",
      "result": "lost",
      "date": "2026-04-22",
      "time": "17:30",
      "confidence": "Low",
      "analysis": "Safe bet but Leipzig surprised with away win 0-2.",
      "score": "0-2"
    },
    {
      "id": "tip_012",
      "match": "Villarreal vs Real Betis",
      "league": "La Liga",
      "prediction": "Over 2.5 Goals",
      "odds": "1.88",
      "room": "free",
      "result": "pending",
      "date": "2026-04-25",
      "time": "19:45",
      "confidence": "Medium",
      "analysis": "Free pick for subscribers. Both mid-table with nothing to lose.",
      "score": null
    }
  ],
  "dailySummary": {
    "2026-04-24": {
      "totalTips": 3,
      "vipTipsCount": 1,
      "ordinaryTipsCount": 1,
      "freeTipsCount": 1,
      "featuredMatch": "Arsenal vs Chelsea",
      "tipsterNote": "VIP members get early access + secret accumulator 👑"
    }
  },
  "contact": {
    "whatsapp": "25676722557",
    "supportHours": "8AM - 10PM (EAT)",
    "vipSubscription": "Contact WhatsApp for daily/weekly VIP plans"
  }
}

Here is the complete, standalone VIP Room HTML code with an elite, dark-blue premium aesthetic, exclusive animations, and full functionality—ready to pair with your existing `tips.json`.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>SM.PREDICTIONS | VIP Lounge - Elite Access</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: radial-gradient(circle at 20% 30%, #071b2b, #010a12);
            color: #eef5ff;
            min-height: 100vh;
            position: relative;
        }

        /* animated gold overlay */
        .vip-bg-glow {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            background: radial-gradient(circle at 70% 20%, rgba(255, 215, 0, 0.08), transparent 70%);
            animation: slowDrift 18s infinite alternate;
        }

        @keyframes slowDrift {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 0.8; transform: scale(1.05); }
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 1.8rem 1.5rem 4rem;
            position: relative;
        }

        /* VIP header with shine & lock */
        .vip-hero {
            text-align: center;
            margin-bottom: 2rem;
            position: relative;
        }

        .vip-badge-icon {
            background: linear-gradient(145deg, #e4b363, #b47c2e);
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            box-shadow: 0 0 25px rgba(255, 200, 50, 0.6);
            animation: floatGlow 3s infinite ease-in-out;
        }

        .vip-badge-icon i {
            font-size: 3rem;
            color: #1e1a0c;
            text-shadow: 0 0 5px gold;
        }

        @keyframes floatGlow {
            0% { transform: translateY(0px); box-shadow: 0 0 15px rgba(255, 200, 0, 0.4);}
            50% { transform: translateY(-8px); box-shadow: 0 0 35px rgba(255, 200, 0, 0.9);}
            100% { transform: translateY(0px); box-shadow: 0 0 15px rgba(255, 200, 0, 0.4);}
        }

        .vip-hero h1 {
            font-size: 3.2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #FFF8E7, #F9D976, #E6B422);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .vip-sub {
            font-size: 1rem;
            background: rgba(0,0,0,0.5);
            display: inline-block;
            padding: 6px 20px;
            border-radius: 60px;
            backdrop-filter: blur(10px);
            margin-top: 12px;
            border-left: 2px solid gold;
            border-right: 2px solid gold;
        }

        /* premium stats row */
        .vip-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;
            justify-content: space-between;
            background: rgba(0, 15, 30, 0.65);
            backdrop-filter: blur(12px);
            border-radius: 44px;
            padding: 1.2rem 2rem;
            margin: 2rem 0;
            border: 1px solid rgba(255, 200, 0, 0.4);
            box-shadow: 0 20px 30px -12px black;
        }

        .stat-card {
            text-align: center;
            flex: 1;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #ffd966, #ffb347);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        /* VIP TIPS GRID - premium cards */
        .vip-tips-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1.8rem;
            margin: 2rem 0;
        }

        .vip-tip-card {
            background: rgba(10, 30, 50, 0.7);
            backdrop-filter: blur(18px);
            border-radius: 40px;
            padding: 1.4rem;
            transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            border: 1px solid rgba(255, 215, 0, 0.4);
            box-shadow: 0 15px 25px -12px black;
            animation: fadeInUp 0.5s ease backwards;
        }

        .vip-tip-card:hover {
            transform: translateY(-8px) scale(1.01);
            border-color: rgba(255, 200, 0, 0.85);
            box-shadow: 0 28px 35px -14px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,200,0,0.2);
        }

        .tip-header {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: #ffdd99;
            margin-bottom: 12px;
        }

        .match-name {
            font-size: 1.5rem;
            font-weight: 800;
            margin: 8px 0;
        }

        .prediction-badge {
            background: #2c2e3e;
            display: inline-block;
            padding: 6px 18px;
            border-radius: 32px;
            font-weight: 700;
            font-size: 1rem;
            margin: 10px 0;
            background: linear-gradient(145deg, #1e2a3a, #0f1a24);
            border-left: 3px solid gold;
        }

        .odds {
            font-family: monospace;
            font-weight: 800;
            font-size: 1.4rem;
            letter-spacing: 1px;
        }

        .vip-lock-badge {
            background: rgba(0,0,0,0.6);
            border-radius: 100px;
            padding: 4px 12px;
            font-size: 0.7rem;
            font-weight: bold;
            color: gold;
        }

        .result-badge {
            margin-top: 12px;
            text-align: right;
            font-weight: 800;
        }

        .won { color: #2ecc71; text-shadow: 0 0 3px #00aa55; }
        .lost { color: #e67e22; }
        .pending { color: #f1c40f; }

        /* exclusive CTA */
        .whatsapp-exclusive {
            background: linear-gradient(95deg, #075e54, #128C7E);
            border-radius: 80px;
            text-align: center;
            padding: 1.2rem;
            margin-top: 2rem;
            transition: 0.2s;
        }

        .whatsapp-exclusive a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2rem;
            letter-spacing: 1px;
        }

        .glow-text {
            color: #ffd966;
        }

        footer {
            margin-top: 3rem;
            text-align: center;
            font-size: 0.75rem;
            opacity: 0.6;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 680px) {
            .vip-hero h1 { font-size: 2rem; }
            .vip-stats { flex-direction: column; text-align: center; gap: 1rem; }
            .vip-tips-grid { grid-template-columns: 1fr; }
        }

        .loader {
            text-align: center;
            padding: 3rem;
            font-size: 1.4rem;
            color: #ffd966;
        }
    </style>
</head>
<body>
<div class="vip-bg-glow"></div>
<div class="container">
    <!-- VIP hero section -->
    <div class="vip-hero">
        <div class="vip-badge-icon">
            <i class="fas fa-crown"></i>
        </div>
        <h1>✧ VIP SANCTUARY ✧</h1>
        <div class="vip-sub">
            <i class="fas fa-gem"></i> elite predictions • early access • maximum value
        </div>
    </div>

    <!-- statistics dynamic (win rate) -->
    <div class="vip-stats" id="vipStats">
        <div class="stat-card"><i class="fas fa-chart-line"></i><br><span class="stat-number" id="winRate">--</span><br>Win Rate (VIP)</div>
        <div class="stat-card"><i class="fas fa-trophy"></i><br><span class="stat-number" id="totalTips">--</span><br>Total VIP Tips</div>
        <div class="stat-card"><i class="fas fa-coins"></i><br><span class="stat-number" id="avgOdds">--</span><br>Avg Odds</div>
    </div>

    <!-- exclusive vip tips -->
    <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-bottom: 10px;">
        <h2 style="font-size: 1.8rem;"><i class="fas fa-lock" style="color: #F5B041;"></i> PRIVATE PICKS</h2>
        <span style="background: #00000066; padding: 5px 15px; border-radius: 100px;"><i class="fab fa-whatsapp"></i> 24/7 support via WhatsApp</span>
    </div>
    <div id="vipTipsContainer" class="vip-tips-grid">
        <div class="loader"><i class="fas fa-spinner fa-pulse"></i> Loading exclusive tips...</div>
    </div>

    <!-- vip extra booster + whatsapp -->
    <div class="whatsapp-exclusive">
        <a href="https://wa.me/25676722557?text=VIP%20ACCESS%20-%20I%20want%20today's%20secret%20tips%20%F0%9F%94%91" target="_blank">
            <i class="fab fa-whatsapp"></i> 🔥 NEED EXTRA TIPS? CHAT VIP HOTLINE +25676722557 🔥
        </a>
        <p style="margin-top: 8px; font-size: 0.8rem;">📲 Subscription support • personal concierge • daily jackpot</p>
    </div>

    <!-- back to home button -->
    <div style="margin-top: 2rem; text-align: center;">
        <a href="index.html" style="color: #aac9ff; text-decoration: none; border-bottom: 1px dashed #ffcc44;">← Back to SM.PREDICTIONS lobby</a>
    </div>

    <footer>
        <p>© SM.PREDICTIONS VIP — confidential picks. For registered members only. 18+ Gambling responsibly.</p>
    </footer>
</div>

<script>
    // FULL VIP LOGIC: fetch tips.json, filter vip only, compute stats, render with animation
    async function loadVipTips() {
        const container = document.getElementById('vipTipsContainer');
        try {
            const response = await fetch('tips.json?v=' + Date.now());
            if (!response.ok) throw new Error('tips.json not found, create file with VIP tips');
            const allTips = await response.json();
            const vipTips = allTips.filter(tip => tip.room && tip.room.toLowerCase() === 'vip');
            
            if (vipTips.length === 0) {
                container.innerHTML = `<div class="vip-tip-card" style="grid-column:1/-1; text-align:center;">
                    <i class="fas fa-eye-slash"></i> No VIP tips yet. <br> 
                    <strong>Add tips in tips.json with "room": "vip"</strong> — your VIP members will see exclusive content.
                </div>`;
                document.getElementById('winRate').innerText = '0%';
                document.getElementById('totalTips').innerText = '0';
                document.getElementById('avgOdds').innerText = '0.00';
                return;
            }

            // calculate win rate for VIP
            let wonCount = 0;
            let totalFinished = 0;
            let sumOdds = 0;
            vipTips.forEach(t => {
                if (t.result === 'won') wonCount++;
                if (t.result === 'won' || t.result === 'lost') totalFinished++;
                let oddsVal = parseFloat(t.odds);
                if (!isNaN(oddsVal)) sumOdds += oddsVal;
            });
            const winRateVIP = totalFinished > 0 ? ((wonCount / totalFinished) * 100).toFixed(1) : '0';
            const avgOddsVIP = (sumOdds / vipTips.length).toFixed(2);
            document.getElementById('winRate').innerText = `${winRateVIP}%`;
            document.getElementById('totalTips').innerText = vipTips.length;
            document.getElementById('avgOdds').innerText = avgOddsVIP;

            // render fancy VIP cards
            container.innerHTML = '';
            vipTips.sort((a,b) => new Date(b.date || 0) - new Date(a.date || 0)); // newest first (if date field exists)
            vipTips.forEach((tip, idx) => {
                const card = document.createElement('div');
                card.className = 'vip-tip-card';
                card.style.animationDelay = `${idx * 0.05}s`;
                const resultClass = tip.result === 'won' ? 'won' : (tip.result === 'lost' ? 'lost' : 'pending');
                const resultIcon = tip.result === 'won' ? '🏆' : (tip.result === 'lost' ? '❌' : '⏳');
                card.innerHTML = `
                    <div class="tip-header">
                        <span><i class="fas fa-diamond"></i> VIP exclusive</span>
                        <span class="vip-lock-badge"><i class="fas fa-lock"></i> premium zone</span>
                    </div>
                    <div class="match-name">⚽ ${escapeHtml(tip.match)}</div>
                    <div class="prediction-badge"><i class="fas fa-chart-simple"></i> ${escapeHtml(tip.prediction)}</div>
                    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 12px;">
                        <span class="odds"><i class="fas fa-percent"></i> ${tip.odds}</span>
                        <span class="result-badge ${resultClass}">${resultIcon} ${tip.result ? tip.result.toUpperCase() : 'PENDING'}</span>
                    </div>
                    <div style="margin-top: 12px; font-size: 0.75rem; border-top: 1px dashed rgba(255,215,0,0.3); padding-top: 8px;">
                        <i class="fas fa-calendar-alt"></i> ${tip.date || 'Latest release'} &nbsp;|&nbsp; 
                        <i class="fas fa-chart-line"></i> confidence: ${tip.confidence || 'Elite'}
                    </div>
                `;
                container.appendChild(card);
            });

            // if less than 2 cards, add a beautiful note
            if (vipTips.length < 3) {
                const noteCard = document.createElement('div');
                noteCard.className = 'vip-tip-card';
                noteCard.style.background = "linear-gradient(145deg, #102334, #04121f)";
                noteCard.innerHTML = `
                    <div style="text-align:center; padding: 20px;">
                        <i class="fas fa-crown" style="font-size: 2.5rem; color: gold;"></i>
                        <h3>VIP experience</h3>
                        <p>Get daily premium tips delivered <strong>first on WhatsApp</strong>.<br>
                        👑 <a href="https://wa.me/25676722557" style="color: #ffcc66;">Contact +25676722557</a> for weekly subscription.</p>
                    </div>
                `;
                container.appendChild(noteCard);
            }

        } catch (error) {
            console.error(error);
            container.innerHTML = `<div class="vip-tip-card" style="grid-column:1/-1; text-align:center; background: #220000aa;">
                <i class="fas fa-database"></i> Warning: tips.json not found or invalid. <br>
                Ensure you have uploaded "tips.json" with VIP entries. 
                <pre style="background:#00000077; margin-top:12px;">Example: {"match":"Arsenal vs Chelsea","prediction":"GG","odds":"1.85","room":"vip","result":"pending"}</pre>
                <a href="index.html" style="color:white;">← go to home & create file</a>
            </div>`;
            document.getElementById('winRate').innerText = '0%';
            document.getElementById('totalTips').innerText = '0';
            document.getElementById('avgOdds').innerText = '0.00';
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    loadVipTips();
    // auto refresh every 5 mins (optional)
    setInterval(loadVipTips, 300000);
</script>
</body>
</html>
```
