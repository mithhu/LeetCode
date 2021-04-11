/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let row = 0;
    let col = 0;
    let up = true;
    let arr = []
    
    if(matrix.length <= 1 || matrix[0].length <= 1) {
        return matrix.flat()
    }
    
    while(true) {
        arr.push(matrix[row][col]);
        if((row === 0 || row === matrix.length - 1) && col !== matrix[0].length - 1) {
            
            col++;
            up = !up;
            arr.push(matrix[row][col]);
        } else if(col === 0 || col === matrix[0].length - 1) {
            row++;
            up = !up;
            arr.push(matrix[row][col]);
        } 
        
        if(row === matrix.length - 1 && col === matrix[0].length - 1) {
            break;
        }
        
        row = up ? row - 1 : row + 1;
        col = up ? col + 1 : col - 1;
    }
    
    return arr
    
};
