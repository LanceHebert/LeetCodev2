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
    
    const node = root
    
    function helper(node)
    {
        if(node !== null){
        let temp = node.left
        node.left = node.right
        node.right = temp
        
        helper(node.left)
        helper(node.right)
        }
    }
    helper(node)
    
    
    return root
    
};