
function getFibonanci(n) {
    var fibTotal = 0;
    var fibSaved = [0,1];
    for(var i =0; i < n; i++) {
        fibTotal += fibSaved[i];
        if(fibSaved[i-1] === undefined) {
            //fibSaved.push(fibSaved[i]);
        }
        else {
            fibSaved.push(fibSaved[fibSaved.length-1] + fibSaved[fibSaved.length-2]);
        }
    }
    console.log(fibSaved)
    return fibTotal;
}
function getFibonanciRecursive(n) {
    if(n == 1)
        return 0;
    if(n == 2)
        return 1;
    return getFibonanciRecursive(n-1) + getFibonanciRecursive(n-2);
}
console.log(getFibonanciRecursive(4));