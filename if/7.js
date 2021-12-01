/* Given two real numbers, output the order number of the smaller of them. */

function realNumbers(x, y) {
    if(x > y) {
        return [y, x];
    } else {
        return [x, y];  
    }
}

var x = 2;
var y = 8;
var result = realNumbers(x, y)
console.log(result)