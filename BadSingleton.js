var myBadSingleton = (function() {
	var instance;
	function init() {
		var privateRandomNumber = Math.random();
		return {
			getRandomNumber: function() {
				return privateRandomNumber;
			}
		};
	}
});