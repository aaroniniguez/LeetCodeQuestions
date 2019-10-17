const arr = [1,2,3];

/*

[
  [1,2,3],
  [2,1,3],
  [3,2,1],
  .....
]
*/
  
// base case should be when there are no options left.. 
const permute = (nums) => {
    var nums = new Set(nums);
    const output = [];
    recursion(nums, []);
    function recursion(nums2, arrayVals) {
        if(!nums2.size) {
            output.push(arrayVals);
            console.log(output);
        }
        else {
            //[1,2]
            //[1,2]
            for(let item of nums2) {
                var tempNums2 = nums2;
                tempNums2.delete(item);
                console.log(nums2);
                var tempArrayVals = arrayVals; 
                tempArrayVals.push(item);
                recursion(tempNums2, tempArrayVals);
            }
        }
    }
}
permute(arr);