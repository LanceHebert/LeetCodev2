/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    if(image[sr][sc] === color) return image
    
    const initColor = image[sr][sc]
    
    function fill(image,r,c,color,initColor){
        
        
        
        if(r > image.length-1 || r < 0 || c > image[0].length -1 || c < 0 || image[r][c] !== initColor) return null 
       
        
        image[r][c] = color
               
        fill(image, r + 1, c, color,initColor)
        fill(image, r - 1, c, color,initColor)
        fill(image, r, c+1, color,initColor)
        fill(image, r, c-1, color,initColor)
                
    }
    
    fill(image, sr, sc, color,initColor)
    
    return image
};