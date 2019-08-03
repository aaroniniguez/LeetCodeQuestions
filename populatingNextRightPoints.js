function Node(val) {
    this.value = val;
    this.right = this.left = null;
}
var myRoot = new Node(10);
myRoot.left = new Node(2);
myRoot.left.left = new Node(5);
myRoot.left.right = new Node(4);
myRoot.right = new Node(3);
/*
     10
    2 3 
   5 4
*/
function dfsATree(root) {
    var stack = [root];
    //node depth is when it is found
    var depthStack = [0]
    var currentLevel = 0
    while(stack.length) {
        var currentNode = stack.pop();
        var currentLevel = depthStack.pop();
        console.log(currentLevel + "->" + currentNode.value);
        if(currentNode.right !== null){
            stack.push(currentNode.right);
            depthStack.push(currentLevel+1);
        }
        if(currentNode.left !== null){
            stack.push(currentNode.left);
            depthStack.push(currentLevel+1);
        }
    }
}
dfsATree(myRoot);