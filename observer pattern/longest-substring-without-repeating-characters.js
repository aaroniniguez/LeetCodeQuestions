//3. Longest Substring Without Repeating Characters
//https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

 function getMaxString(oldString, newObj) {
	//save this state
	let newString = Object.keys(newObj).join("");
	if(oldString.length < newString.length) {
		oldString = newString;
	}
	return oldString
 }
var lengthOfLongestSubstring = function(s) {
	let savedVals = {}
	let max = "";
	for (let index = 0; index < s.length; index++) {
		let currentChar = s[index]
		console.log(currentChar, savedVals)
		if(savedVals[currentChar]) {
			max = getMaxString(max, savedVals)
			//remove everything before it...
			Object.keys(savedVals).forEach((character) => {
				if(savedVals[character] < savedVals[currentChar])	
					delete savedVals[character]
			});
			delete savedVals[currentChar]
			savedVals[currentChar] = index;
		} else {
			savedVals[currentChar] = index;
		}
	}
	max = getMaxString(max, savedVals);
	return max;
	//do one last comparison
};

console.log(lengthOfLongestSubstring("aabaab!bb"))