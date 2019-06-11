//Given two binary trees, write a function to check if they are the same or not.
//Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
//https://leetcode.com/problems/same-tree/
//Author: Aaron Iniguez

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//p and q are TreeNodes
var isSameTree = function(p, q) {
    var queue1 = [p];
    var queue2 = [q];
    while(queue1.length && queue2.length){
        var node1 = queue1.shift();
        var node2 = queue2.shift();
        var nodeValue1;
        var nodeValue2;
        if(node1 === null) {
            nodeValue1 = null;
        } else {
            queue1.push(node1.left);
            queue1.push(node1.right);
            nodeValue1 = node1.val;
        }
        if(node2 === null) {
            nodeValue2 = null;
        } else {
            queue2.push(node2.left);
            queue2.push(node2.right);
            nodeValue2 = node2.val;
        }
        if(nodeValue1 !== nodeValue2) {
            return false;
        }
    }
    return queue1.length === queue2.length;
}