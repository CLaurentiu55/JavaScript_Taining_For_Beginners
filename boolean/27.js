/* Given two nonzero real numbers x, y, verify the following proposition: 
"The point with coordinates (x, y) is in the second or third coordinate quarter". */


function identifyQuarter1(x, y) {
    if(x < 0 && y > 0 || y < 0) {
        return "The point with coordinates (x, y) is in the second or third coordinate quarter"
    } else {
        return "The point with coordinates (x, y) is not in the second or third coordinate quarter"
    }
}

var x = -4
var y = 3
var result = identifyQuarter1(x, y)
console.log(result)