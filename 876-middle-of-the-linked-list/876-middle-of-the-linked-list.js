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
    let length = 0
    let mid =0
    let list = []
    
    while(head){
       length++
        list.push(head)
        head=head.next  
        if(length % 2===0) mid = length/2 +1
        else mid = Math.ceil(length/2)
        
    }
    return list[mid-1]
    
    
    
};