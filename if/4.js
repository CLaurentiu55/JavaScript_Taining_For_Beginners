/* Three integers are given. Find the amount of positive integers in the input data. */

function amountOfPositiveNumbers(number1, number2, number3) {
    if(number1 >= 0 && number2 >= 0 && number3 <= 0 || number1 >= 0 && number2 <= 0 && number3 >= 0 || number1 <= 0 && number2 >= 0 && number3 >= 0) {
        return "exactly two of the numbers are positive";
    } if(number1 <= 0 && number2 <= 0 && number3 >= 0 || number1 <= 0 && number2 >= 0 && number3 <= 0 || number1 >= 0 && number2 <= 0 && number3 <= 0) {
        return "exactly one of the numbers are positive"
    } if(number1 <= 0 && number2 <= 0 && number3 <= 0 || number1 <= 0 && number2 <= 0 && number3 <= 0 || number1 <= 0 && number2 <= 0 && number3 <= 0) {
        return "none of the numbers are positive"
    } else {
        return "every number is positive";
    }
}

var number1 = -73;
var number2 = -48;
var number3 = -35;
var result = amountOfPositiveNumbers(number1, number2, number3);
console.log(result)


