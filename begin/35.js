/* A boat velocity in still water is V km/h, river flow velocity is U km/h (U < V).
The boat goes along the lake during T1 h and then goes against stream of the river 
during T2 h. Positive numbers V, U, T1, T2 are given. 
Find the distance S covered by the boat (distance = time · velocity). */


function distance(V, U, T1, T2) {
    var S = (T1 + T2) * (V + U);
    return S; 
}

var velocity = 20;
var riverVelocity = 3;
var timeForward = 1;
var timeBackward = 1.3;
var result1 = distance(velocity, riverVelocity, timeForward, timeBackward);
console.log(result1);

