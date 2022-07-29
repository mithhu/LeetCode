/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: 'pqrs',
    8: "tuv",
    9: "wxyz",
}

function letterCombinationsHelper(str) {
    if (str.length === 0) {
        return [""];
    }
    
    let chs = map[str[0]];
    let restArr = str.slice(1);
    
    let getRes = letterCombinationsHelper(restArr);
    
    let res = [];
    for (let ch of chs) {
        for (let el of [...getRes]) {
            res.push(ch + el)
        }
    }
    return res;
}

function letterCombinations(str) {
  if (str.length === 0) {
        return [];
  }
  return letterCombinationsHelper(str);
}

