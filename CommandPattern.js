(function() {
	var carManager = {
		requestInfo: function(model, id) {
			return "The information for " +model + " with ID " + id + " is foobar";
		},

		buyVehicle: function(model, id) {
			return "You have successfully purchased Item " + id + ", a " + model;
		},

		arrangeViewing: function(model, id) {
			return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
		}
	}
})();
