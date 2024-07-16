/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function(encoded1, encoded2) {
    let i = 0;
    let j = 0;
    let res = [];
    
    while (i < encoded1.length && j < encoded2.length) {
        let [val1, freq1] = encoded1[i];
        let [val2, freq2] = encoded2[j];
        
        let prod = val1 * val2;
        let freq = Math.min(freq1, freq2);
        
        if (res.length === 0 || res[res.length - 1][0] !== prod) {
            res.push([prod, freq]);
        } else {
            res[res.length - 1][1] += freq;
        }
        
        encoded1[i][1] -= freq;
        encoded2[j][1] -= freq;
        
        if (freq1 === freq) {
            i++;
        }
        if (freq2 === freq) {
            j++;
        }
    }
    
    return res;
    
};