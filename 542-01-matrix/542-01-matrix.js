/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    
    let queue = []
    
   for(let i = 0; i<mat.length;i++){
        for(let j =0;j<mat[0].length;j++){
            if(mat[i][j] === 0) queue.push([i,j,0])
            else mat[i][j] = Infinity           
        }
   }
    
    let direction = [[1,0],[0,1],[-1,0],[0,-1]]
    
  while(queue.length){
      let [row,col,dist] = queue.shift()
      
      if(mat[row][col] > dist) mat[row][col] = dist
      
     direction.forEach(([r,c])=>{
         if(row+r < mat.length && row+r >= 0 && col+c < mat[0].length && col+c >= 0){
             if(mat[row+r][col+c] === Infinity) queue.push([row+r,col+c,dist+1])
         } 
     })       
  }
   return mat 
};