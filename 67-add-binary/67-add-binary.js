/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum =0
    
   if(a.length+b.length < 53){
       return sum = (parseInt(a,2)+parseInt(b,2)).toString(2)
   }else{
         sum = BigInt("0b"+a) +BigInt("0b"+b)
       return sum.toString(2)
   }
    
    
};