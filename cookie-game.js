/**
 *  This is 
 */

var until = protractor.ExpectedConditions;

describe('When the user navigates to the cookieclicker page', function() {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://orteil.dashnet.org/cookieclicker/');
    });
    it('should select the cookie', function() {
        await browser.wait(until.visibility())
    });
  });