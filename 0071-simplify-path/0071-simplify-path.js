/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const pathItems = path.split("/");
    
    for (let item of pathItems) {
        if (!item || item === ".") {
            continue;
        } else if (item === "..") {
            stack.pop();
        } else {
            stack.push(item)
        }
    }
    
    return "/" + stack.join("/");
};