const {Builder, By, Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function autoCompleteFill(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/auto-complete");

        // await driver.findElement(By.id("autoCompleteMultipleContainer")).sendKeys("red,blue,yellow,green,black", Key.TAB);

        await driver.findElement(By.id("autoCompleteSingleContainer")).sendKeys("white", Key.TAB);

    }finally{
        if(driver !=undefined){
            // driver.quit();
        }
    }
}
exports.autoCompleteFill = autoCompleteFill;