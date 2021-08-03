/* Verify the following proposition: 
"Among three given integers there is at least one pair of opposite ones". */

function threeEqualIntegers(number1, number2) {
    if (number1 !== number2) {
        return "There is at least a pair of opposite integers";
    } else {
        return "There is not even one pair of opposite integers";
    }
}

var number1 = 52;
var number2 = 63;
var result = threeEqualIntegers(number1, number2);
console.log(result)

function threeEqualIntegers(number2, number3) {
    if (number2 !== number3) {
        return "There is at least a pair of oppositet integers";
    } else {
        return "There is not even one pair of opposite integers";
    }
}

var number2 = 63;
var number3 = 63;
var result = threeEqualIntegers(number2, number3);
console.log(result)

function threeEqualIntegers(number1, number3) {
    if (number1 !== number3) {
        return "There is at least a pair of opposite integers";
    } else {
        return "There is not even one pair of opposite integers";
    }
}

var number1 = 52;
var number3 = 63;
var result = threeEqualIntegers(number1, number3);
console.log(result)