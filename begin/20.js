function distance(x1, y1, x2, y2) {
    var P = ((x2 - x1) * 2 + (y2 - y1) * 2) * 1/2;
    return P;
}

var case1 = 7;
var case2 = 9;
var case3 = 3;
var case4 = 6;
var result1 = distance(case1, case2, case3, case4);
console.log(result1);