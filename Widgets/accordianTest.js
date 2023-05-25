const {Builder, By, Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function accordianClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/accordian");

        await driver.findElement(By.id("section1Heading")).click();

        await driver.findElement(By.id("section2Heading")).click();

        await driver.findElement(By.id("section3Heading")).click();

    }finally{
        if (driver !=undefined){
            // driver.quit();
        }
    }
}
exports.accordianClick = accordianClick;