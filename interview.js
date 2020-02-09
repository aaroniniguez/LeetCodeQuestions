// Given a list of keywords and a list of search words,

// return a list of indices that indicate the beginning

// of a sequence of adjacent keywords.

// Examples:

var search_list1 = ["hello", "hi", "hi", "greetings", "hi", "greetings", "hey", "hi"];

var keywords1 = ["hi", "hey", "greetings"];

// Output: [4, 5]

var search_list2 = ["peter", "piper", "picked", "a", "peck", "of", "pickled", "peppers", "a",

               "peck", "of", "pickled", "peppers", "peter", "piper", "picked", "if",

               "peter", "piper", "picked", "a", "peck", "of", "pickled", "peppers",

               "wheres", "the", "peck", "of", "pickled", "peppers", "peter", "piper", "picked"];

var keywords2 = ["a", "peter", "picked", "piper"];

// Output: [0, 17]

var search_list = ["i", "saw", "susie", "sitting", "in", "a", "shoe", "shine", "shop", "where", "she",

               "sits", "she", "shines", "and", "where", "she", "shines", "she", "sits"];

var keywords = ["she", "sits", "shines"];

// Output: [11, 17]


console.log(
	solution(keywords1, search_list1),
	solution(keywords2, search_list2),
	solution(keywords, search_list)
);

function solution(keywords, search_list)  {
	let solutions = [];

	returnStarts(search_list, keywords, 0,null)

	function returnStarts(search_list, keywords, curIndex, potentialSolIndex) {
		if(keywords.length === 0) {
			solutions.push(potentialSolIndex);
			return;
		}
		for(let i =curIndex; i < search_list.length; i++) {
			if(keywords.includes(search_list[i])) {
				//remove it from keywords
				let index = keywords.indexOf(search_list[i])
				let copyKeywords = keywords.slice();
				copyKeywords.splice(index, 1);
				if(potentialSolIndex === null)
					returnStarts(search_list, copyKeywords, i+1, i)
				else
					returnStarts(search_list, copyKeywords, i+1, potentialSolIndex)
			}
			//dont return from first loop through
			else if (potentialSolIndex !== null) {
				return false;
			}
		}
	}
	return solutions;
}