declare const allure: any;
import { browser} from "protractor";


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    seleniumArgs: ['-Dwebdriver.edge.driver=C:/edgedriver_win64/MicrosoftWebDriver.exe'],
    multiCapabilities: [{
      'browserName': 'MicrosoftEdge',
    }],
    specs: [
        "tests/navigation_test.js",
    ],
    
 
    onPrepare: function () {
      beforeEach(function(){ browser.waitForAngularEnabled(false);});
        var AllureReporter = require('jasmine-allure-reporter');
var allureReporter = new AllureReporter({
  resultsDir: 'allure-results'
});
        jasmine.getEnv().addReporter(allureReporter);
        }
    };