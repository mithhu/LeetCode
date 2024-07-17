/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const numAsArr = [];
    
    while (num) {
        numAsArr.unshift(num % 10);
        num = Math.floor(num / 10)
    }
    
    let maxVal = -1;
    let maxIdx = numAsArr.length;
    
    let i = numAsArr.length - 1;
    
    while (i >= 0) {
        let currVal = numAsArr[i];
        numAsArr[i] = [currVal, maxVal, maxIdx];
        if (currVal > maxVal) {
            maxVal = currVal;
            maxIdx = i;
        }
        i--;
    }
    
    i = 0;
    
    while (i < numAsArr.length) {
        let [currVal, maxToRight, maxRightIdx] = numAsArr[i];
        if (currVal < maxToRight) {
            [numAsArr[i], numAsArr[maxRightIdx]] = [numAsArr[maxRightIdx], numAsArr[i]];
             break;
        }
        i++;
    }
    
    let res = 0;
    for (let [num] of numAsArr) {
        res = (res * 10) + num; 
    }
    return res;
};