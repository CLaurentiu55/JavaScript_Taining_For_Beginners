/* Given two integers A and B, verify the following proposition: 
"The inequality A ≥ 0 is fulfilled or the inequality B < −2 is fulfilled". */

function fulfilledInequalities(termen1) {
    if (termen1 >= 0) {
        return "the termen1 inequality is fulfilled";
    } else {
        return "the termen2 inequality is fulfilled";
    }
}

var termen1 = 4;
var result = fulfilledInequalities(termen1)
console.log(result)

function fulfilledInequalities(termen2) {
    if (termen2 < -2) {
        return "the terme2 inequality is fulfilled";
    } else {
        return "the termen1 inequality is fulfilled";
    }
}

var termen2 = 2;
var result = fulfilledInequalities(termen2)
console.log(result)