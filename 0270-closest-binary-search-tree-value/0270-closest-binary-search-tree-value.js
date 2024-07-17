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
 * @param {number} target
 * @return {number}
 */



   function closestValue(root, target) {
        let closest = root.val;

        while (root !== null) {
            if (Math.abs(target - root.val) < Math.abs(target - closest) || 
                (Math.abs(target - root.val) === Math.abs(target - closest) && root.val < closest)) {
                closest = root.val;
            }

            if (target < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return closest;
    }


// Example usage:
// const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5));
// const solution = new Solution();
// console.log(solution.closestValue(root, 3.714286)); // Output: 4

