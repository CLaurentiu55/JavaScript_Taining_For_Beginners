/* Given two integers A and B, verify the following proposition: 
"Each of the numbers A and B is odd". */

function isOdd(number1) {
    if(number1 % 2 == 1) {
        return "number1 is odd";
    } else {
        return "number1 is not odd";
    }
}

var number1 = 3;
var result = isOdd(number1);
console.log(result)

function isOdd(number2) {
    if(number2 % 2 == 1) {
        return "number2 is odd";
    }
    else {
        return "number2 is not odd";
    }
}

var number2 = 5;
var result = isOdd(number2);
console.log(result)
