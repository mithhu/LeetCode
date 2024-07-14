/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const sCounts = new Map();
    for (let ch of s) {
        sCounts.set(ch, (sCounts.get(ch) || 0) + 1);
    }
    
    const strBuilder = [];
    
    for (let ch of order) {
        strBuilder.push(ch.repeat(sCounts.get(ch)));
        sCounts.delete(ch);
    }
    
    for (let [ch, count] of sCounts) {
        strBuilder.push(ch.repeat(count));   
    }
    
    return strBuilder.join('');
};