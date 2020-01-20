//https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	let paths = path.split("/");
	let currentFolder = [];
	paths.forEach(path => {
		if(path === "")
			return
		if(path === ".")
			return
		else if(path === "..")
			currentFolder.pop();
		else
			currentFolder.push(path);
	});
	let newString = currentFolder.join("/")
	return "/"+newString;
};