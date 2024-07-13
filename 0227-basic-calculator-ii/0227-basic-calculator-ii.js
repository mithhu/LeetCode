/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    let i = 0;
    let curr = 0;
    let res = 0;
    let prev = 0;
    let curr_oper = "+";

    while (i < s.length) {
        let curr_char = s[i];
        if (!isNaN(parseInt(curr_char))) {
            while (i < s.length && !isNaN(parseInt(s[i]))) {
                curr = curr * 10 + parseInt(s[i]);
                i++;
            }
            i--;

            if (curr_oper === "+") {
                res += curr;
                prev = curr;
            } else if (curr_oper === "-") {
                res -= curr;
                prev = -curr;
            } else if (curr_oper === "*") {
                res -= prev;
                res += curr * prev;
                prev = curr * prev;
            } else {
                res -= prev;
                res += Math.trunc(prev / curr);
                prev = Math.trunc(prev / curr);
            }

            curr = 0;
        } else if (curr_char !== " ") {
            curr_oper = curr_char;
        }
        i++;
    }
    return res;
}
