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
var middleNode = function(head) {
    
    let slow = head
    let fast = head
    let counter = 0
    
    while(fast && fast.next){
       
        fast = fast.next.next
        slow = slow.next
                
      counter++  
    }
    if((counter * 2) % 2 !== 0){
        return slow.next
    }else{
        return slow
    }
    
};