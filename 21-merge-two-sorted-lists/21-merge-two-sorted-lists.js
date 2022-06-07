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
    
    // if(!list1.length && !list2.length){
    //     return []
    // }
    
    const answer = new ListNode(-Infinity)
    let node = answer
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            node.next = list1
            node = list1                        
            list1 = list1.next
        }
        else{ 
            
            node.next = list2
            node = list2
            
            list2 =list2.next                       
        } 
      
    }
    if(!list1) node.next = list2
    if(!list2) node.next = list1
    
    return answer.next   
};