/* Given two nonzero real numbers x, y, verify the following proposition: 
"The point with coordinates (x, y) is in the first or third coordinate quarter". */


function identifyQuarter2(x, y) {
    if(x > 0 || x < 0 && y > 0 || y < 0) {
        return "The point with coordinates (x, y) is in the first or third coordinate quarter"
    } else {
        return "The point with coordinates (x, y) is not in the first or third coordinate quarter"
    }
}

var x = 0
var y = 3
var result = identifyQuarter2(x, y)
console.log(result)