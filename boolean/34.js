/* Given coordinates x, y of a chessboard square (as integers in the range 1 to 8), 
verify the following proposition: "The chessboard square (x, y) is white". 
Note that the left bottom square (1, 1) is black. */


var squareIsWhite = function(coordinates) {
    let splits = coordinates.split("");
    
    const SWB = {
        a: 1,
        c: 1,
        e: 1,
        g: 1
    }
    
    
    if( SWB[splits[0]]  ) {
        return splits[1] % 2 === 0 
    }else{
        return !(splits[1] % 2 === 0)
    }
};

