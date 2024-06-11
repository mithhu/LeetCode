/**
 * @param {number} n
 * @return {number}
 */

var countLargestGroup = function(n) {
        const dp = {0: 0}; 
        const counts = new Array(4 * 9).fill(0); 

        for (let i = 1; i <= n; i++) {
            const quotient = Math.floor(i / 10); 
            const remainder = i % 10;
            dp[i] = remainder + (dp[quotient] || 0); 
            counts[dp[i] - 1]++; 
        }

        const maxCount = Math.max(...counts);
        return counts.filter(count => count === maxCount).length;
    }