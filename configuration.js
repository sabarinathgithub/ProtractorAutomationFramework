
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
//		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs : ['PageObjectTest1.js'],

		onPrepare : function(){
			browser.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);
		},
		
		suites: {
			Smoke : ['Dropdown.js', 'ChainLocator.js'],
			Regression : 'PageObjectTest1.js',
			System : ['LocatorPractice.js', 'Alerts']
		},
		
		
		capabilities: {
		'browserName' : 'firefox'
		},


		capabilities: {
		browserName: 'chrome',
		'goog:chromeOptions': {
		w3c: false
		},
		},
};



/*jasmineNodeOpts: {
	showColors: true, // Use colors in the command line report.
},*/




