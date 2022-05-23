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
var maxDepth = function(root) {
    
    let maxDepth = 0
    
    let dfs = (node,level) => {
        if(node === null)return
        if(maxDepth < level) maxDepth = level
        if(node.left) dfs(node.left,level + 1)
        if(node.right) dfs(node.right,level + 1)
               
    }
  dfs(root,1)
    
 return maxDepth   
}

//      0
// 2             4
// 1 null       3 -1
// 5,1      null 6  null 8