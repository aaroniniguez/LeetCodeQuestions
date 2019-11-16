//242. Valid Anagram
//https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	const letters = {}
	s = s.split("")
	s.forEach(element => {
		if(letters[element] === undefined)
			letters[element] = 1
		else
			letters[element] += 1;
	});
	t = t.split("")
	t.forEach(element => {
		letters[element] -= 1;
	});
	let isValid = true;
	console.log(letters)
	Object.keys(letters).forEach(element => {
		if(letters[element] !== 0)	
			isValid = false
	});
	return isValid
};