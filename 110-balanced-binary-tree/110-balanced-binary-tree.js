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
var isBalanced = function(root) {
    
    if(root === null) return true
    
    function dfs(root){
        
        if(root === null) return 0
        
        let left = 1 + dfs(root.left)
        let right = 1 + dfs(root.right)
        
        if(Math.abs(left-right) > 1) return Infinity
        
       return Math.max(left,right)
        
    }
    
    return dfs(root)===Infinity ? false:true
    
};