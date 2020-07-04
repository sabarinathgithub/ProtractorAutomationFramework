describe('Calculation operation', function(){
	it('dropdown selection test', function(){		

		browser.get('http://juliemr.github.io/protractor-demo/');

		Calc(3, 6, "MULTIPLICATION");
		Calc(10, 2, "DIVISION");
		Calc(10, 2, "DIVISION");
		Calc(15, 3, "ADDITION");



	})

	function Calc(a, b, operation){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(actualOperation){
				if(actualOperation == operation){
					item.click();
				}
			})
		})
		element(by.id("gobutton")).click();	
		element(by.css("h2")).getText().then(function(text){
			console.log("result is: "+text);
		})
	}
})