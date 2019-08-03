var exist = function(board, word) {
    for(var i =0; i < board.length; i ++) {
        for(var p =0; p < board[i].length; p++) {
            if(board[i][p] === word.charAt(0)) {
                if(runDFS(0, [i, p]))
                    return true;
            }
        }
    }
    return false;
    function runDFS(wordIndex, pos, pastPositions = {}) {
        let [x, y] = pos;
        //reached end of string
        if(!word[wordIndex])
            return true
        if(!board[x])
            return false
        if(!board[x][y])
            return false
        if(board[x][y] != word[wordIndex])
            return false
        if(pastPositions[`${x},${y}`])
            return false
        else
            pastPositions[`${x},${y}`] = 1;
        //search for next letter
        let up  = [x-1, y];
        let down = [x+1, y]
        let right    = [x, y+1];
        let left  = [x, y-1];
        wordIndex++;
        returnValue = (runDFS(wordIndex, up, pastPositions) || runDFS(wordIndex, down, pastPositions) || runDFS(wordIndex, right, pastPositions) || runDFS(wordIndex, left, pastPositions)); 
        //clear cache
        pastPositions[`${x},${y}`] = false;
        return returnValue;
    }
}
    
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
// up down right left
board = [
    ["A","B","C","E"],
    ["S","F","E","S"],
    ["A","D","E","E"]
];
word = "ABCESEEEFS"
console.log(exist(board, word));
console.log(board);