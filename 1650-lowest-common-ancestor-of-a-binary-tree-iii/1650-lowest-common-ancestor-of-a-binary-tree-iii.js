/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    const seen = new Set();
    
    while (p) {
        seen.add(p);
        p = p.parent;
    }
    
    while (q) {
        if (seen.has(q)) {
            return q;
        }
        q = q.parent
    }
    
};