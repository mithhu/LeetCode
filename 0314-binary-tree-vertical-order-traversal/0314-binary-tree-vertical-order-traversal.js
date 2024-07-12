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
var verticalOrder = function(root) {
    if (!root) return [];
    
    let minX = Infinity
    let maxX = -Infinity
    const res = [];
    const colValues = new Map();
    
    const queue = [[0, root]];
    
    
    while (queue.length > 0) {
        const [c, node] = queue.shift();
        
        if (!colValues.has(c)) {
            colValues.set(c, []);
        }
        colValues.get(c).push(node.val);
        
        minX = Math.min(minX, c);
        maxX = Math.max(maxX, c);
        
        if (node.left) {
            queue.push([c - 1, node.left])
        }
        
        if (node.right) {
            queue.push([c + 1, node.right])
        }   
    }
    
    for (let c = minX; c <= maxX; c++) {
        if (colValues.has(c)) {
            res.push(colValues.get(c))
        }
    }
    
    return res;
    
    
};