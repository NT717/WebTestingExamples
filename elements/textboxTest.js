const {Builder,  By, Key, until} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");
async function textboxFill() {
    let driver = undefined;
    
    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/text-box");
        
        await driver.findElement(By.id("userName")).sendKeys("SelFullname1", Key.TAB);
        await driver.findElement(By.id("userEmail")).sendKeys("email1@gmail.com", Key.TAB);
        await driver.findElement(By.id("currentAddress")).sendKeys("Current Address1Address1", Key.TAB);
        await driver.findElement(By.id("permanentAddress")).sendKeys("Permanent text 1", Key.TAB);
        await driver.findElement(By.id("submit")).sendKeys(Key.ENTER);
       
        let name = await driver.findElement(By.id("name")).getText();
        assert.strictEqual(name, "Name:SelFullname1");

        let email = await driver.findElement(By.id("email")).getText();
        assert.strictEqual(email, "Email:email1@gmail.com");

        let currentAddress = await driver(By.id("currentAddress")).getText();
        assert.strictEqual(currentAddress, "Current Address:Current Address1Address1");

        // asserts
        let permanentAddress = await driver(By.id("permanentAddress")).getText();
        assert.strictEqual(permanentAddress, "permanentAddress: Permanent text 1"); 

        let submit = await driver.findElement(By.id("submit")).getText();
        assert.strictEqual(submit, "Submit:ENTER");

        console.log("All tests are passed.");
    } finally {
        if (driver != undefined){
            //  await driver.quit() 
        
    }
  }
}
 //  textboxFill();
 exports.textboxFill = textboxFill;