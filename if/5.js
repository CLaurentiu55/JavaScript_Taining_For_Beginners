/* Three integers are given. 
Find the amount of positive and amount of negative integers in the input data. */

function amountOfPositiveAndNegativeNumbers(number1, number2, number3) {
    if(number1 >= 0 && number2 >= 0 && number3 <= 0 || number1 >= 0 && number2 <= 0 && number3 >= 0 || number1 <= 0 && number2 >= 0 && number3 >= 0) {
        return "2 of the numbers are positive and 1 number is negative";
    } if(number1 <= 0 && number2 <= 0 && number3 >= 0 || number1 <= 0 && number2 >= 0 && number3 <= 0 || number1 >= 0 && number2 <= 0 && number3 <= 0) {
        return "2 of the numbers are negative and 1 number is positive"
    } if(number1 <= 0 && number2 <= 0 && number3 <= 0 || number1 <= 0 && number2 <= 0 && number3 <= 0 || number1 <= 0 && number2 <= 0 && number3 <= 0) {
        return "none of the numbers are positive and 3 are negative"
    } else {
        return "none of the numbers are negative and 3 are positive";
    }
}

var number1 = -73;
var number2 = 48;
var number3 = -35;
var result = amountOfPositiveAndNegativeNumbers(number1, number2, number3);
console.log(result)
