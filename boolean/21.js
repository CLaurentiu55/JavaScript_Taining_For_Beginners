/* Given a three-digit integer, verify the following proposition: 
"All digits of the number are in ascending order". */

function threeDigitOdd(number) {
    var arr_number = ('' + number).split('');

  for (var i = 0; i < arr_number.length - 1; i++) {
    if (parseInt(arr_number[i]) >= parseInt(arr_number[i + 1]))
      return false;
    }
  return true;
}

var number = 765;
var result = threeDigitOdd(number);
console.log(result) 