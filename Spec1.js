describe('Test Suite', function() {
	
	it('Test case1', function() {
		
		browser.get('https://angularjs.org');
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			console.log("I am in the last step of execution.")
		})
		
	})
})