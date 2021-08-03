function hypotenuse(a, b) {
    var c = ((a * a) + (b * b)) * 1/2;
    return c;  
}

var case1 = 2;
var case2 = 15;
var result1 = hypotenuse(case1, case2);
console.log(result1);   




function perimeter(a, b, c) {
    var P = a + b + c;
    return P;
}

case1 = 4;
case2 = 3;
var case3 = 2;
result1 = perimeter(case1, case2, case3);
console.log(result1);   