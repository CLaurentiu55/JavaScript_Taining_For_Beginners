/* A three-digit integer is given. Find the sum and the product of its digits.*/


var value = 452,
    sum = 0;

while (value) {
    sum = sum + value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);