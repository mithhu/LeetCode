/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let R = mat.length;
    let C = mat[0].length;
    let res = [];
    let up = true;
    
    let r = 0;
    let c = 0;
    
    while (res.length < R * C) {
        if (up) {
        while (r >= 0 && c < C) {
            res.push(mat[r][c]);
            r -= 1;
            c += 1;
        }
        if (c === C) {
            c -= 1;
            r += 2;
        } else {
            r += 1;
        }

        up = false;
    } else {
        while (c >= 0 && r < R) {
            res.push(mat[r][c]);
            c -= 1;
            r += 1;
        }
        
        if (r === R) {
            r -= 1;
            c += 2;
        } else {
            c += 1;
        }
        up = true;
    }
    
    }
    
    
    return res;
    
    
};