function translateMove(move) {
    if(move == "R")
        return [1, 0];
    if(move == "L")
        return [-1, 0];
    if(move == "U")
        return [0, 1];
    if(move == "D")
        return [0, -1];
}

function judgeCircle(moves) {
    var startingPosition = [0, 0];
    for(let i =0; i < moves.length; i++) {
        let [x, y] = translateMove(moves[i]);
        startingPosition[0] += x;
        startingPosition[1] += y;
    }
    if(startingPosition[0] !== 0 || startingPosition[1] !== 0) {
        return false;
    } else {
        return true;
    }
}
console.log(judgeCircle("RUDL"));