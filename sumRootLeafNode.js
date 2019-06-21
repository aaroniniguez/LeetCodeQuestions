//https://leetcode.com/problems/sum-root-to-leaf-numbers/


//a tree node in js is: 

var myNode = function TreeNode(value) {
    this.val = val;
    this.right = this.left = null;
}

var sumNumbers = function(root) {
        //create an array of all the nodes and iterate till empty
        //add a property to each node that is the running number so far
        root.total = String(root.val);
        var totalSum = 0;
        var nodes = [root];
        while(nodes.length > 0) {
            let currentNode = nodes.shift();
            if(currentNode.left !== null){
                currentNode.total += currentNode.val;
                nodes.push(currentNode.left);
            }
            if(currentNode.right !== null){
                currentNode.total += currentNode.val;
                nodes.push(currentNode.right);
            }
            totalSum += parseInt(nodes.total);
        }
};
