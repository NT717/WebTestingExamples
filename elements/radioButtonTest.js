const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function radioButtonSPACE() {
driver = undefined;

try{
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://demoqa.com/radio-button");

    
    await driver.findElement(By.xpath("//input[@id='yesRadio']")).sendKeys(Key.SPACE);
    
    let message = await driver.findElement(By.className("text-success")).getText();
    assert.strictEqual(message, "Yes");

    console.log("Checking Impressive radio-button");
    await driver.findElement(By.xpath("//input[@id='impressiveRadio']")).sendKeys(Key.SPACE);
    
    message = await driver.findElement(By.className("text-success")).getText();
    assert.strictEqual(message, "Impressive"); 
    
    console.log("All tests are passed");
  } finally {
    if(driver !=undefined) {
        // await driver.quit()
     }
    }
   }
   exports.radioButtonSPACE = radioButtonSPACE;

