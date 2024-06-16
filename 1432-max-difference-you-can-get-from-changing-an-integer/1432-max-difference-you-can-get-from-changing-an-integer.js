/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const numStr = num.toString();
    
    // Step to find the maximum possible number (a)
    let maxNumStr = numStr;
    for (let char of numStr) {
        if (char !== '9') {
            maxNumStr = numStr.replaceAll(char, '9');
            break;
        }
    }
    const maxNum = parseInt(maxNumStr);

    // Step to find the minimum possible number (b)
    let minNumStr;
    if (numStr[0] !== '1') {
        minNumStr = numStr.replaceAll(numStr[0], '1');
    } else {
        minNumStr = numStr;
        for (let i = 1; i < numStr.length; i++) {
            if (numStr[i] !== '0' && numStr[i] !== '1') {
                minNumStr = numStr.replaceAll(numStr[i], '0');
                break;
            }
        }
    }
    const minNum = parseInt(minNumStr);

    // Calculate and return the difference
    return maxNum - minNum;
}
