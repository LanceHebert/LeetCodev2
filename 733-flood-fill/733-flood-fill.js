/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    
    let initColor = image[sr][sc]
    
    if(initColor === color) return image
    
    function fill(image,r,c,color,initColor){
        if(r < 0 || r > image.length - 1 || c < 0 || c > image[0].length - 1 || image[r][c] !== initColor){
           return  
        }
        
        image[r][c] = color
        
        fill(image,r + 1,c,color,initColor)
        fill(image,r - 1,c,color,initColor)
        fill(image,r,c + 1,color,initColor)
        fill(image,r,c - 1,color,initColor)

    }
        fill(image,sr,sc,color,initColor)

        
        
   return image 
    
};