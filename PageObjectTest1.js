describe('PageObject Element Locator', function(){
	
	var obj = require("./PageObjectRepo.js");	
	beforeEach(function(){
		obj.getUrl();
	})

	var using = require('jasmine-data-provider');	
	var d = require("./scenarios.js");	
	
	using(d.ScenariosData, function(data, description){
		it('Calculator Addition Test using PageObject-'+description, function(){
			
			obj.firstInput.sendKeys(data.firstInput);
			obj.secondInput.sendKeys(data.secondInput);
			obj.goButton.click();
			
			obj.result.getText().then(function(text){
				console.log(text);
				expect(text).toBe(data.result);
			})
		})
	});
	
	
	
	afterEach(function(){
		console.log("Test case is completed...")
	})
})




