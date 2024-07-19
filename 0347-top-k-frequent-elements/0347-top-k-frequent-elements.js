/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    let maxFreq = 0
    for (let num of nums) {
        if (!(num in map)) {
            map[num] = 0;
        }
        map[num]++;
        
        if (map[num] > maxFreq) {
            maxFreq = map[num];
        }
    }

    
    const arrFreq = Array(maxFreq + 1).fill().map(() => []);
    for (let key in map) {
        let val = map[key];
        arrFreq[val].push(key);
    }
        
    let res = [];
    
    for (let i = arrFreq.length - 1; i >= 0; i--) {
        arrFreq[i].forEach((num) => {
            res.push(num);
        });
        if (res.length === k) {
            return res
        }
    }
    
};