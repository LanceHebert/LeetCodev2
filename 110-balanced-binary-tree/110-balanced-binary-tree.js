/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//create recursion to drop down a level and add a counter, check left counter vs right counter. 
// dfs(left return dfs + 1, if null return 0), if left or right difference is greater than 1 return -1


var isBalanced = function(root) {
     if(root === null)return true
    
   function dfs(node){       
       if(node === null) return 0
       
       let left =  dfs(node.left)
       let right =  dfs(node.right)
       
       if(left === -1 || right === -1 || Math.abs(left - right) > 1 ) return -1       
       return Math.max(left,right) + 1
           
                            
   }
    
   if(dfs(root) === -1) return false
    else return true
       
};