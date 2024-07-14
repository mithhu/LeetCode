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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let rangeSum = 0;
    
    function dfs(node) {
        if (!node) {
            return 0;
        }
       // check valid val
       if (node.val >= low && node.val <= high) {
           rangeSum += node.val;
       }

       //left
       if (node.val > low) {
           dfs(node.left);
       }           
       //right
       if (node.val < high) {
           dfs(node.right);
        } 
    }
    
    dfs(root);
    return rangeSum;
};