/* Given two integers A and B (A < B), find the sum of squares of all integers in the range 
A to B inclusive. */

var A = 1;
var B = 5;
var S = 1;

for (let i = A; i <= B; i++, S = S + Math.pow(i, 2)) {
    console.log(i, S)
}
