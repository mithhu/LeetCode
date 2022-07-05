/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  
  while (curr && curr.next) {
    //save ptrs
    let nextPnt = curr.next.next;
    let second = curr.next;
    
    //reverse
    second.next = curr;
    curr.next = nextPnt;
    prev.next = second;
    
    //update ptr
    prev = curr;
    curr = nextPnt;
  }
  
  return dummy.next;
    
};