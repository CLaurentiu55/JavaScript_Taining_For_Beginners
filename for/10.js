/* Given an integer N (> 0), find the value of a following sum (as a real number):
    1 + 1/2 + 1/3 + … + 1/N. */

var sum = 0;
var N = 4;

for (i = 1; i < N; i++){
sum+= (1 + 1/i);
}

console.log(sum)