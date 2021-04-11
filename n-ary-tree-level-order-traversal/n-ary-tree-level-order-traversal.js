/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return []
    let currentLevel = []
    let result = [];
    currentLevel.push(root)
    result.push([root.val])
    currentLevel.push(new Node("NONE", []))
    
    while(currentLevel.length) {  
        let current = currentLevel.shift();
        if(current.val === "NONE" && currentLevel.length) {
            let newResult = []
            for (let val of currentLevel) {
                newResult.push(val.val)          
            }
            result.push(newResult)
            currentLevel.push(new Node("NONE", []))
        } else {       
            for (let child of current.children) {
                currentLevel.push(child)          
            }
        } 
    }
    return result   
};