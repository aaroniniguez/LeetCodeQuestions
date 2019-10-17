//994. Rotting Oranges


/**
 * @param {number[][]} grid
 * @return {number}
 */
function hasNonRottenCords(grid) {
    for(var y = 0; y < grid.length; y++) {
        for(var x =0; x < grid[y].length; x++) {
            if(grid[y][x] == 1) {
                return true;
            }
        }
    }
    return false;
}
function getRottenCords(grid) {
    var currentRottenCords = []
    for(var y =0; y < grid.length;y++) {
        for(var x =0; x < grid[y].length; x++) {
            //found rotten orange
            if(grid[y][x] === 2) {
                currentRottenCords.push([y,x]);
            }
        }
    }
    return currentRottenCords;
}
function isAdjacentToRotten(cord, currentRottenCords) {
    var [y,x] = cord;
    //is there a rotten cord left, right top bottom of current cord? 
    let left = [y, x-1];
    let right = [y,x+1];
    let up = [y+1,x];
    let down = [y-1,x];
    var isAdjacent = false;
    currentRottenCords.forEach((val, i) => {
        if(val[0] == left[0] && val[1] == left[1]) {
            isAdjacent = true;
        }
        if(val[0] == right[0] && val[1] == right[1]) {
            isAdjacent = true;
        }
        if(val[0] == up[0] && val[1] == up[1]) {
            isAdjacent = true;
        }
        if(val[0] == down[0] && val[1] == down[1]) {
            isAdjacent = true;
        }
    });
    return isAdjacent;
}
var orangesRotting = function(grid) {
    var currentRottenCords = [];
    var convertedToRotten = true;
    var minutes = 0;
    while(convertedToRotten) {
        convertedToRotten = false;
        currentRottenCords = getRottenCords(grid);
        //now convert to rotten...
        for(var y =0; y < grid.length;y++) {
            for(var x =0; x < grid[y].length; x++) {
                var turnRotten = isAdjacentToRotten([y,x], currentRottenCords);
                if(turnRotten == true) {
                    if(grid[y][x] == 1) {
                        grid[y][x] = 2;
                        convertedToRotten = true;
                    }
                }
            }
            //push in rotten cords to currentRottenCords
            //do a pass through...if made rotten then do another pass through etc
        }
        minutes ++;
    }
    //check if non rotten item in grid
    if(hasNonRottenCords(grid)) {
        return -1;
    } 
    return minutes-1;
    //now check for non rotten shit
};
//var input = [[2,1,1],[1,1,0],[0,1,1]];
var input = [[2,1,1],[0,1,1],[1,0,1]];
input = [[0,2]];
console.log(orangesRotting(input));