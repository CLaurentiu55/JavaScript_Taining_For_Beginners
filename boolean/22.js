/* Given a three-digit integer, verify the following proposition: 
"All digits of the number are in ascending or descending order". */

function threeDigitOrder(number) {
    // Impart la 100 
    // Scot partea intreaga
    // Impart la 10
    // Scot partea intreaga

    var hundreds = Math.floor(number / 100);
    var twoDigitNumber = number % 100;
    var tenth = Math.floor(twoDigitNumber / 10);
    var units = twoDigitNumber % 10;

    if ( hundreds < tenth && tenth < units) { 
        return "All digits of the number are in ascending order";
    } else if (units < tenth && tenth < hundreds) {
        return "All digits of the number are in descending order";
    } else {
        return " digits are not ascending or descending";
    }
}
var number = 101;
var result = threeDigitOrder(number);
console.log(result)