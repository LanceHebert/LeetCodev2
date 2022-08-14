/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    //BFS = stain spreadingn out , we want to check each box, BFS uses queue
    let queue = []
    //we want to iterate through each spot and if its a 0 we make it a 0 in queue with it 0 at base height (third value) . if its not a 0 we make it equal infinity
   for(let i = 0; i<mat.length;i++){
        for(let j =0;j<mat[0].length;j++){
            if(mat[i][j] === 0) queue.push([i,j,0])
            else mat[i][j] = Infinity           
        }
   }
    //this direction variable is a way to check top left right down with a for each
    let direction = [[1,0],[0,1],[-1,0],[0,-1]]
    //this is the BFS section, basically we continue to check things while there is something in the queue. First we take from first in queue with shift, then if that spot is greater than the distance like an infinity we replace it with the height. 
  while(queue.length){
      let [row,col,dist] = queue.shift()
      
      if(mat[row][col] > dist) mat[row][col] = dist
      //Here we are checking each spot around the location with the foreach directions, we check to make sure its inbounds and if it is we see if its something we havent visited yet by checking to see if it equals infinity. if it hasnt been visited we push it to the queue.
     direction.forEach(([r,c])=>{
         if(row+r < mat.length && row+r >= 0 && col+c < mat[0].length && col+c >= 0){
             if(mat[row+r][col+c] === Infinity) queue.push([row+r,col+c,dist+1])
         } 
     })       
  }
   return mat 
};