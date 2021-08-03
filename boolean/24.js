/* Three real numbers A, B, C are given (A is not equal to 0). 
By means of a discriminant D = B2 − 4·A·C, verify the following proposition: 
"The quadratic equation A·x2 + B·x + C = 0 has real roots". */

function quadraticEquationOne(number1, number2, number3) {
    var D = Math.pow(number2, 2) - 4 * number1 * number3 
    return D
}

var number1 = 2
var number2 = 8
var number3 = 6
var result = quadraticEquationOne(number1, number2, number3)
console.log(result)

function quadraticEquationTwo(number1, number2, D) {
    var x1 = ((0 - D) + number2) / (2 * number1)
    return x1
}

var number1 = 2
var number2 = 8
var D = 4
var result = quadraticEquationTwo(number1, number2, D)
console.log(result)

function quadraticEquationThree(number1, number2, D) {
    var x2 = ((0 - D) - number2) / (2 * number1)
    return x2
}

var number1 = 2
var number2 = 8
var D = 4
var result = quadraticEquationThree(number1, number2, D)
console.log(result)

function quadraticEquation(number1, number2, number3, x1, x2) {
    var zero = number1 * (x2 * x2) + number2 * x1 + number3
    return zero
}

var number1 = 2
var number2 = 8
var number3 = 6
var D = 4
var x1 = 1
var x2 = -3
var result = quadraticEquation(number1, number2, number3, D, x1, x2)
console.log(result)