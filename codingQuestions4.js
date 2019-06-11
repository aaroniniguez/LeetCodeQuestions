function dailyTemperatures(T) {
    var savedTemps = [];
    var result = [];
    for(var i = T.length - 1; i >=0 ; i--) {
        //save temp and its index
        savedTemps[T[i]] = i;
        //check for next highest temp in the savedTemps array
        var distToNextHighestTemp = 0;
        for(var p = T[i] + 1; p <= 100; p ++) {
            //if temp exists
            if(savedTemps[p]){
                var distToTemp = savedTemps[p] - i;
                if(distToTemp < distToNextHighestTemp)
                    distToNextHighestTemp = distToTemp;
                else if(!distToNextHighestTemp) 
                    distToNextHighestTemp = distToTemp;
            }
        }
        result[i] = nextHighest;
    }
    return result;
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));