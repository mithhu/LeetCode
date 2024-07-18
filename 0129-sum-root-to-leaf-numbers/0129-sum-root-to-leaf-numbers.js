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
 * @return {number}
 */
var sumNumbers = function(root) {
    function dfs(node, sum) {
        if (node === null) {
            return 0
        };
        
        sum = (sum * 10) + node.val;
        if (node.left === null && node.right === null) {
            return sum;
        }
        let left =  node.left ? dfs(node.left, sum) : 0;
        let right = node.right ? dfs(node.right, sum) : 0;
        return left + right;
        
        
    } 
    
    return dfs(root, 0)
    
};