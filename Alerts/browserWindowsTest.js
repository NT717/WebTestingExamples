const {Builder, By, Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function windowClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/browser-windows");

        await driver.findElement(By.id("tabButton")).click();
        
        await driver.findElement(By.id("windowButton")).click();

        await driver.findElement(By.id("messageWindowButton")).click();

    }finally{
        if(driver !=undefined){
            // driver.quit();
        }
    }
}
exports.windowClick = windowClick;