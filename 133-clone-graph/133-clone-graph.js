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
  const oldToNew = new Map();
  
  function cloneDfs(node) {
    if (node === null) return null;
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }
    
    let copy = new Node(node.val);
    oldToNew.set(node, copy);
    for (let nei of node.neighbors) {
      copy.neighbors.push(cloneDfs(nei));
    }
    return copy;
  }
  
  return cloneDfs(node);
    
};