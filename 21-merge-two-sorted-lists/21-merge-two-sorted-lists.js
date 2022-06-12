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
    
    const mergeList = new ListNode(-Infinity)
    let node = mergeList
    
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            node.next = list1
            
            node = list1
            
            list1 = list1.next
        }else{
            
            node.next = list2
            node = list2
            
            list2 =list2.next
        }
        
    }
    
    if(list1 === null)  node.next = list2
    if(list2 === null)  node.next = list1
    
    return mergeList.next
    
};