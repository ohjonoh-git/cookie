exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['cookie-game.js'],


 
    onPrepare: function() {
        //browser.driver.manage().window().maximize().catch();
        browser.waitForAngularEnabled(false);
    },

    SELENIUM_PROMISE_MANAGER: false,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    }
  };