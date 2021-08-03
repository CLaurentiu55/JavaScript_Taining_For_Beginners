/* Given three integers A, B, C, verify the following proposition: 
"At least one of the numbers A, B, C is positive". */

function oddNumber(number1, number2, number3) {
    if(number1 >= 0 && number2 >= 0 && number3 >= 0) {
        return "at least one of the numbers is positive";
    } else {
        return "at least one of the numbers is not positive";
    }
}

var number1 = 26;
var number2 = 45;
var number3 = 38;
var result = oddNumber(number1, number2, number3);
console.log(result)