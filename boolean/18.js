/*Verify the following proposition: 
"Among three given integers there is at least one pair of equal ones". */

function threeEqualIntegers(number1, number2) {
    if (number1 == number2) {
        return "There is at least a pair of equal integers";
    } else {
        return "There is not even one pair of equal integers";
    }
}

var number1 = 47;
var number2 = 47;
var result = threeEqualIntegers(number1, number2);
console.log(result)

function threeEqualIntegers(number2, number3) {
    if (number2 == number3) {
        return "There is at least a pair of equal integers";
    } else {
        return "There is not even one pair of equal integers";
    }
}

var number2 = 47;
var number3 = 38;
var result = threeEqualIntegers(number2, number3);
console.log(result)

function threeEqualIntegers(number1, number3) {
    if (number1 == number3) {
        return "There is at least a pair of equal integers";
    } else {
        return "There is not even one pair of equal integers";
    }
}

var number1 = 47;
var number3 = 38;
var result = threeEqualIntegers(number1, number3);
console.log(result)