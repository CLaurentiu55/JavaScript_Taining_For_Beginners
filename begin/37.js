/* The velocity of the first car is V1 km/h, the velocity of the second car is V2 km/h, 
the initial distance between the cars is S km. Find the distance between the cars after T 
hours provided that at the start time the distance is decreasing. 
This distance is equal to an absolute value of a difference between the initial distance 
and the total distance covered by the both cars. */


function totalDistance(V1, V2, T) {
    var TD = T * (V1 + V2);
    return TD; 
}

var firstCar = 195;
var secondCar = 200;
var time = 1;
var result1 = totalDistance(firstCar, secondCar, time);
console.log(result1);