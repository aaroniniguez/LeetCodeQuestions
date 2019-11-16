//1. Two Sum
//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function hashFunc(number, target) {
	return target - number
}
var twoSum = function(nums, target) {
	let mapping = {}
	let solution;
	nums.forEach((element, index) => {
		if(mapping[element] !== undefined)
			solution = [index, mapping[element]]
		//if exists already in object then return a solution!
		let newIndex = hashFunc(element, target)	
		mapping[newIndex] = index
	});
	return solution
};