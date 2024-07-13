/**
 * @param {number[]} heights
 * @return {number[]}
 */


function findBuildings(heights) {
    if (!heights.length) {
      return [];
    }

    let maxHeight = -1;
    let res = [];

    for (let i = heights.length - 1; i >= 0; i--) {
      let curHeight = heights[i];

      if (curHeight > maxHeight) {
        res.unshift(i);
        maxHeight = curHeight;
      }
    }

    return res;
  }