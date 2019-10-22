/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var wiggleSort = function(nums) {
    var current = "smaller";
    for(var i = 1; i < nums.length; i ++) {
        if(current == "smaller") {
            var j = i-1;
            while(nums[i] <= nums[i-1] && j != nums.length) {
                //save temp
                temp = nums[i];
                nums[i] = nums[j]
                nums[j] = temp;
                j++;
            }
            current = "bigger";
        }
        else {
            var j = i-1;
            while(nums[i] >= nums[i-1] && j != nums.length) {
                //save temp
                temp = nums[i];
                nums[i] = nums[j]
                nums[j] = temp;
                j++;
            }   
            current = "smaller";
        }
    }
    console.log(nums);
};
var nums = [1, 5, 1, 1, 6, 4];
nums =[4,5,5,6]; 
45 56
54 65
wiggleSort(nums);