/* Given two integers A and B (A < B), find the product of all integers in the range A to B inclusive. */

var A = 1;
var B = 5;


for (let i = 1; i <= B; i++, A = A * i) {
    console.log(i, A)
}

//ez :)