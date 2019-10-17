//Question: Count Total number of zeros from 1 upto n?

var n = 50;
function countZero(n){
    i =0;
    var totalSum = 0;
    while(i <= n) {
        let count = 0
        let stringI = String(i);
        console.log(stringI);
        for(let j=0; j < stringI.length;j++) {
            if(stringI.charAt(j) === "0") {
                count++;
            }
        }
        totalSum+=count;
        i++;
    }
    //the 10s are 1 zero...so modulo
    return totalSum;

}
console.log(countZero(100));
