//https://leetcode.com/problems/number-of-islands
var numIslands = function(grid) {
    var islandCount = 2;
    if(grid.length === 0)
        return 0;
    y = grid.length;
    x = grid[0].length;
    function exploreIsland(startY,startX) {
        if(startX < 0 || startX >= x)
            return;
        if(startY < 0 || startY >= y)
            return;
        var currentGridVal = parseInt(grid[startY][startX]);
        //water
        if(currentGridVal === 0)
            return;
        //already explored
         if(currentGridVal !== 1 && currentGridVal <= islandCount ) {
            return;
         }
        //unexplored
        if(currentGridVal === 1)
            grid[startY][startX] = islandCount;
        exploreIsland(startY, startX+1);
        exploreIsland(startY, startX-1);
        exploreIsland(startY-1, startX);
        exploreIsland(startY+1, startX);
    }
    for(var i=0; i < y; i++) {
        for(var p =0; p < x; p++) {
            if(parseInt(grid[i][p]) === 1) {
                //RUN RECURSION
                exploreIsland(i,p);
                islandCount++;
            } else {
                continue;
            }
        }
    }
    return islandCount-2;
};
var testCase1 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
var testCase2= [
                ["1","1","1","1","0"],
                ["1","1","0","1","0"],
                ["1","1","0","0","0"],
                ["0","0","0","0","0"]
                ];
var testCase3 = [
                ["1","1","1","1","1","1","1","1","1"],
                ["1","0","0","0","0","0","0","0","1"],
                ["1","0","1","0","1","0","1","0","1"],
                ["1","0","1","0","1","0","1","0","1"],
                ["1","0","1","0","1","0","1","0","1"],
                ["1","0","0","0","0","0","0","0","1"],
                ["1","1","1","1","1","1","1","1","1"]
                ];
console.log(numIslands(testCase3));