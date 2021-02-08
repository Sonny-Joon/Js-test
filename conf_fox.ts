declare const allure: any;
import { browser} from "protractor";

exports.config = {
directConnect: true,
seleniumAddress: 'http://localhost:4444/wd/hub',
multiCapabilities: [{
      'browserName': 'firefox',
    }],
    specs: ["tests/navigation_test.js"],
 
    onPrepare: function () {
      beforeEach(function(){ browser.waitForAngularEnabled(false);
      (function() {browser.driver.manage().window().maximize();})();
      });
        var AllureReporter = require('jasmine-allure-reporter');
        var allureReporter = new AllureReporter({
        resultsDir: 'allure-results'
        });
        jasmine.getEnv().addReporter(allureReporter);
        }
    };