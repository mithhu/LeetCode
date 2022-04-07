/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let oldToNew = new Map();
  
  function clone(node) {
    if (node === null) return null;
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }
    
    let copy = new Node(node.val);
    oldToNew.set(node, copy);
    for (let nei of [...node.neighbors]) {
      copy.neighbors.push(clone(nei));
    }
    return copy;  
  }
  
  return clone(node);
    
};