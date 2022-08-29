/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  let count = Array(n).fill(0);
  let seen = new Set();
  
  for (let road of roads) {
    count[road[0]]++;
    count[road[1]]++;
    seen.add(road[0]+"_"+road[1]);
    seen.add(road[1]+"_"+road[0]);
  }
  
  
  let rank = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      rank = Math.max(rank, count[i] + count[j] - Number(seen.has(i+"_"+j) ? 1 : 0))    }
  }
  
  return rank;
    
};