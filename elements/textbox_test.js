const {Builder,  By, Key, until} = require("../node_modules/selenium-webdriver");
const {get_firefox} = require("../utils");
const assert = require("assert");
async function textbox_fill() {
    let driver = undefined;
    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/text-box");
        
        await driver.findElement(By.id("userName")).sendKeys("SelFullname1", Key.TAB);
        await driver.findElement(By.id("userEmail")).sendKeys("email1@email.com", Key.TAB);
        await driver.findElement(By.id("currentAddress")).sendKeys("Current Address1Address1", Key.TAB);
        await driver.findElement(By.id("permanentAddress")).sendKeys("Permanent text 1", Key.TAB);
        await driver.findElement(By.id("submit")).sendKeys(Key.ENTER);
       
        let name = await driver.findElement(By.id("name")).getText();
        assert.strictEqual(name, "Name:SelFullname1");

        console.log("All tests are passed.");
    } finally{
        if (driver != undefined){
             await driver.quit()
        }

    }
    

 }
//  textbox_fill();
exports.textbox_fill = textbox_fill