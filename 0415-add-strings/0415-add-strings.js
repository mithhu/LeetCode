/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i1 = num1.length - 1;
    let i2 = num2.length - 1;
    let res = [];
    let carry = 0;
    
    while (i1 >= 0 || i2 >= 0) {
        let val1 = i1 >= 0 ? parseInt(num1[i1]) : 0;
        let val2 = i2 >= 0 ? parseInt(num2[i2]) : 0;
        
        let sum = val1 + val2 + carry;
        
        res.push(sum % 10);
        carry = Math.floor(sum / 10);
        i1--;
        i2--;
    }
    
    if (carry) {
        res.push(carry);
    }
    
    return res.reverse().join("")
    
};