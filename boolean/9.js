/* Given two integers A and B, verify the following proposition: 
"At least one of the numbers A and B is odd". */

function isOdd(number1) {
    if(number1 % 2 == 1) {
        return "number1 is odd";
    } else {
        return "number1 is not odd";
    }
}

var number1 = 14;
var result = isOdd(number1);
console.log(result)

function isOddTwo(number2) {
    if(number2 % 2 == 1) {
        return "number2 is odd";
    } else {
        return "number2 is not odd";
    }
}

var number2 = 37;
var result = isOddTwo(number2);
console.log(result)
