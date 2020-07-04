
describe('Protractor demo app', function(){
	it('Locate Element by using locator', function(){
		
//		browser.waitForAngular(false);
//		browser.get('https://www.google.com/');
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
//		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		})
	})
})