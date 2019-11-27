//96. Unique Binary Search Trees

/**
 * @param {number} n
 * @return {number}
 */


function recursiveCreate(currentNode, numbersLeft) {
	let totalSum = 0;
	let leftSum = 0;
	let rightSum = 0;
	if(numbersLeft.length === 0)
		return 1
	if(currentNode.left === null) {
		numbersLeft.forEach((element, index) => {
			if(element.val <= currentNode.val) {
				currentNode.left = element
				let numbersCopy = numbersLeft.slice()
				numbersCopy.splice(index, 1)
				leftSum += recursiveCreate(currentNode, numbersCopy)
			}
		});
	}
	if(currentNode.right === null) {
		numbersLeft.forEach((element, index) => {
			if(element.val >= currentNode.val) {
				currentNode.right = element
				let numbersCopy = numbersLeft.slice()
				numbersCopy.splice(index, 1)
				rightSum += recursiveCreate(currentNode, numbersCopy)
			}
		});
	}
}
var numTrees = function(n) {
	let numbers = []
	let totalSum = 0;
	for (var i =1; i < numbersLeft +1;i++) {
		numbers.push(i)
	}
	numbersLeft.forEach(element => {
		totalSum += recursiveCreate(new TreeNode(element), numbers)
	});
	return totalSum;
};


class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = this.right = null;
	}
}
