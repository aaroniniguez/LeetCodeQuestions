//https://leetcode.com/problems/sum-root-to-leaf-numbers/


//a tree node in js is: 

var myNode = function TreeNode(value) {
    this.val = val;
    this.right = this.left = null;
}


var sumNumbers = function(root) {
    //create an array of all the nodes and iterate till empty
    //add a property to each node that is the running number so far
if(root === null)
    return 0;
    root.total = String(root.val);
    var totalSum = 0;
    var nodes = [root];
    while(nodes.length > 0) {
        let currentNode = nodes.shift();
        if(currentNode.left !== null){
            currentNode.left.total = currentNode.total + currentNode.left.val;
            nodes.push(currentNode.left);
        }
        if(currentNode.right !== null){
            currentNode.right.total = currentNode.total + currentNode.right.val;
            nodes.push(currentNode.right);
        }
        if(currentNode.right === null && currentNode.left === null)
            totalSum += parseInt(currentNode.total);
    }
return totalSum;
};
