/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    if (N === 1 && K === 1) {
        return 0;
    }
    let mid = (Math.pow(2, N-1) / 2);
    if (K <= mid) {
        return kthGrammar(N-1, K)
    } else {
        return !kthGrammar(N-1, K-mid)
    }
};
