//238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let p = [];
    nums.reduce((sum, value) => {
         p.push(sum);
        sum *= value;
        return sum 
    }, 1);
    console.log(p);
};

//non es6
var productExceptSelf = function(nums) {
    var results = [];
    var runningSum = 1;
    for(var i =0; i < nums.length; i++) {
        results.push(runningSum);
        runningSum *= nums[i];
    }
    runningSum = 1;
    for(var i = nums.length-1; i >= 0; i--) {
        results[i] *= runningSum;
        runningSum *= nums[i];
    }
}
var nums = [1,2,3,4];
productExceptSelf(nums);