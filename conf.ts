// An example configuration file.
exports.config = {
    directConnect: true,
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
      'browserName': 'chrome',
      chromeOptions: {
        'args': ['start-maximized']
    }
    }],
    specs: [
        "tests/navigation_test.js",
    ]
       
  };
