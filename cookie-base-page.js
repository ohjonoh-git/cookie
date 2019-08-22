/**
 * Base Page for the cookie game. Includes all locators used on the page
 */

 var until = protractor.ExpectedConditions;

 class CookiePage {

    constructor() {
        this.cookieButton = element(by.css('#bigCookie'));
        this.cookieCount = element(by.css('#cookies'));
        this.mouseClickUpgrade = element(by.css('#product0'));
        this.mouseClickUpgradePrice = element(by.css('#productPrice0'));
        this.grandmaUpgrade = element(by.css('#product1'));
        this.grandmaUpgradedCount = element(by.css('##productOwned1'));
        this.grandmaRow = element(by.css('#rowCanvas1'));
     }

    /*
    *  Clicks on the cookie button however many times is passed in the index
    */ 
    async clickOnCookie(count) {
        for (let i = 0; i < count; i++) {
            await this.cookieButton.click();
        }
    }

    /*
    *  Clicks on the click upgrade button
    */
   async clickOnMouseUpgrade() {
        await browser.wait(until.elementToBeClickable(this.mouseClickUpgrade), 5000, 'Mouse Click upgrade not visible');
        await browser.sleep(1000);
        await this.mouseClickUpgrade.click();
   }

   /*
    *  Obtains the price of the mouse upgrade and then the status of the grandma upgrade.
    *  It will continue to select the mouse upgrade until grandma is available
    */
   async clickUntilGrandmaAvailable() {
        while(true) {
            let price = await this.mouseClickUpgradePrice.getText();
            await this.clickOnCookie(price);
            let status = await this.grandmaUpgrade.getAttribute('class');
            if (status === 'product unlocked enabled') {
                break;
            }
            else {
                await this.clickOnMouseUpgrade();
            } 
        }
    }

    /*
    *   This is a function trying to obtain the grandma upgrade recursively using the similar method above
    *   Although it technically works, it selects the mouse upgrade one additional time before the grandma is selected
    */ 
    async recursive() {
        let status = await this.grandmaUpgrade.getAttribute('class');
        let price = await this.mouseClickUpgradePrice.getText();
        await this.clickOnCookie(price);

        if (status === 'product unlocked enabled') {
            return
        }
        else {
            await this.clickOnMouseUpgrade();
            await this.recursive();
        } 
    }

 }

 module.exports = new CookiePage();