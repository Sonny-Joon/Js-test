declare const allure: any;
import { browser} from "protractor";

// An example configuration file.
exports.config = {
    directConnect: true,
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
      'browserName': 'chrome',
      chromeOptions: {
        'args': ['start-maximized'],
    }
    }],
    specs: [
        "tests/*test.js",
    ],
 
    onPrepare: function () {
        browser.waitForAngularEnabled(false)
        var AllureReporter = require('jasmine-allure-reporter');
var allureReporter = new AllureReporter({
  resultsDir: 'allure-results'
});
        jasmine.getEnv().addReporter(allureReporter);
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
  
      }
    };
