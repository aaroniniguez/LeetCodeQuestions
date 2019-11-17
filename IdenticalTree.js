//Given two binary trees, write a function to check if they are the same or not.
//Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
//https://leetcode.com/problems/same-tree/
//Author: Aaron Iniguez

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//p and q are TreeNodes
var isSameTree2 = function(p, q) {
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
//recursive solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

	if(p === null && q === null)
		return true
	if(p === null && q != null)
		return false
	if(p !== null && q === null)
		return false
	if(p.val !== q.val)
		return false

	let leftSide = isSameTree(p.left, q.left)
	let rightSide = isSameTree(p.right, q.right)
	return leftSide && rightSide
};

let node1 = new TreeNode(1)
node1.left = new TreeNode(2)
//node1.right = new TreeNode(3)

let node2 = new TreeNode(1)
node2.right = new TreeNode(2)
//node2.right = new TreeNode(3)
console.log(isSameTree(node1, node2))
