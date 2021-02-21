declare const allure: any;
import { browser} from "protractor";

exports.config = {
directConnect: true,
seleniumAddress: 'http://localhost:4444/wd/hub',
multiCapabilities: [{
  'browserName': 'chrome',
   chromeOptions: {
   'args': ['start-maximized'],
   }}],
    specs: ["tests2/music_test.js"],
 
onPrepare: function () {
  beforeEach(function(){ browser.waitForAngularEnabled(false);});
  var AllureReporter = require('jasmine-allure-reporter');
  var allureReporter = new AllureReporter({
  resultsDir: 'allure-results'
  });
  jasmine.getEnv().addReporter(allureReporter);
  }
  };