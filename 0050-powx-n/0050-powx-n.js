/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const isNeg = n < 0;
    const memo = {};
    n = Math.abs(n);
    
    function fastPow(x, n) {
        if (n in memo) {
            return memo[n];
        }
        
        if (n === 0) {
            return 1;
        }
        
        if (n === 1) {
            return x;
        }
        
        memo[n] = fastPow(x, Math.floor(n / 2)) * fastPow(x, Math.floor(n / 2)) * (n % 2 ? x : 1)
        return memo[n];
        
    }
    
    let res = fastPow(x, n);
    
    return isNeg ? (1 / res) : res; 
};