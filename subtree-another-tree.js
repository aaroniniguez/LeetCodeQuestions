//572. Subtree of Another Tree
//https://leetcode.com/problems/subtree-of-another-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
	let nodes = [s]
	while(nodes.length) {
		let currentNode = nodes.shift()
		if(isSameTree(currentNode, t))
			return true
		if(currentNode.left)
			nodes.push(currentNode.left)
		if(currentNode.right)
			nodes.push(currentNode.right)
	}
	return false;
};
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