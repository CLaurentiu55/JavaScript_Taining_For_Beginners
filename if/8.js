/* Given two real numbers, output the larger value and then the smaller value of them. */

function realNumbers(x, y) {
    if(x > y) {
        return [x, y];
    } else {
        return [y, x];  
    }
}

var x = 6;
var y = 5;
var result = realNumbers(x, y)
console.log(result)