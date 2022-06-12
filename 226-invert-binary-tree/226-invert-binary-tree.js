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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    let node = root
    
    function invert(node){
        if(node === null) return null
        
        let temp = node.left
        node.left = node.right
        node.right = temp
        
        invert(node.left)
        invert(node.right)  
        
        
    }
    invert(root)
    
    return root
};