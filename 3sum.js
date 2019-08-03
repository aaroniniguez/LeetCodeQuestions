//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var sums = [];
    for(var i =0; i < nums.length; i++) {
        if(i+1 >= nums.length)
            continue
        for(var p = i+1; p < nums.length; p++) {
            if(p + 1 >= nums.length)
                continue
            for(var k = p+1; k < nums.length; k++) {
                var result = nums[i] + nums[p] + nums[k];
                if(result === 0) {
                    //dont add duplicate entries
                    var duplicate = 0
                    sums.forEach(function (element) {
                        var indices = [];
                        indices[element.indexOf(nums[i])] = 1;
                        indices[element.indexOf(nums[k])] = 1;
                        indices[element.indexOf(nums[p])] = 1;
                        console.log(indices);
                        if(indices.length == 3 && !indices[-1]) {
                            duplicate = 1 
                        }
                    }); 
                    if(duplicate === 0)
                        sums.push([nums[i], nums[p], nums[k]]);
                }
            }
        }
    }   
    return sums;
};
var arrayNums = [0, 0, 0, 0];
console.log(threeSum(arrayNums));