/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    
    const copiedNodes = new Map();
    copiedNodes.set(head, new Node(head.val));
    
    let curr = head;
    
    while (curr) {
        if (curr.next && !(copiedNodes.has(curr.next))) {
            copiedNodes.set(curr.next, new Node(curr.next.val));   
        }
        copiedNodes.get(curr).next = copiedNodes.get(curr.next) || null;
        
        if (curr.random && !(copiedNodes.has(curr.random))) {
            copiedNodes.set(curr.random, new Node(curr.random.val));   
        }
        copiedNodes.get(curr).random = copiedNodes.get(curr.random) || null;
        curr = curr.next;
    }
    
    return copiedNodes.get(head)
    
};