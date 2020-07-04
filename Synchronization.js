describe('Synchronization for non-angular apps', function(){
	it('ExpectedConditions test', function(){
		browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		
		element(by.css("a[href*='loadAjax()']")).click();
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);
		element(by.id("results")).getText().then(function(text){
			console.log(text);
		})
	})
})