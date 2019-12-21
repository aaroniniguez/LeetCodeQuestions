//https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	str = str.trim(" ")
	let sign = "";
	let returnVal;
	let firstChar = str.charAt(0) 
	let newString = ""
	if(firstChar === "+") {
		sign = "+"
		newString = str.slice(1)
	}
	else if(firstChar === "-") {
		sign = "-"
		newString = str.slice(1)
	}
	else if(!Number.isInteger(parseInt(firstChar)))
		return 0
	else {
		newString = str;
	}
	if(newString === "")
		return 0 
	if((sign && newString.charAt(0) === "-") || (sign && newString.charAt(0) === "+"))
		return 0
	let finalNumber = parseInt(sign+newString)
	if(isNaN(finalNumber))
		return 0
	console.log(finalNumber)
	const max = Math.pow(2,31) -1;
	const min = Math.pow(2, 31) * -1;
	if(finalNumber > max)
		return max 
	if(finalNumber < min)
		return min
	return finalNumber;
};

console.log(myAtoi("-abc"))
console.log(parseInt("+-3"))