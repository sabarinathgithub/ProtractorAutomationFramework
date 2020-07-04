
function car(){
	this.color = "white";
	this.brand = "Nissan";
	this.engine = "turbo";
	
	this.getModel = function(){
		console.log("This is 2020 model.");
	};
};

module.exports = new car();

