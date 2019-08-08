//https://leetcode.com/problems/gas-station
const canCompleteCircuit = function(gas, cost) {
    //iterate over entire array
    for(var i = 0; i < gas.length; i ++) {
        //run the while loop for each item in gas
        let currentGasTank = 0
        let travelingIndex = i;
        let start = 1;
        while(currentGasTank >= 0) {
            //go back to gas station 0(index 0)
            if(gas[travelingIndex] == undefined)
                travelingIndex = 0; 

            if(start)
                start = 0;
            else {
                if(travelingIndex == i)
                    return travelingIndex;
            }

            //fill up on gas!
            currentGasTank += gas[travelingIndex];
            //now on to the next gas station!
            currentGasTank -= cost[travelingIndex];
            //travel!
            travelingIndex++;
        }
        //it FAILED so now to next starting point
    }
    return -1;
};
var myNewArray = [1,2,3];