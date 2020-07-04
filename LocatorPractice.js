describe('Test Suite', function() {
	
	function calc(a,b, operation){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(expectedOperation){
				if(expectedOperation == operation){
					item.click();
				}
			})
		})
		
		element(by.id("gobutton")).click();
	}
	
	it('Test case1', function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		calc(4,6, "MULTIPLICATION");
//		calc(7,5);
//		calc(7,9);
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})			
		})
		
		
		element(by.model("operator")).element(by.css("option:nth-child(2)")).getText().then(function(text){
			console.log(text);
		})
		
	})
})