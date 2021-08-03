/* Given three integers a, b, c, verify the following proposition: 
"A triangle with the sides a, b, c exists". */


function rightTriangle(a, b, c) {
    if(a + b > c && a + c > b && c + b > a) {
        return "A triangle with the sides a, b, c exists"
    } else {
        return "A triangle with the sides a, b, c doesn't exist"
    }
}

var a = 4
var b = 4
var c = 2
var result = rightTriangle(a, b, c)
console.log(result)