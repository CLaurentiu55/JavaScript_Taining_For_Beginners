/* Given integer A, verify the following proposition: "The number A is even". */

function isEven(number) {
    if (number % 2 == 1) {
        return "number is even"
    } else {
        return "number is not even"
    }
}

var number = 47;
var result = isEven(number);
console.log(result)