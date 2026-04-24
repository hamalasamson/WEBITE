name: Auto-Update Betting Odds

on:
  schedule:
    # Runs every 6 hours
    - cron: '0 */6 * * *'
  # Allows manual trigger from GitHub UI
  workflow_dispatch:

jobs:
  update-odds:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Run odds updater
      env:
        ODDS_API_KEY: ${{ secrets.ODDS_API_KEY }}
      run: npm run update-odds
      
    - name: Check for changes
      id: git-check
      run: |
        git config --global user.name 'GitHub Action'
        git config --global user.email 'action@github.com'
        git add tips.json
        git diff --staged --quiet || echo "changes=true" >> $GITHUB_OUTPUT
        
    - name: Commit and push if changed
      if: steps.git-check.outputs.changes == 'true'
      run: |
        git commit -m "🤖 Auto-update odds [skip ci]"
        git push
