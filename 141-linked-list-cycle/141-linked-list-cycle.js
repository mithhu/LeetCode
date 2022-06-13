/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next; //1 n + 1
    fast = fast.next.next; //2
    
    if (slow === fast) {
      return true;
    }
  }
  
  return false;
    
};