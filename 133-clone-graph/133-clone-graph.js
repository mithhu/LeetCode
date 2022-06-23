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
  let map = new Map();
  
  function dfs(node) {
    if (node === null) {
      return null;
    }
    if (map.has(node)) {
      return map.get(node);
    }
    let copy = new Node(node.val);
    map.set(node, copy);
    
    for (let nei of node.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
    
  }
  
  return dfs(node);
};