/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function(head, insertVal) {
    if (!head) {
        const newHead = new Node(insertVal);
        newHead.next = newHead;
        return newHead;
    }
    
    let cur = head;
    
    while (cur.next !== head) {
        if (insertVal >= cur.val && insertVal <= cur.next.val) {
            let newNode = new Node(insertVal, cur.next);
            cur.next = newNode;
            return head;
        }
        
        if (cur.val > cur.next.val) {
            if (insertVal >= cur.val || insertVal <= cur.next.val) {
                let newNode = new Node(insertVal, cur.next);
                cur.next = newNode;
                return head;
            }
        }
        
        cur = cur.next;
    }
    
    let newNode = new Node(insertVal, cur.next);
    cur.next = newNode;
    return head;
};