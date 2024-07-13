/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    if (heights.length === 0) {
        return []
    }
    let maxH = -1;
    const res = [];
    
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > maxH) {
            maxH = heights[i];
            res.push(i);
        }
    }
    
    return res.reverse();
    
};