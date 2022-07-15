/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */




var insert = function(intervals, newInterval) {
    
    let index = 0
    
    let stack = []
    
    
    while(index < intervals.length && intervals[index][1] < newInterval[0]){
            stack.push(intervals[index])
            index++
        }
    
    
        while(index < intervals.length && intervals[index][0] <= newInterval[1]){
            newInterval[0] = Math.min(intervals[index][0], newInterval[0])
            newInterval[1] = Math.max(intervals[index][1],newInterval[1])
            index++
        }
    stack.push(newInterval)
    
    while(index < intervals.length){
        stack.push(intervals[index])
    index++
    }
    return stack
    }
    
    
    
