/**
 * @param {string} s
 * @return {string}
 */
//Input: "babad"

//does simple for loop across all
function getSubstrings(s) {
    var subStrings = [];
    var runningString = "";
    for(let i =0; i < s.length;i++) {
        runningString += s.charAt(i);
        subStrings.push(runningString);
    }
    return subStrings;
}
var longestPalindrome = function(s) {
    var allSubstrings = [];
    for(let i =0; i < s.length; i++) {
        allSubstrings = [...allSubstrings,...getSubstrings(s.slice(i))];
    }
    var largestP = "";
    allSubstrings.forEach(function(val, i) {
        if(isPalindrome(val)) {
            if(val.length > largestP.length) {
                largestP = val;
            }
        }
    });
    console.log(allSubstrings);
    return largestP;
};
function isPalindrome(s, s1, s2 ){
    //aab
    if(s === s1) {
        return true;
    }
    //abb
    if(s1 == s2) {
        return true;
    }
    if(s === null || s2 === null) {
        return false;
    }
    else {
        if(s === s2) {
            return true;
        }
    }
    return false;

}
function getPalindrome(s, index) {
    j = index-1;
    i = index+1;
    var result = s.charAt(index);
    //check for aa starting point
    var sameLetter = true;
    while(sameLetter) {
        if(s.charAt(index) == s.charAt(i)) {
            result = result + s.charAt(i);
            i++;
        }
        else if(s.charAt(index) == s.charAt(j)) {
            result = s.charAt(j) + result;
            j--
        }
        else {
            sameLetter = false;
        }
    }
    for(; i < s.length; i++) {
        if(s.charAt(j) === s.charAt(i)) {
            result = s.charAt(j) + result + s.charAt(i);
        }
        else {
            return result;
        }
       j-- 
    }
    return result;
}
var longestPalindromeVersion2 = function(s) {
    var result = "";
    var newP = ""
    for (let i =0;i < s.length;i++) {
        if(isPalindrome(s.charAt(i-1), s.charAt(i), s.charAt(i+1))) {
            newP = getPalindrome(s,i);
            if(newP.length > result.length) {
                result = newP;
            }
        }
    }
    //case ac ...no palindrome just choose any number to return
    if(s.length > 0 && result === "") {
        return s.charAt(0);
    }
    else {
        return result;
    }
}
//const isPalindrome = (s) => {
    //return s.split('').reverse().join('') === s;
//} 
console.log(longestPalindromeVersion2("ccc"));