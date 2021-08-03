/* Given a four-digit integer, verify the following proposition: 
"The number is read equally both from left to right and from right to left". */

function threeDigitOrder(number) {

    var fourDigit
    var threeDigit
    var twoDigit 
    var oneDigit 

    if (oneDigit !== twoDigit && twoDigit !== threeDigit) { 
        return "All digits of the number can not be read equally";
    } else if (threeDigit !== fourDigit && fourDigit !== oneDigit) { 
        return "All digits of the number can not be read equally";
    } else if (oneDigit !== number) { 
        return "All digits of the number can not be read equally";
    } else {}
}
var number = 6666;
var result = threeDigitOrder(number);
console.log(result)