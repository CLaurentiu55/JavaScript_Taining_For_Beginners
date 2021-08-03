/* Given integer A, verify the following proposition: "The number A is odd". */

function isOddNumber(number) {
    if (number % 2 == 0) {
        return "number is odd";
    } else {
        return "number is not odd";
    }
}

var number = 38;
var result = isOddNumber(number);
console.log(result)