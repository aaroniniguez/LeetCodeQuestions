let myfunc = function myfunct() {
}

myfunc.prototype.test = function() {
	return this;
}

let myObj = new myfunc()
console.log(myObj === myObj.test())