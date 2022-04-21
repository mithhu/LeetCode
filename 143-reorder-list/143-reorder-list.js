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
  if (head === null || head.next === null) return;
  
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let firstHalfHead = head;
  let secondHalfHead = reverseList(slow);
  
  while (secondHalfHead !== null) {
    let temp1 = firstHalfHead.next;
    let temp2 = secondHalfHead.next;
    firstHalfHead.next = secondHalfHead;
    secondHalfHead.next = temp1;

    firstHalfHead = temp1;
    secondHalfHead = temp2;
  }
    
  if (firstHalfHead !== null) {
    firstHalfHead.next = null;
  }
};



function reverseList(node) {
  let prev = null;
  while (node) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }
  
  return prev;
}