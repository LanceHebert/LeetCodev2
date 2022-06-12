/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
     if(image[sr][sc] === newColor || image ===null || image < 1 ){
        return image
    }
    
    const initColor = image[sr][sc]
    
    
    
    
    function recursion(image,r,c,newColor,initColor){
        if(r < 0 || r > image.length-1 || c < 0 || c > image[0].length || initColor != image[r][c]) {
            return
        }
        image[r][c]=newColor
        
        recursion(image,r -1,c,newColor,initColor)
        recursion(image,r +1,c,newColor,initColor)
        recursion(image,r,c-1,newColor,initColor)
        recursion(image,r,c+1,newColor,initColor)
        
    }
    recursion(image,sr,sc,newColor,initColor)
    
    return image
};