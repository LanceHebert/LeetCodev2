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
    
    if(!root) return null
    
    //2,4,
    let length =0
    
    function dfs(node){
        if(node === null) return 0
        
        let left = dfs(node.left)
        let right = dfs(node.right)
        
       length= Math.max(length,left+right)
        
          
        
        return Math.max(left,right) + 1
        
    }
    dfs(root)
    
    
    
    return length;
};