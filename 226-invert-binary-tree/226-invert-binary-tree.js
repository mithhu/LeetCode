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
 * @return {TreeNode}
 */


function invertTree(root) {
  // Write your code here.
	if (root === null) return null;
	
	swapTree(root);
	invertTree(root.left);
	invertTree(root.right);
  return root;
}

function swapTree(node) {
	const temp = node.left;
	node.left = node.right;
	node.right = temp;
}