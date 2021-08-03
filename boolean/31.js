/* Given three integers a, b, c that are the sides of a triangle, 
verify the following proposition: "The triangle with sides a, b, c is isosceles". */


function isoscelesTriangle(a, b, c) {
    if(a == b && a != c) {
        return "The triangle with sides a, b, c is isosceles"
    } else {
        return "The triangle with sides a, b, c is not isosceles"
    }
}

var a = 0
var b = 0
var c = 7
var result = isoscelesTriangle(a, b, c)
console.log(result)