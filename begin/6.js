function volume(a, b ,c) {
    var V = a * b * c;
    return V;
}

var case1 = 3;
var case2 = 2;
var case3 = 6;
var result1 = volume(case1, case2, case3);
console.log(result1);


function area(a, b, c) {
    var S = 2 * (a * b + b* c + a * c) * a;
    return S;
}

case1 = 3;
case2 = 5;
case3 = 9;
result1 = area(case1, case2, case3);
console.log(result1);
