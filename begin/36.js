/* The velocity of the first car is V1 km/h, the velocity of the second car is V2 km/h, 
the initial distance between the cars is S km. Find the distance between the cars after T 
hours provided that the distance is increasing. The required distance 
is equal to a sum of the initial distance and the total distance covered by the both cars 
(total distance = time · total velocity) */


function totalDistance(V1, V2, T) {
    var TD = T * (V1 + V2);
    return TD; 
}

var firstCar = 200;
var secondCar = 180;
var time = 2;
var result1 = totalDistance(firstCar, secondCar, time);
console.log(result1);
