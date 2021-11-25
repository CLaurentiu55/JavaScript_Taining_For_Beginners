/* Given an integer N (> 0), find the value of a following product of N factors:

1.1 · 1.2 · 1.3 · … . */

var sum = 1;
var N = 2;

for (i = 1; i < N; i++){
sum*= (N * N);
}

console.log(sum)