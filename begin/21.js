function perimeter(a, b, c,) {
    var p = (a + b + c);
    return p;
}

var case1 = 1;
var case2 = 5;
var case3 = 2;
var result1 = perimeter(case1, case2, case3,);
console.log(result1);


function area   (p, a, b, c) {
    var s = (p * (p - a) * (p - b) * (p - c)) * 1/2;
    return s;
}

case1 = 7;
case2 = 1;
case3 = 5;
var case4 = 2;
result1 = area(case1, case2, case3, case4);
console.log(result1);