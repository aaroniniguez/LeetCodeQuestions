//973. K Closest Points to Origin
//https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    var allDistances = [];
    var distanceToValMapping = [];
    var distance;
    points.forEach(function(val,i) {
        distance = Math.sqrt(Math.pow(val[0],2)+Math.pow(val[1],2));
        if(!distanceToValMapping[distance]) {
            distanceToValMapping[distance] = [val];
        }
        else {
            distanceToValMapping[distance].push(val);
        }
        allDistances.push(distance);
});
allDistances.sort((a,b) => a - b);
var returnResult = []
for(var i =0; i < K; i++) {
    for(var j = 0; j < distanceToValMapping[allDistances[i]].length; j++) {
        returnResult.push(distanceToValMapping[allDistances[i]][j]);
        i++
        if(i == K) {
            return returnResult;
        }
    }
    i--;
}
return returnResult;
};
var points = [[1,3],[-2,2],[2,-2]];
var K = 1;
console.log(kClosest(points, K));