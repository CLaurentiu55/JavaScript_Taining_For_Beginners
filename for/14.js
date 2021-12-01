/* Given an integer N (> 0), compute N2 by means of the formula

N2 = 1 + 3 + 5 + … + (2·N − 1).

Output the value of the sum after addition of each term. As a result, 
squares of all integers in the range 1 to N will be output.*/

var sum = 0;
var N = 5;

for (i = 1; i <= N; i+=2){
    let argument = 1;
        if (i % 1 == 0) {
            N + N
        }
    sum += (2 * N - 1);
}

console.log(sum)