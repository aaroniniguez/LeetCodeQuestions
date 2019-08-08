var subsets = function(nums) {
    var resultsArray = [];
    for(var i =0;i < nums.length; i ++) {
        for(var p = 0; p < resultsArray.length; p++) {
            if(!resultsArray[p].includes(nums[i]))
                resultsArray.push([...resultsArray[p], nums[i]]);
        }
        resultsArray.push([nums[i]]);
    } 
    resultsArray.push([]);
    return resultsArray;
};
var nums = [1,2,3];
console.log(subsets(nums));