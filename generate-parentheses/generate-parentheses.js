/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let open = n;
    let close = n;
    let arr = [];
    let OP = "";
    
    return solve(open, close, arr, OP)
};
​
function solve(open, close, arr, OP) {
    if(open === 0 && close === 0) {
        arr.push(OP);
        return;
    }
    
    if(open !== 0) {
        let OP1 = OP;
        OP1 += "(";
        solve(open - 1, close, arr, OP1)
    }
    if(close > open) {
        let OP2 = OP;
        OP2 += ")";
        solve(open, close - 1, arr, OP2)
    }
    return arr;
}
