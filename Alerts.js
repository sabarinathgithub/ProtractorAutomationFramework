describe('Alerts Demo', function(){
	it('Alert Test', function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		
		element(by.id('confirmbtn')).click();
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(3000);
		})
	})
})