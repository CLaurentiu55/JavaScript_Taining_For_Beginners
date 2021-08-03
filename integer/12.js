/* A three-digit integer is given. 
Output an integer obtained from the given one by reading it from right to left. */



let num = 4562;
    function reversDigits(num) {
        let rev_num = 0;
        while(num > 0)
        {
            rev_num = rev_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev_num;
    }

var result = reversDigits(num)
console.log(result)     