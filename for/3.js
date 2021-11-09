/* Given two integers A and B (A < B), output in descending order all integers in the range A to B 
(excluding A and B). Also output the amount N of these integers. */

var A = 1;
var B = 10;

for (let i = B - 1; i > A; i--) {
    console.log(i)
}