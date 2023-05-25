const {Builder,By, Key } = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function buttonsClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/modal-dialogs");

        await driver.findElement(By.id("showSmallModal")).click();

        await driver.findElement(By.id("showLargeModal")).click();

    }finally{
        if (driver !=undefined){
            // driver.quit();
        }
    }
}
exports.buttonsClick = buttonsClick;