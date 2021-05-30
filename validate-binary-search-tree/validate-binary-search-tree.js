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
 * @return {boolean}
 */
const dfs = function(node, min, max) {
    if(node.val <= min || node.val >= max) {
      return false;
    }
    
    if(node.left) {
      if(!dfs(node.left, min, node.val)){
        return false;
      };
    }
    
    if(node.right) {
      if(!dfs(node.right, node.val, max)) {
        return false;
      }
    }
    
    return true;
}

const isValidBST = function(root) {
    if(!root) return true;
    return dfs(root, -Infinity, Infinity);
};