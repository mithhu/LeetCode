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
  
  let copyOfGraph = new Map(); //{}
  
  function graphCopyHelper(node) {
    if (node === null) {
      return null;
    }
    
    if (copyOfGraph.has(node)) {
      return copyOfGraph.get(node);
    }
    
    let copy = new Node(node.val);
    copyOfGraph.set(node, copy);
    
    for (let nei of node.neighbors) {
      copy.neighbors.push(graphCopyHelper(nei));
    }
    return copy;
  } 
  return graphCopyHelper(node);    
};