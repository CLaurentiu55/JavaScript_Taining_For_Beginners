/* Given two real numbers, output the larger value of them. */

function realNumbers(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;   
    }
}

var x = 9
var y = 10
var result = realNumbers(x, y)
console.log(result)