//TreeNode
function TreeNode(value) {
    this.value = value;
    this.left = this.right = null;
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

function inorder(root) {
    var stack = [root];
    var result = [];
    while(stack.length) {
        var currentNode = stack.pop()
        result.push(currentNode.value);
        if(currentNode.right)
            stack.push(currentNode.right)
        if(currentNode.left)
            stack.push(currentNode.left);
        if(currentNode.left === null && currentNode.right === null) {
            console.log(currentNode.value);
        }
    }
    console.log(result);
}
inorder(root);