/* Given two nonzero real numbers x, y, verify the following proposition: 
"The point with coordinates (x, y) is in the second coordinate quarter". */


function secondQuarter(x, y) {
    if(x < 0 && y > 0) {
        return "The point with coordinates (x, y) is in the second coordinate quarter"
    } else {
        return "The point with coordinates (x, y) is not in the second coordinate quarter"
    }
}

var x = -4
var y = 3
var result = secondQuarter(x, y)
console.log(result)