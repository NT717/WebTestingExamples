const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox, waitFind,findClick} = require("../utils");
const assert = require("assert");

const assertStatusText = async function(driver, expectedText){
    driver.wait(until.elementTextIs(waitFind(driver, By.id("linkResponse"),expectedText),5000))
}

async function linksClick(){
    driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/links");

        let originalWindow = driver.getWindowHandle();
        console.log("Home test passe");
        await findElement(driver, By.id("dynamicLink")).click();
        await driver.switchTo().window(originalWindow);
 
        await findClick(driver, By.id("created"));

        await assertStatusText(driver, "Link has responded with staus 201 and status text Created");

        await findClick(driver, By.id("no-content"));
        await assertStatusText(driver, "Link has responded with staus 204 and status text No Content");

        await findClick(driver, By.id("moved"));
        await assertStatusText(driver, "Link has responded with staus 301 and status text Moved Permanently");
    
        await findClick(driver, By.id("bad-request"));
        await assertStatusText(driver, "Link has responded with staus 400 and status text Bad Request");

        await findClick(driver, By.id("unauthorized"));
        await assertStatusText(driver, "Link has responded with staus 401 and status text Unauthorized");
   
        await findClick(driver, By.id("forbidden"));
        await assertStatusText(driver, "Link has responded with staus 403 and status text Forbidden");
   
        await findClick(driver, By.id("invalid-url"));
        await assertStatusText(driver, "Link has responded with staus 404 and status text Not Found");


        console.log("Home test passe");
    }finally{
        if (driver !=undeined){
            // driver.quit();
        }
    }
}
exports.linksClick = linksClick;
