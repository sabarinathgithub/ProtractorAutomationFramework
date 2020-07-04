describe('Chain Locator Example', function(){
	it('repeator Locator test', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("6");
		element(by.id("gobutton")).click();
		
		//get the result from the table
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})
		
		//display the operator values
		element(by.model("operator")).element(by.css("option:nth-child(1)")).getText().then(function(text){
			console.log("first operator is: "+text);
		})
		
		element(by.model("operator")).element(by.css("option:nth-child(2)")).getText().then(function(text){
			console.log("second operator is: "+text);
		})
		
		element(by.model("operator")).element(by.css("option:nth-child(3)")).getText().then(function(text){
			console.log("third operator is: "+text);
		})
		
		
		
		
	})
})