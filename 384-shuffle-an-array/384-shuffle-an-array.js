class Solution {
  constructor(nums) {
    this.nums = nums;
  }
  
  reset() {
    return this.nums;
  }
  
  shuffle() {
    let a = [...this.nums];
    for (let i = 0; i < a.length; i++) {
      let rand = Math.floor(Math.random() * (a.length - i)) + i;
        var tmp = a[i];
        a[i] = a[rand];
        a[rand] = tmp;
    }
    return a;
  }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */