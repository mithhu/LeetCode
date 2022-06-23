/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let leftMin = 0;
  let leftMax = 0;
  
  for (let ch of s) {
    if (ch === "(") {
      leftMin++;
      leftMax++;
    } else if (ch === ")") {
      leftMin--;
      leftMax--;
    } else { //*
      leftMin--; //)
      leftMax++; //(
    }
    
    if (leftMax < 0) {
      return false;
    }
    
    if (leftMin < 0) {
      leftMin++;
    }
  }
  
  return leftMin === 0;
    
};