/*Given a number A, compute a power A8 using three multiplying operators for computing A2, A4, A8 sequentially.
Output all obtained powers of the number A.*/


function compute(A) {
    if(A == 1 || A== 0)
        return 1;
    else    
        return A * compute((A) - 1)
}


console.log(compute(2));


function compute(A) {
    if(A == 1 || A== 0)
        return 1;
    else    
        return A * compute((A) - 1)
}


console.log(compute(4));


function compute(A) {
    if(A == 1 || A== 0)
        return 1;
    else    
        return A * compute((A) - 1)
}


console.log(compute(8));