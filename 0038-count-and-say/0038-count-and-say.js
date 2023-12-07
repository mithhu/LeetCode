/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = "1";
    
    while (n > 1) {
        res = transferToChar(res); //11121312
        n -= 1;
    }
    
    return res;
};


function transferToChar(chs) { //1112
    let selectedChar = chs[0];
    let count = 0; //3
    let res = "";
    
    for (let ch of chs) {
        if (ch === selectedChar) {
            count += 1
        } else {
            res += `${count}${selectedChar}` //13
            selectedChar = ch;
            count = 1;
        }
    }
    res += `${count}${selectedChar}` //1312
    return res;
}