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

// iterate through the list, use one slow point and one fast point,


var hasCycle = function(head) {
    if(head===null)return false
    
    let fast = head
    let slow = head
    
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) return true
    }
    return false
    
};