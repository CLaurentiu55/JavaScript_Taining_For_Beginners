/* Two positive real numbers A and B (A > B) are given. 
A segment of length A contains the greatest possible amount of segments of length B 
(without overlaps). Not using multiplication and division, find the length of unused part 
of the segment A. */

var A = 10;
var B = 5;


while (A > B) {
    A-= B;
    console.log();
}

