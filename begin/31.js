/* A Fahrenheit temperature T is given. Convert it into a centigrade temperature. 
The centigrade temperature TC and the Fahrenheit temperature TF are connected as:
TC = (TF − 32)·5/9 */


function centigrade(T, F) {
    var TC = (T * F - 32) * 5 / 9
    return TC;
}

var case1 = 95;
var case2 = 35;
var result1 = centigrade(case1, case2);
console.log(result1);