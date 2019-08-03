//TreeNode
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
/*
     1
    2 3
   4 5
*/
var levelOrder = function(root) {
    //iterate over node 
    var queue = [root];
    var result = [];
    while(queue.length) {
        var currentNode = queue.shift()
        if(currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if(currentNode.right !== null) {
            queue.push(currentNode.right);
        }
        result.push(currentNode.value);
    }
    return result;
}
console.log(levelOrder(root));