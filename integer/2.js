/* A weight M is given in kilograms. 
Find the amount of full tons of this weight (1 ton = 1000 kg). 
Use the operator of integer division. */


function ammount(M) {
    var M = M / 1000;
    return M;
}

var kilograms = 4769;
var result1 = ammount(kilograms);
console.log(result1);