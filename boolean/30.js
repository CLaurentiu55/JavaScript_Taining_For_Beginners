/* Given three integers a, b, c that are the sides of a triangle, 
verify the following proposition: "The triangle with sides a, b, c is equilateral". */


function equilateralTriangle(a, b, c) {
    if(a == b && b == c && a == c) {
        return "The triangle with sides a, b, c is equilateral"
    } else {
        return "The triangle with sides a, b, c is not equilateral"
    }
}

var a = 0
var b = 0
var c = 0
var result = equilateralTriangle(a, b, c)
console.log(result)