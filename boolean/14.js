/* Given three integers A, B, C, verify the following proposition: 
"Exactly one of the numbers A, B, C is positive". */

function oddNumber(number1, number2, number3) {
    if(number1 >= 0 && number2 <= 0 && number3 <= 0) {
        return "exactly one of the numbers is positive";
    } else {
        return "every number is not positive";
    }
}

var number1 = 26;
var number2 = -93;
var number3 = -47;
var result = oddNumber(number1, number2, number3);
console.log(result)