/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minH = new MinPriorityQueue();
    for (let num of nums) {
        if (minH.size() < k) {
            minH.enqueue(num);
        } else {
            if (num > minH.front().element) {
                minH.dequeue();
                minH.enqueue(num);
            }
        }
    }
    
    return minH.front().element;
    
};