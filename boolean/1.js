/* Given integer A, verify the following proposition: "The number A is positive". */


function positive(A) {
    
    if(A > 0) {
        return "A is positive";
    } else {
        return "A is negative";
    }
}

var termen = 23;
var result1 = positive (termen)
console.log(result1);