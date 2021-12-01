/* Given an integer N (> 0), find the value of the following expression of N terms 
with alternating signs:

1.1 − 1.2 + 1.3 − … .

Do not use conditional statements.*/

var sum = 0;
var N = 3;

for (i = 1; i <= N; i++){
    let argument = 1;
        if (i % 2 == 0) {
            argument = -1
        }
    sum += (1 + i/10) * argument;
}

console.log(sum)