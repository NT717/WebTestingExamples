const {Builder, By, Key, until, locateWith,WebDriver} = require("selenium-webdriver");
const {getFirefox, waitFind, findClick} = require("../utils");
const assert = require("assert");

// const assertStatusText = async function(driver, expectedText){
//     driver.wait(until.elementTextIs(waitFind(driver, By.id("brokenLinksResponse"),expectedText),5000));
// }

async function brokenLinksClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/broken");

        const validLink = await driver.findElement(By.linkText("Click Here for Valid Link"));
        const linkUrl = await validLink.getAttribute("href");
        const concatLinkUrl = linkUrl.substring(linkUrl.indexOf(":"));
        console.log("Opening link: "+linkUrl+", concatLinkUrl: "+concatLinkUrl);

        await validLink.sendKeys(Key.ENTER);
        await driver.wait(until.urlIs("https"+concatLinkUrl), 1000);
        console.log(await driver.getCurrentUrl());
        const currentUrl = await driver.getCurrentUrl();
        const concatCurrentUrl = currentUrl.substring(currentUrl.indexOf(":"));
        console.log("current url: "+currentUrl+", concatCurrentUrl: "+concatCurrentUrl);
        assert.strictEqual(concatLinkUrl, concatCurrentUrl);

        await driver.navigate().back();

        const brokenLink = await driver.findElement(By.linkText("Click Here for Broken Link"));
        const brokenLinkUrl = await brokenLink.getAttribute("href");
        const concatBrokenLink = brokenLinkUrl.substring(brokenLinkUrl.indexOf(":"));
        console.log("Opening link: "+brokenLinkUrl+", concatLinkUrl: "+concatBrokenLink);

        await validLink.sendKeys(Key.ENTER);
        await driver.wait(until.urlIs("https"+concatBrokenLink), 1000);
        console.log(await driver.getCurrentUrl());
        const currentBrokenUrl = await driver.getCurrentUrl();
        const concatBrokenCurrentUrl = currentBrokenUrl.substring(currentBrokenUrl.indexOf(":"));
        console.log("current url: "+currentBrokenUrl+", concatCurrentUrl: "+concatBrokenCurrentUrl);
        assert.strictEqual(concatLinkUrl, concatBrokenCurrentUrl);
    
        console.log("Test passe");
    }finally{
        if(driver !=undefined){
            // await driver.quit();
        }
    }
}
exports.brokenLinksClick = brokenLinksClick;

