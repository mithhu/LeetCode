/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let R = matrix.length;
    let C = matrix[0].length;
    
    function isDiagonal(r, c) {
        let val = matrix[r][c];
        
        while (r < R && c < C) {
            if (matrix[r][c] !== val) {
                return false;
            }
            r++;
            c++;
        }
        return true;
    }
    
    
    for (let c = 0; c < C; c++) {
        if (!isDiagonal(0, c)) {
            return false;
        }
    }
    
    for (let r = 1; r < R; r++) {
        if (!isDiagonal(r, 0)) {
            return false;
        }
    }
    
    return true;
    
};