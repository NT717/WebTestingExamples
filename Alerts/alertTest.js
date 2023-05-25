const {Builder, By, Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function alertClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/alerts");

        await driver.findElement(By.id("alertButton")).click();

        // await driver.findElement(By.id("timerAlertButton")).click();

        // await driver.findElement(By.id("confirmButton")).click();

        // await driver.findElement(By.id("promtButton")).click();


    }finally{
        if (driver !=undefined){
            // driver.quit()
        }
    }
}
exports.alertClick = alertClick;