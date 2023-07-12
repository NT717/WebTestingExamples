const {Builder, By, Key, until} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function brokenLinkClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/broken");

        const validLink = driver.findElement(By.linkText("Click Here for Valid Link"));
        const linkUrl = validLink.getAttribute("href");
        const concatLinkUrl = linkUrl.substring( linkUrl.indexOf(":"));
        console.log("Opening link: " +linkUrl+ "concatLinkUrl: " +concatLinkUrl);

        await driver.sendKeys(Key.ENTER);
        await driver.wait(until.urlIs("https" +concatLinkUrl),1000);
        console.log(await driver.getCurrentUrl());
        const currentUrl = driver.getCurrentUrl();
        const concatCurrentUrl = currentUrl.substring(currentUrl.indexOf(":"));
        console.log("currentUrl: " +currentUrl+ "concatCurrent: " +concatCurrentUrl);
        assert.strictEqual(concatLinkUrl, concatCurrentUrl);
        



    }
}