/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// first we want to take the points and iterate through them and get values and store those values in a hash map for the points, use the points as the values and the calculated as the key, sort the keys and then iterate through till k
var kClosest = function(points, k) {
    
 let sorted = points.sort((a,b)=>( (a[0]**2 + a[1]**2)) -((b[0]**2)+b[1]**2))
    return sorted.slice(0,k)
   
};