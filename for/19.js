/* Given an integer N (> 0), find the value of a following product:

N! = 1·2·…·N 
(N–factorial). To avoid the integer overflow, compute the product using a 
real variable and output the result as a real number.*/

var N = 4;
var sum = 1;

for (i = 1; i <= N; i++){
    sum *= i
}

console.log(sum)
