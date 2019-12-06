//https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if(numRows === 1)
		return s;
	let grid = new Array(numRows);
	for(let i =0; i < numRows; i++) {
		grid[i] = [];
	}
	let sArray = s.split("");
	//first create num rows arrays in an array
	function addToGrid(currentRow, xPosition) {
		if(currentRow === 0) {
			for (var index = 0; index < grid.length; index++) {
				let newChar = sArray.shift();
				if(newChar === undefined)
					return
				grid[index][xPosition] = newChar 
			}
			addToGrid(index - 2, xPosition + 1)
		}
		else {
			let newChar = sArray.shift();
			if(newChar === undefined)
				return
			grid[currentRow][xPosition] = newChar;
			addToGrid(currentRow - 1, xPosition + 1)
		}
	}
	addToGrid(0, 0);
	let result = ""
	grid.forEach(row => {
		result += row.join("");
	});
	return result;
};
let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows)) 