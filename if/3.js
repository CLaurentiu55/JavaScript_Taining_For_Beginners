/* An integer is given. If the integer is positive then decrease it by 8, 
if the integer is negative then increase it by 6, if the integer equals 0 then change it to 10. 
Output the obtained integer. */

function positiveInteger(x) {
    if(x > 0) {
        return x - 8;
    } if(x < 0){
        return x + 6;
    } else {
        return x + 10;   
    }
}
    

var x = 0
var result = positiveInteger(x)
console.log(result)