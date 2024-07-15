/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const groupedStr = {};
    
    for (let str of strings) {
        if (str.length === 1) {
            const key = "-1";
            if (!(key in groupedStr)) {
                groupedStr[key] = [];
            }
            groupedStr[key].push(str);
        } else {
            const keyArr = [];
            for (let i = 1; i < str.length; i++) {
                const diff = (str[i].charCodeAt() - str[i-1].charCodeAt() + 26) % 26
                keyArr.push(diff)
            }
            const key = keyArr.join("_");
            if (!(key in groupedStr)) {
                groupedStr[key] = [];
            }
            groupedStr[key].push(str);
            
        }
    }
    
    return Object.values(groupedStr)    
};