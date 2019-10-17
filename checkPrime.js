function isPrime(n) {
    var counter = 2;
    while (counter < n) {
        if(n % counter === 0) {
            return false;
        }
        counter ++;
    }
    return true;
}
console.log(isPrime(237));
