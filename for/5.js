/* Given the price of 1 kg of sweets (as a real number), output the cost of 
0.1, 0.2, …, 1 kg of these sweets. */

var A = 1;

for (let i = 0.1; i < 1 ; i+=0.1, A++) {
    console.log(i, A)
}