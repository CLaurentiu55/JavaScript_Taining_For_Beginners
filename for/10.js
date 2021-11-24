/* A three-digit integer is given. 
Output its last digit (a ones digit) and then its middle digit (a tens digit). */

var A = 123;

for (let i = 123; i <= A; i++, i = (A + 10) - A) {
    console.log(i)
}

//nustiu