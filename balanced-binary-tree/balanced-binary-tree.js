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
var isBalanced = function(root) {
    return helper(root) !== -1 ? true : false
};

const helper = (root) => {
    if (root === null) {
        return 0;
    }
    
    let leftH = helper(root.left)
    let rightH = helper(root.right)
    
    if (leftH === -1 || rightH === -1) {
        return -1;
    }
    
    if (Math.abs(leftH - rightH) > 1) {
        return -1;
    }
    
    return 1 + Math.max(leftH, rightH)
}