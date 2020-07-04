describe('Frames Demo', function(){
	it('Switch to Frame Test', function(){
		browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();
		browser.get("https://rahulshettyacademy.com/AutomationPractice/").then(function(){
			browser.sleep(3000);
		})
		
//		browser.switchTo().frame(element(by.css("iframe[id='courses-iframe']")).getWebElement());
		browser.switchTo().frame("iframe-name");
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		})
	})
})