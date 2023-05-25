const {Builder, By, Key, until} = require("selenium-webdriver");
const {firefox} = require("../utils");
const assert = require("assert");

async function buttonsClick(){
     let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/buttons");

        // console.log("First test passe")
        // await driver.findElement(By.xpath("//button[@id='doubleClickBtn']")).click();
        
        // let message = await driver.findElement(By.id("doubleClickMessage")).getText();
        // assert.strictEqual(message, "You have done a double click");

        await driver.findElement(By.css("button[id='rightClickBtn']")).click();

        message = await driver.findElement(By.id("rightClickMessage")).getText();
        assert.strictEqual(message, "You have done a right click");

        // await driver.findElement(By.xpath("p[@id='dynamicClickMessage']/preceding-sibling::button[1]")).click();
        
        // phrase = driver.findElement(By.id("dynamicClickMessage")).getText();
        // assert.strictEqual(phrase, "You have done a dynamic click");

    console.log("All test are passed");
    }finally{
        if(driver !=undefined){
            // await driver.quit();

        }
    }
}
exports.buttonsClick = buttonsClick;