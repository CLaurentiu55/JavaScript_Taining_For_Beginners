/* Two positive integers A and B are given (A > B). 
Segment of length A contains the greatest possible amount of inside segments of length B 
(without overlaps). Find the amount of segments B placed on the segment A. 
Use the operator of integer division.*/


function ammount(A, T) {
    var B = T - A;
    return B;
}

var firstTermen = 182;
var suma = 230;
var result1 = ammount(firstTermen, suma);
console.log(result1);