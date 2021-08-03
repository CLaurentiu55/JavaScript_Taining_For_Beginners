/*Given a number A, compute a power A15 using five multiplying operators for computing 
A2, A3, A5, A10, A15 sequentially. Output all obtained powers of the number A.*/


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


console.log(compute(3));



function compute(A) {
    if(A == 1 || A== 0)
        return 1;
    else    
        return A * compute((A) - 1)
}


console.log(compute(5));



function compute(A) {
    if(A == 1 || A== 0)
        return 1;
    else    
        return A * compute((A) - 1)
}


console.log(compute(10));



function compute(A) {
    if(A == 1 || A== 0)
        return 1;
    else    
        return A * compute((A) - 1)
}


console.log(compute(15));


