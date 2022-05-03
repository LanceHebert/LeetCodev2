/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head1 = list1
    let head2 = list2    
    let curr = new ListNode(-Infinity)
    let prev = curr
    
    while(head1 && head2){
        
        if(head1.val <= head2.val){
            prev.next = head1
            prev = head1
            head1 = head1.next        
        }
        else {
            prev.next=head2
            prev =head2
            head2 = head2.next
        }
    
    }
    if(!head1) prev.next = head2
    if(!head2) prev.next = head1
    return curr.next
    
};