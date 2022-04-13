/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists === null || lists.length === 0) return null;
  
  while (lists.length > 1) {
    let mergedLists = [];
    
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergedList(l1, l2));
    }
    lists = mergedLists;
  }
  return lists[0];
    
};

function mergedList(l1, l2) {
  let dummy = new ListNode();
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  
  if (l1) {
    tail.next = l1;
  }
  if (l2) {
    tail.next = l2;
  }
  return dummy.next;
}