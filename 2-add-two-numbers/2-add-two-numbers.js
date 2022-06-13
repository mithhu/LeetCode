/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  
  let carry = 0;
  
  while (l1 || l2 || carry) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;
    
    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    curr.next = new ListNode(val);
    
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  
  return dummy.next;
    
};