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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let res = [];
  if (root === null) return res;
  
  let q = new Queue();
  q.enqueue(root);
  
  while (q.size()) {
    let len = q.size();

    
    for (let i = 0; i < len; i++) {
      let curr = q.dequeue();
      if (i === len - 1) {
        res.push(curr.val);
      }
      if (curr.left) {
        q.enqueue(curr.left)
      }
      if (curr.right) {
        q.enqueue(curr.right)
      }
    }
  }
  
  return res;
    
};