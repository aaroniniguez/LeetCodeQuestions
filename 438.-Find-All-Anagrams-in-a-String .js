//438. Find All Anagrams in a String

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function convertToObject(p) {
    const pCopy = {};
    for( var j = 0; j < p.length; j++) {
        let currentChar = p[j];
        if(!pCopy[currentChar])
            pCopy[currentChar] = 1;
        else
            pCopy[currentChar]++;
    }
    return pCopy;
}
var findAnagrams = function(s, p) {
    var startingIndex = null;
    var pCopy = convertToObject(p);
    var results = [];
    for(var i =0; i < s.length;i ++) {
        let currentS = s[i];
        if(pCopy[currentS]) {
            if(startingIndex === null) {
               //set startingIndex 
               startingIndex = i;
            }
            pCopy[currentS]--;
            if(pCopy[currentS] === 0) {
                delete pCopy[currentS];
            }
        }
        else if(startingIndex !== null) {
            //reset back to null
            i = startingIndex;
            startingIndex = null;
            pCopy = convertToObject(p);
        }
        if(Object.keys(pCopy).length === 0 && startingIndex !== null) {
            //successfull result!
            results.push(startingIndex);
            i = startingIndex;
            startingIndex = null;
            pCopy = convertToObject(p);
        }
    }
    return results;
};
var s = "abacbabc";
var p = "abc";

console.log(findAnagrams(s, p));