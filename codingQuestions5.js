const dailyTemperatures = (temps) => {
    const datesToProcess = new DateStack();
    const result = Array(temps.length).fill(0);
  
    let currentTemp, pastDateToProcess;
  
    for (let currentDate = 0; currentDate < temps.length; currentDate++) {
      currentTemp = temps[currentDate];
  
      while (datesToProcess.any() && temps[datesToProcess.last()] < currentTemp) {
        pastDateToProcess = datesToProcess.pop();
        result[pastDateToProcess] = currentDate - pastDateToProcess;
      }
      datesToProcess.add(currentDate);
    }
  
    return result;
  };
  
  
  // The DateStack is a normal stack with a helpful name
  // It could be substituted with any other well-behaved stack
  var DateStack = function () {
    this.stack = [];
  }
  
  DateStack.prototype.last = function () {
    return this.stack[this.stack.length - 1];
  }
  
  DateStack.prototype.add = function (value) {
    this.stack.push(value);
    return true;
  }
  
  DateStack.prototype.any = function () {
    return this.stack.length > 0;
  }
  
  DateStack.prototype.pop = function () {
    return this.any() ? this.stack.pop() : null;
  }

  var myArray = [72,76,73];
console.log(dailyTemperatures(myArray));