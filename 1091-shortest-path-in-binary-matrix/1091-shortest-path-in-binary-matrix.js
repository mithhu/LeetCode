/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length;
    if (grid[0][0] || grid[n - 1][n - 1]) {
        return -1;
    }
    let dir = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    let q = [[0, 0, 1]];
    
    grid[0][0] = 1;
    
    while (q.length > 0) {
        let [r, c, pathLen] = q.shift();
        if (r === n-1 && c === n-1) {
            return pathLen
        }
        
        for (let [dr, dc] of dir) {
            let nr = r + dr;
            let nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < n && nc < n && !grid[nr][nc]) {
                q.push([nr, nc, pathLen + 1]);
                grid[nr][nc] = 1;
            }
        }
    }
    
    return -1;
};