/* A file size is given in bytes. 
Find the amount of full Kbytes of this size (1 K = 1024 bytes). 
Use the operator of integer division.*/


function kBytes(Kb) {
    var Kb = Kb / 1024;
    return Kb;
}

var bytes = 8563;
var result1 = kBytes(bytes);
console.log(result1);