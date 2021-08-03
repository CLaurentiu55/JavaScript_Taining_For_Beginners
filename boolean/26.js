/* Given two nonzero real numbers x, y, verify the following proposition: 
"The point with coordinates (x, y) is in the fourth coordinate quarter". */


function fourthQuarter(x, y) {
    if(x > 0 && y < 0) {
        return "The point with coordinates (x, y) is in the fourth coordinate quarter"
    } else {
        return "The point with coordinates (x, y) is not in the fourth coordinate quarter"
    }
}

var x = 7
var y = -1
var result = fourthQuarter(x, y)
console.log(result)