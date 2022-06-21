/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
  if (root === null || root === p || root === q) {
    return root;
  }
  
  let leftLca = lowestCommonAncestor(root.left, p, q);
  let rightLca = lowestCommonAncestor(root.right, p, q);
  
  if (leftLca === null) {
    return rightLca;
  } else if (rightLca === null) {
    return leftLca;
  } else {
    return root
  }
    
};