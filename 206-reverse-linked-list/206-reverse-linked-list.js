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
var reverseList = function(head) {
    let cNode = null;
    while(head !==null){
        let newList = new ListNode(head.val);
        newList.next =cNode;
        cNode = newList;
        
        head=head.next;
    }
    return cNode;
   
  
    
};