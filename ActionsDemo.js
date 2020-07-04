describe('Actions Demo suite', function(){
	it('Actions test', function(){
		browser.get("https://www.hdfcbank.com").then(function(){
			browser.manage().window().maximize();
			browser.sleep(10000);
		})
		
		element(by.css("input[class='searchbox']")).sendKeys("home").then(function(){
			browser.sleep(5000);
		})
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000);
		})
			
	})
	
	
	
	it('Actions mouse hover over Test', function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://chercher.tech/practice/popups");
		//Mouse over operation
		browser.actions().mouseMove(element(by.id('sub-menu'))).perform().then(function(){
			browser.sleep(1000);
		})		
	})
	
	
	it('Alert Test', function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://chercher.tech/practice/popups");
		//Alerts accept
		element(by.name('alert')).click();
		browser.switchTo().alert().accept();
	})
	
	
	
	it('Double click Test', function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://chercher.tech/practice/popups");
		//Double click operation
		browser.actions().doubleClick(element(by.id('double-click'))).perform();
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(2000);
		})
	})
	
	
	it('Keyboard operation Test', function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://google.com");
		browser.actions()
			.click(element(by.name('q')))
			.keyDown(protractor.Key.SHIFT)
			.sendKeys("a")
			.keyDown(protractor.Key.SHIFT)
			.perform().then(function(){
				browser.sleep(5000);
			})
	})
	
	
	
	it('Mouse operations Test1', function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://chercher.tech/practice/drag-and-drop-example");
		browser.actions().dragAndDrop(
				element(by.id("drag1")),
				element(by.id("div2"))
			).perform().then(function(){
				browser.sleep(1000);
			})
		
		browser.actions().mouseDown(element(by.id("drag1")).getWebElement()).perform();
		browser.actions().mouseMove(element(by.id("div2")).getWebElement()).perform();
		browser.actions().mouseUp().perform().then(function(){
			browser.sleep(3000);
		})
	})
	
})