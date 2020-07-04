describe('Ecommerce suite', function(){
	it('Online Shopping Test', function(){
		browser.manage().window().maximize();
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.linkText("Shop")).click();
		addItemToCart("Samsung Note 8")
		addItemToCart("iphone X");
		addItemToCart("Nokia Edge");
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			console.log(text);
			var count = text.split("(")[1].split(")")[0];
			console.log(count.trim());
			expect(count.trim()).toBe("3");
		})
		
		element(by.partialLinkText("Checkout")).click().then(function(){
			browser.sleep(5000);
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