/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    if (!root) {
        return null;
    }
    
    let first = null;
    let last = null;
    
    function inOrderLink(node) {
        if (node) {
            inOrderLink(node.left);
            
            if (!last) {
                first = node; //run 1 time
            } else {
                node.left = last;
                last.right = node;
            }
            
            last = node;
            
            
            inOrderLink(node.right);
        }
    }
    inOrderLink(root);
    
    
    first.left = last;
    last.right = first;
    
    return first;
};