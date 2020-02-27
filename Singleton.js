var Singleton = (function () {
	var instance;
	function init() {
		function privateMethod() {
			console.log("hmm private")
		}
		var privateVariable = "private too";
		var privateRandomNumber = Math.random();

		return {
			publicMethod() {
				console.log("the public can see me");
			}, 
			publicProperty: "I am also public",
			getRandomNumber() {
				return privateRandomNumber;
			}
		};
	}
	return {
		getInstance() {
			if(!instance) {
				instance = init();
			}
			return instance;
		}
	}
})();

//save instance in variable
//return the instance by (if doesnt exist create it by calling a functoin....)


console.log(Singleton.getInstance().getRandomNumber());
console.log(Singleton.getInstance().getRandomNumber());
console.log(Singleton.getInstance().privateVariable);