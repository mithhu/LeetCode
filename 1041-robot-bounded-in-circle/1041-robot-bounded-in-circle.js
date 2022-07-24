/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let dirX = 0;
  let dirY = 1;

  let x = 0;
  let y = 0;

  for (const dir of instructions) {
    if (dir === "G") {
      x += dirX;
      y += dirY;
    } else if (dir === "L") {
      // [dirX, dirY] = [-1 * dirY, dirX];
        let temp = dirY;
            dirY = dirX;
            dirX = -temp;

    } else {
      // [dirX, dirY] = [dirY, -1 * dirX];
        let temp = dirX;
            dirX = dirY;
            dirY = -temp;

    }
  }

  return (x === 0 && y === 0) || dirY !== 1;
};