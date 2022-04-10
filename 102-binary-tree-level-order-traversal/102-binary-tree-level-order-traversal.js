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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  if (root == null) return res;
  const q = new Queue();
  q.enqueue(root);
  
  while (q.size()) {
    let len = q.size();
    let levelArr = [];
    for (let i = 0; i < len; i++) {
      let current = q.dequeue();
      levelArr.push(current.val);
      if (current.left) {
        q.enqueue(current.left);        
      }
      if (current.right) {
        q.enqueue(current.right);
      }
    }
    res.push(levelArr);
  }
  
  return res;
    
};