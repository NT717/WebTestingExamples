const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
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

        await driver.findElement(By.id("google_ads_iframe_/21849154601,22343295815/Ad.Plus-728x90_0__container__")).click();
        // await driver.findElement(By.css("a[href='http://demoqa.com']")).click();
    
        console.log("Test passe");
    }finally{
        if(driver !=undefined){
            // await driver.quit();
        }
    }
}
exports.brokenLinksClick = brokenLinksClick;