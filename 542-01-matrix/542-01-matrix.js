/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let R = mat.length;
  let C = mat[0].length;
  let q = [];
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (mat[r][c] === 0) {
        q.push([r, c]);
      } else {
        mat[r][c] = "#";
      }
    }
  }

  let DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
  while (q.length) {
    let [r, c] = q.shift();
    for (let [dr, dc] of DIR) {
      let nr = r + dr;
      let nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= R || nc >= C || mat[nr][nc] !== "#") {
        continue;
      }
      mat[nr][nc] = mat[r][c] + 1;
      q.push([nr, nc]);
    }
  }
  return mat;
};