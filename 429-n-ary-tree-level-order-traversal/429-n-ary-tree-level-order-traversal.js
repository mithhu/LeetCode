/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  let res = [];
  if (root === null) return res;
  
  let q = new Queue();
  q.enqueue(root);
  
  while (q.size()) {
    let len = q.size();
    let currArr = [];
    
    for (let i = 0; i < len; i++) {
      let curr = q.dequeue();
      currArr.push(curr.val);
      for (let child of curr.children) {
        q.enqueue(child)
        
      }
    }
    res.push(currArr);
  }
  
  return res;
    
};