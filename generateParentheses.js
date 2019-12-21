//https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let results = [];
	let allChars = {
		"(": n,
		")": n
	}
	getAllCombinations(0, allChars, "");
	function getAllCombinations(validCounter, availableChars, newResult) {
		if(availableChars["("] === 0 && availableChars[")"] === 0)
			results.push(newResult)
		if(validCounter > 0) {
			if(availableChars["("]) {
				let mycopy = {...availableChars}
				mycopy["("] -= 1;
				getAllCombinations(validCounter +1, mycopy, newResult + "(")
			}
			if(availableChars[")"]) {
				let mycopy = {...availableChars}
				mycopy[")"] -= 1;
				getAllCombinations(validCounter -1, mycopy, newResult + ")")
			}
		}
		else if(validCounter === 0) {
			if(availableChars["("]) {
				let mycopy = {...availableChars}
				mycopy["("] -= 1;
				getAllCombinations(validCounter +1, mycopy, newResult + "(")
			}
		}
		//have a well formed counter 
		//and get the answer recursively
	}
	console.log(results)
	return results;
};
generateParenthesis(3)