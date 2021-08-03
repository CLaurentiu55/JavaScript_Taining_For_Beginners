/* Given three integers A, B, C, verify the following proposition: 
"The double inequality A < B < C is fulfilled". */

function fulfilledInequalities(termen1, termen2, termen3) {
    if(termen1 < termen2 && termen2 < termen3) {
        return "the double inequality is fulfilled";
    } else {
        return "the double inequality is not fulfilled";
    }
}
        
var termen1 = 1;
var termen2 = 3;
var termen3 = 6;
var result = fulfilledInequalities(termen1, termen2, termen3)
console.log(result)