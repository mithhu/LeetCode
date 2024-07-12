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
    let pCopy = p;
    let qCopy = q;
    
    while (pCopy !== qCopy) {
        if (pCopy) {
            pCopy = pCopy.parent;
        } else {
            pCopy = q;
        }
        if (qCopy) {
            qCopy = qCopy.parent; 
        } else {
            qCopy = p;
        }
    }
    
    return pCopy;
    
};