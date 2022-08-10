/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
   bigA= `0b${a}`
bigB= `0b${b}`

let sum = BigInt(bigA) + BigInt(bigB)
return sum.toString(2)


   
};