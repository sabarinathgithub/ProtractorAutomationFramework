describe('Protractor API functions', function(){
	
	function Add(a, b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	it('Element.All test', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		Add(3, 6);
		Add(5, 8);
		Add(2, 9);
		
		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log("row count is: "+ text);
		})
		
		element.all(by.repeater("result in memory")).first().element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log("fisrt value: "+text);
		})
		
		element.all(by.repeater("result in memory")).get(1).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log("2nd value is: "+text);
		})
		
		element.all(by.repeater("result in memory")).last().element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log("last value: "+text);
		})
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
		
	})
})