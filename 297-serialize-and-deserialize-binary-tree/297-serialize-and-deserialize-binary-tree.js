function serialize(root) {
  // your code here
  const arr = [];
  function generateTree(node) {
    if (!node) {
      arr.push("n");
      return;
    }
    arr.push(node.val);
    generateTree(node.left);
    generateTree(node.right);
  }
  
  generateTree(root);
  return arr.join(",");

}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  let vals = str.split(",");
  let i = 0;
  
  function dfs() {
    let current = vals[i];
    if (current === "n") {
      i++;
      return null;
    }
    let currentNode = new TreeNode(current);
    i++;
    currentNode.left = dfs();
    currentNode.right = dfs();
    return currentNode;
  }
  
  return dfs()
  
  
}