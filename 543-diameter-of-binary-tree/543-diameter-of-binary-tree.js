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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let length = 0
    
    if(root===null) return 0
    
    
    function dfs(root){
         if(root===null) return 0
        
        let dfsL = dfs(root.left)
        let dfsR = dfs(root.right)
        
        
        length = Math.max(length,dfsL + dfsR)
        
        
        let height = Math.max(dfsL,dfsR) 
        
        return height + 1
    }
    
   dfs(root)
    
    
    
    
    return length
    
};