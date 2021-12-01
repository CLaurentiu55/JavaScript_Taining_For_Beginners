/* The values of two integer variables A and B are given. 
If the values are not equal then assign the larger value to each variable, 
otherwise assign zero value to each variable. Output the new values of the variables A and B. */

function realNumbers(a, b) {
    if(a != b) {
        return Math.max(a, b);
    } else {
        return 0
    }
}

var a = 6;
var b = 7;
var result = realNumbers(a, b)
console.log(result)