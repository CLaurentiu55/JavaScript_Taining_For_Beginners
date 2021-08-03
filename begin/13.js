function area1(R1, π) {
    var S1 = π * (R1) * 2;
    return S1; 
}

var case1 = 15;
var case2 = 3.14;
var result1 = area1(case1, case2);
console.log(result1);   

function area2(R2, π) {
    var S2 = π * (R2) * 2;
    return S2; 
}

case1 = 6;
case2 = 3.14;
result1 = area2(case1, case2);
console.log(result1);   

function area3(S1, S2) {
    var S3 = S1 - S2;
    return S3;
}

case1 = 94.2;
case2 = 37.68;
result1 = area3(case1, case2);
console.log(result1); 