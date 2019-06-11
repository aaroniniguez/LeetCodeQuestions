var countBits = function(num) {
    var totalOnes = [];
    for(var i =0; i<= num; i++) {
        let binaryNum = i.toString(2);
        var onesCount = 0;
        for(var p = 0; p < binaryNum.length; p++) {
            if(binaryNum[p] == "1")
                onesCount++;
        }
        totalOnes.push(onesCount); 
    }
    return totalOnes;
}
console.log(countBits(5));