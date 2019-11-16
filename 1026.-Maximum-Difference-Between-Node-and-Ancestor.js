//1026. Maximum Difference Between Node and Ancestor
//  Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxAncestorDiff = function(root) {
	var results = getData(root);
	return results[2]
	function baseCase(node, rootNode, highs, lows, distances) {
		if(node) {
			if(node.left || node.right) {
				var [High, Low, MaxD] = getData(node);
				console.log(High, Low)
				//addDistance(rootNode.val, High, distances)
				distances.push(Math.abs(rootNode.val - High))
				distances.push(Math.abs(rootNode.val - Low))
				highs.push(High);
				lows.push(Low)
				distances.push(MaxD)
			} else {
				highs.push(node.val)
				lows.push(node.val)
				distances.push(Math.abs(rootNode.val - node.val))
			}
		}
	}
	function getData(rootNode) {
		let highs = [];
		let lows = [];
		let distances = [];
		baseCase(rootNode.left, rootNode, highs, lows, distances)
		baseCase(rootNode.right, rootNode, highs, lows, distances)
		let newHigh = Math.max(...highs, rootNode.val)
		let newLow = Math.min(...lows, rootNode.val)
		let newMaxD = Math.max(...distances);
		return [newHigh, newLow, newMaxD];
	}
};
var myTree = new TreeNode(8);
myTree.left = new TreeNode(3);
myTree.left.left = new TreeNode(1);
myTree.left.right = new TreeNode(6)
	myTree.left.right.left = new TreeNode(4)
	//myTree.left.right.right = new TreeNode(7)
myTree.right = new TreeNode(10);
maxAncestorDiff(myTree)