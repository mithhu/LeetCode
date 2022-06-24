/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let maxHeap = new MaxPriorityQueue();
  
  function dfs(node) {
    if (node === null) {
      return;
    }
    maxHeap.enqueue(node.val);
    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }
    dfs(node.left);
    dfs(node.right);
  }
  
  dfs(root);
  return maxHeap.front().element;
    
};