/**
 * This is a test for the basics of the cookie page
 * Traverses to https://orteil.dashnet.org/cookieclicker/ 
 * Automates clicking of the cookie every so often
 * Buys new methods of generating cookies whenever possible
 * You only need to buy up to the “grandma” level, no need to get super deep into the game
 */

const CookiePage = require('./cookie-base-page');
var until = protractor.ExpectedConditions;

describe('When the user navigates to the cookieclicker page', () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://orteil.dashnet.org/cookieclicker/');
    });

    it('should click on the cookie and buy the basic level of upgrade whenever possible until grandma has been selected', async () => {
        await browser.wait(until.visibilityOf(CookiePage.mouseClickUpgradePrice), 5000, 'Cookie button was not visible');
        
        await CookiePage.clickUntilGrandmaAvailable();
        await CookiePage.grandmaUpgrade.click();

        expect(await CookiePage.grandmaRow.isDisplayed()).toBe(true);
    });
});