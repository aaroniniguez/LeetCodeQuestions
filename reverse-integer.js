//https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let stringX = String(x);
	let isNeg = "";
	let reverse = "";
	for(let i =0; i < stringX.length; i++) {
		if(stringX[i] === "-")	
			isNeg = "-";
		else
			reverse = stringX[i] + reverse;
	}
	let returnVal = parseInt(isNeg+reverse);
	if(Math.abs(returnVal) > Math.pow(2, 31))
		return 0
	else
		return parseInt(isNeg+reverse);
};
console.log(reverse(123))