/* An integer N (> 0) is given. Using one loop-statement compute the sum

1! + 2! + 3! + … + N!,

where N! (N–factorial) is the product of all integers in the range 1 to N:    N! = 1·2·…·N. 
To avoid the integer overflow, compute the sum using real variables and output the result 
as a real number. */




//poop


function factorial(N)
{
	let sum = 1;
	for (i = 1; i <= N; i++)
	{
		sum *= i;
	}
	return sum;
}

function sumFactorial(N)
{
    let sum = 0;
	for (i = 1; i < N; i++)
	{
		sum = sum +factorial(i);
	}
	return sum;
}

var N = 3;
var fac = factorial(N)
var suma = sumFactorial(N)

console.log(fac, suma)