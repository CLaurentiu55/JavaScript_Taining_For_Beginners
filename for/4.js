/* Given the price of 1 kg of sweets (as a real number), 
output the cost of 1, 2, …, 10 kg of these sweets. */

var A = 1;
var B = 2;
var S = 50;

for (let i = 0; i <= A * S; i+=50) {
    console.log(i, A)
}

var B = 2;

for (let i = 0; i <= B * S; i+=100) {
    console.log(i, B)
}

var C = 3;

for (let i = 0; i <= C * S; i+=150) {
    console.log(i, C)
}

var D = 10;

for (let i = 0; i <= D * S; i+=500) {
    console.log(i, D)
}
