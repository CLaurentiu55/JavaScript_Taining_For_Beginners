/* Given three integers a, b, c that are the sides of a triangle, 
verify the following proposition: "The triangle with sides a, b, c is a right triangle".*/


function rightTriangle(a, b, c) {
    if(a * a == (b * b) + (c * c)) {
        return "The triangle with sides a, b, c is a right triangle"
    } else {
        return "The triangle with sides a, b, c is not a right triangle"
    }
}

var a = 4
var b = 4
var c = 0
var result = rightTriangle(a, b, c)
console.log(result)