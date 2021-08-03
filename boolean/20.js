/* Given a three-digit integer, verify the following proposition: 
"All digits of the number are different". */

function threeDigitOdd(number) {
    var first = number % 10;
    
    while (number) {
        if (number % 10 !== first) return "The integer's three digits number are different"
        number = Math.floor(number / 10);
    }
    return "The integer's three digits number are not different"
}

var number = 555;
var result = threeDigitOdd(number);
console.log(result)