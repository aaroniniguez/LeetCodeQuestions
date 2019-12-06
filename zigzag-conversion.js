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
	//first create num rows arrays in an array
	function addToGrid(s, currentRow, xPosition) {
		let sArray = s.split("");
		if(currentRow === 0) {
			for (var index = 0; index < grid.length; index++) {
				let newChar = sArray.shift();
				if(newChar === undefined)
					return
				grid[index][xPosition] = newChar 
			}
			addToGrid(sArray.join(""), index - 2, xPosition + 1)
		}
		else {
			let newChar = sArray.shift();
			if(newChar === undefined)
				return
			grid[currentRow][xPosition] = newChar;
			addToGrid(sArray.join(""), currentRow - 1, xPosition + 1)
		}
	}
	addToGrid(s, 0, 0);
	let result = ""
	grid.forEach(row => {
		result += row.join("");
	});
	return result;
};
let s = "AB";
let numRows = 1;
convert(s, numRows);