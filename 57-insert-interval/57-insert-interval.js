/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// Iterate through array and check first index and find where it fits 
// iterate through second array and check where it fits


var insert = function(intervals, newInterval) {
    
   let index = 0 
   let zeroIndex = newInterval[0]
   let oneIndex = newInterval[1]
   let r = [zeroIndex,oneIndex]
   
   let stack = []
   
   while(index < intervals.length && intervals[index][1] < zeroIndex){
       stack.push(intervals[index])
       index++       
   }
      
   while(index < intervals.length && intervals[index][0] <= oneIndex){
       
       zeroIndex =Math.min(intervals[index][0],zeroIndex)
       oneIndex = (Math.max(oneIndex,intervals[index][1]))
       
       index++      
   }
    stack.push([zeroIndex,oneIndex])
   
    while(index < intervals.length){
        stack.push(intervals[index])
        index++
    }
   
    return stack
    
};