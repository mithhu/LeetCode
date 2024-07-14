/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    if (firstList.length === 0 || secondList.length === 0) {
        return [];
    }
    
    let p1 = 0, p2 = 0;
    const res = [];
    
    while (p1 < firstList.length && p2 < secondList.length) {
        const [start1, end1] = firstList[p1];
        const [start2, end2] = secondList[p2];
        
        if (start1 > end2) {
            p2++;
        } else if (start2 > end1) {
            p1++;
        } else {
            res.push([Math.max(start1, start2), Math.min(end1, end2)]);
            if (end1 > end2) {
                p2++
            } else {
                p1++;
            }
        } 
    }
    
    return res;
    
    
};