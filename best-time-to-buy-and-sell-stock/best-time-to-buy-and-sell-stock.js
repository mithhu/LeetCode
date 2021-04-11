/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) {
        return 0;
    }
    
    let minSoFar = Infinity;
    let maxTrade = 0;
    
    for (let i=0; i<prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i]);
        let currentMax = prices[i] - minSoFar;
        maxTrade = Math.max(maxTrade, currentMax);
    }
    
    return maxTrade;
    
};