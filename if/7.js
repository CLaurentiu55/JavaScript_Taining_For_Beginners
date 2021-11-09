/* Given two real numbers, output the order number of the smaller of them. */

function realNumbers(x, y) {
    if(x > y) {
        return x && y;
    } else {
        return y && x;   
    }
}

var x = 2;
var y = 5;
var result = realNumbers(x, y)
console.log(result)