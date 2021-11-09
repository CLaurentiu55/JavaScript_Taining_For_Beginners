/* Given the price of 1 kg of sweets (as a real number), output the cost of 1.2, 1.4, …, 2 kg
 of these sweets. */
 
var A = 10;
var B = 12;

for (let i = 1; i < 2 ; i+=0.2, A+=2) {
    console.log(i, A)
}