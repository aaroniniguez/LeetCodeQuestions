/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	let groupings = [];
	let groupingObjects = [];
	strs.forEach(str => {
		//put item into an object
		let newObject = {};
		for(let char of str) {
			if(!newObject[char])
				newObject[char] = 1;
			else
				newObject[char] += 1;
		}
		//then check if that object exists in groupings
		let doesExist = null;
		let savedIndex = null;
		groupingObjects.forEach((curObject, curKey) => {
			if(doesExist)
				return;
			let currentEntries = Object.entries(newObject);
			let doesMatch = true;
			if(Object.keys(curObject).length !== currentEntries.length)
				doesMatch = false; 
			currentEntries.forEach(element => {
				if(doesMatch === false)
					return
				let [key, value] = element;
				if(curObject[key] !== value)
					doesMatch = false;
			});
			if(doesMatch) {
				doesExist = true
				savedIndex = curKey;
			}
		});
		if(!doesExist) {
			groupings.push([str]);
			groupingObjects.push(newObject);
		}
		else {
			groupings[savedIndex].push(str);
		}
	});
	return groupings;
		console.log(groupings);
		console.log(groupingObjects)
};

let strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strings);
