//348. Design Tic-Tac-Toe

//https://leetcode.com/problems/design-tic-tac-toe/

/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
	var x = new Array(n)
	for(var i =0; i< x.length; i++) {
		x[i] = new Array(n);	
	}
	this.board = x
	this.n = n;
	this.edge = n - 1;
	return this;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.didWin = function(direction, nLeft, player, currentCord) {
	let [x, y] = currentCord;
	if(nLeft === -1)
		return player;
	if(x < 0 || y < 0)
		return 0
	if(x === this.n || y === this.n)
		return 0
	if(!this.board[x])
		return 0
	if(this.board[x][y] !== player)
		return 0
	if(direction == "diag") {
		console.log("Hmm")
		return this.didWin(direction, nLeft-1, player, [x-1, y-1])
	}
	if(direction == "diagOther") {
		console.log("hmother", currentCord, nLeft-1)
		return this.didWin(direction, nLeft-1, player, [x+1, y-1])
	}
	if(direction === "left")
		return this.didWin(direction, nLeft-1 , player, [x-1, y])
	if(direction === "down")
		return this.didWin(direction, nLeft-1 , player, [x, y-1])
}
TicTacToe.prototype.move = function(row, col, player) {
	this.board[row][col] = player;	
	console.log(this.board)
	return this.didWin("left", this.edge, player, [this.edge,col]) || this.didWin("down", this.edge, player, [row, this.edge]) || this.didWin("diag", this.edge, player, [this.edge, this.edge]) || this.didWin("diagOther", this.edge, player, [0, this.edge]);
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
var mygame = new TicTacToe(3);
mygame.move(0,0,1);
//console.log(mygame)
console.log(mygame.move(0,2,2));
console.log(mygame.move(2,2,1));
console.log(mygame.move(1,1,2));
//console.log(mygame)
//console.log(mygame)