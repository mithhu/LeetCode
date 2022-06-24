/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null) return null;
  
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let firstHead = head;
  let secondHead = reverseList(slow);
  
  while (secondHead) {
    let temp1 = firstHead.next;
    let temp2 = secondHead.next;
    
    firstHead.next = secondHead;
    secondHead.next = temp1;
    
    firstHead = temp1;
    secondHead = temp2;
  }
  
  if (firstHead) {
    firstHead.next = null;
  }
  
  return head;
};


function reverseList(node) {
  let prev = null;
  let curr = node;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return prev;
  
}


