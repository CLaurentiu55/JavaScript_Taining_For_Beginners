/* An integer is given. If the integer is positive then decrease it by 8, 
otherwise increase it by 6. Output the obtained integer. */

function positiveOrNegativeInteger(x) {
    if(x <= 0) {
        return x + 6;
    } else {
        return x - 8;   
    }
}

var x = -2
var result = positiveOrNegativeInteger(x)
console.log(result)