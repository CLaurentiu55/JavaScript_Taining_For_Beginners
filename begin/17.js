function lengthAC(AB, BC) {
    var AC = AB + BC;
    return AC;
}

var case1 = 13;
var case2 = 7;
var result1 = lengthAC(case1, case2);
console.log(result1);

function lengthBC(AC, AB) {
    var BC = AC - AB;
    return BC;
}

case1 = 20;
case2 = 13;
result1 = lengthBC(case1, case2);
console.log(result1);

function lengthACBC(AC, BC) {
    var ACBC = AC + BC;
    return ACBC;
}

case1 = 20;
case2 = 7;
result1 = lengthACBC(case1, case2);
console.log(result1);