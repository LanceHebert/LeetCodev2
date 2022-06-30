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

// iterate the total length of l1+l2, choose one to start, and then move pointer to next, recheck if less or greater than, repeat process until next = null, if one list is null .next is the rest of the other list


var mergeTwoLists = function(list1, list2) {
    
    const resultList = new ListNode(-Infinity)
    let node = resultList
    
  
        
     while(list1 && list2){
       if(list1.val <= list2.val){
                node.next = list1
           
                node = list1
               
               list1 =list1.next
           
           } else{
               node.next = list2
               
               node = list2
               
               list2 =list2.next
           }
        }


    if(list1 === null) {
        node.next = list2
    }
    if(list2 === null) {
         node.next = list1
    }
    
    
    return resultList.next
    
    
    
}