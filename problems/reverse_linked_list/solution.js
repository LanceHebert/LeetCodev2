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

// given head of the list
// reverse list, return that list

var reverseList = function(head) {
    let next =null
    let prev =null
    
    while(head){
        next = head.next  // 2
        head.next = prev // null
        prev = head   // 1     
        head = next   // 2
    }
    
    return prev
    
};