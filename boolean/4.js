/* Given two integers A and B, verify the following proposition: 
"The inequalities A > 2 and B ≤ 3 both are fulfilled". */

function fulfilledInequalities(termen1) {
    if (termen1 > 2) {
        return "the inequalities are fulfilled";
    } else {
        return "the inequalities are not fulfilled";
    }
}

var termen1 = 2;
var result = fulfilledInequalities(termen1)
console.log(result)

function fulfilledInequalities2(termen2) {
    if (termen2 <= 3) {
        return "the inequalities are fulfilled";
    } else {
        return "the inequalities are not fulfilled";
    }
}

var termen2 = 3;
var result2 = fulfilledInequalities2(termen2)
console.log(result2)