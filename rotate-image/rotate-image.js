/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(matrix.length !== matrix[0].length) {
        return
    }
    for(let layer = 0; layer < matrix.length / 2; layer++) {
        rotateHelper(matrix, layer, matrix.length - 1 - layer)
    }
    
};
​
function rotateHelper(matrix, start, end) {
    for(let current = 0; start + current < end; current++) {
        let temp = matrix[start][start+current];
        matrix[start][start+current] = matrix[end-current][start]
        matrix[end-current][start] = matrix[end][end-current]
        matrix[end][end-current] = matrix[start+current][end]
        matrix[start+current][end] = temp
    }
}
