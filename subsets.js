//78. Subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var allSubsets = [];
    function recursion(currentArray, nextElements) {
        if(nextElements.length === 0) {
            allSubsets.push(currentArray);
            return;
        }
        //get next element from nums array
        var nextElement = nextElements.shift();
         //push not combined into
         recursion(currentArray.slice(), nextElements.slice());
         //push combined into
         currentArray.push(nextElement);
         recursion(currentArray.slice(), nextElements.slice());
    }
    recursion([], nums);
    return allSubsets;
};
var nums = [1,2,3];
subsets(nums);