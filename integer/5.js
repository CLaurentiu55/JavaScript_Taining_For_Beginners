/* Two positive integers A and B are given (A > B). 
Segment of length A contains the greatest possible amount of inside segments of length B 
(without overlaps). Find the length of unused part of the segment A. 
Use the operator of taking the remainder after integer division.*/


function ammount(B, T) {
    var A = T - B;
    return A;
}

var secondTermen = 48;
var suma = 230;
var result1 = ammount(secondTermen, suma);
console.log(result1);