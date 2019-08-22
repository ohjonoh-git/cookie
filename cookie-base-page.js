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
    * Clicks on the cookie button however many times is passed in the index
    */ 
    async clickOnCookie(count) {
        for (let i = 0; i < count; i++) {
            await this.cookieButton.click();
        }
    }

    /*
    * Clicks on the click upgrade button
    */
   async clickOnMouseUpgrade() {
        await browser.wait(until.elementToBeClickable(this.mouseClickUpgrade), 5000, 'Mouse Click upgrade not visible');
        await browser.sleep(1000);
        await this.mouseClickUpgrade.click();
   }

   async clickUntilGrandmaAvailable() {
        let price = await this.mouseClickUpgradePrice.getText();
        
        while(true) {
            let status = await this.grandmaUpgrade.getAttribute('class');
            await browser.sleep(2000);
            if (status === 'product unlocked enabled') {
                await browser.wait(until.elementToBeClickable(this.grandmaUpgrade), 5000, 'Mouse Click upgrade not visible');
                console.log(status);
                break;
            }
            else {
                let price = await this.mouseClickUpgradePrice.getText();
                console.log(price);
                await this.clickOnCookie(price);
                await this.clickOnMouseUpgrade();
                //await this.recursive();
            } 
        }
    }

    async recursive() {
        let status = await this.grandmaUpgrade.getAttribute('class');
        await browser.sleep(2000);
        if (status === 'product unlocked enabled') {
            await browser.wait(until.elementToBeClickable(this.grandmaUpgrade), 5000, 'Mouse Click upgrade not visible');
            console.log(status);
            return;
        }
        else {
            let price = await this.mouseClickUpgradePrice.getText();
            console.log(price);
            await this.clickOnCookie(price);
            await this.clickOnMouseUpgrade();
            await this.recursive();
        } 
    }

    async checkAndClickOnGrandmaUpgrade() {
       
        while(true) {
            let status = await this.grandmaUpgrade.getAttribute('class');
            let price = await this.mouseClickUpgradePrice.getText();
            if(status != 'product unlocked enabled') {
                await this.cookieButton.click();
            }
            else {
                await this.grandmaUpgrade.click();
                return false;
            } 
        }

    }

 }

 module.exports = new CookiePage();