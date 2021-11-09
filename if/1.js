/* An integer is given. If the integer is positive then decrease it by 8, 
otherwise do not change it. Output the obtained integer. */

function positiveInteger(x) {
    if(x <= 0) {
        return x;
    } else {
        return x - 8;   
    }
}

var x = 9
var result = positiveInteger(x)
console.log(result)