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
    if (lists.length === 0) {
        return null;
    }
    
    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i+=2) {
            let l1 = lists[i];
            if (i + 1 >= lists.length) {
                mergedList.push(l1);
                continue;
            }
            let l2 = lists[i + 1];
            mergedList.push(mergeLists(l1, l2))
        }
        lists = [...mergedList];
    }
    return lists[0];
    
};

function mergeLists(l1, l2) {
    const dummy = new ListNode();
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
    
    tail.next = l1 || l2;
    
    return dummy.next;
}