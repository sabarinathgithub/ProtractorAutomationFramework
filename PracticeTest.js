describe('Ecommerce application', function(){
	it('Form submission test', function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name("name")).sendKeys("name1");
		element(by.name("email")).sendKeys("test1@gmail.com");
		element(by.css("input[type='password']")).sendKeys("password123");
		element(by.id("exampleCheck1")).click();
//		element.all(by.tagName("option")).last().click().then(function(){
//			browser.sleep(3000);
//		})
		
//		element(by.id("exampleFormControlSelect1")).element(by.css("option:nth-child(2)")).click().then(function(){
//			browser.sleep(3000);
//		})
		
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click();
		element(by.css("div[class*='success']")).getText().then(function(text){
			console.log(text);
		})		
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M");
		element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
			console.log(text);
			expect(text).toBe("Name should be at least 2 characters");
		})
		
	})
	
	it('Online Shopping Test', function(){
		browser.manage().window().maximize();
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.linkText("Shop")).click();
		addItemToCart("Samsung Note 8")
		addItemToCart("iphone X");
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			console.log(text);
			var count = text.split("(")[1].split(")")[0];
			console.log(count.trim());
			expect(count.trim()).toBe("2");
		})
		
	})
	
	function addItemToCart(expectedItem){
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(text){
				if(text == expectedItem){
					item.element(by.buttonText("Add")).click();
				}
			})
		})
	}
})