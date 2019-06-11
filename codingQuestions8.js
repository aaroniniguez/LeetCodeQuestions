function treeNode(value) {
    this.value = value;
    this.left = this.right = null;
}


function generate(nums, start, end) {
    console.log(nums, start, end);
    if(start > end) {
        return null;
    }
    var midPointIndex = start + Math.floor((end - start) / 2) ;
    var node = new treeNode(nums[midPointIndex]);
    node.left = generate(nums, start, midPointIndex - 1);
    node.right = generate(nums, midPointIndex + 1, end);
    return node;
}
var sortedArrayToBST = function(nums) {
    //algo to do BST 1 depth   
    //get midpoint of array
    var node = generate(nums, 0, nums.length -1);
    return node;
};
var myArray = [-10,-3,0,5,9];
console.log(sortedArrayToBST(myArray));