/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = "1";
    
    while (n > 1) {
        res = transferToChar(res);
        n -= 1;
    }
    
    return res;
};


function transferToChar(chs) {
    let resultArr = [];
    let selectedChar = chs[0];
    let count = 0;

    for (let ch of chs) {
        if (ch === selectedChar) {
            count += 1;
        } else {
            resultArr.push(count.toString(), selectedChar);
            selectedChar = ch;
            count = 1;
        }
    }

    resultArr.push(count.toString(), selectedChar);
    return resultArr.join('');
}