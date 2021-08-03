/* A centigrade temperature T is given. Convert it into a Fahrenheit temperature. 
The centigrade temperature TC and the Fahrenheit temperature TF are connected as:
TC = (TF − 32)·5/9. */


function fahrenheit(T, F) {
    var TC = (T * F - 32) * 5 / 9
    return TC;
}

var case1 = 25;
var case2 = 77;
var result1 = fahrenheit(case1, case2);
console.log(result1);