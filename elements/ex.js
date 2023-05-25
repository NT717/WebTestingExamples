const {Builder, By, Key, until, locatWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");
const { textboxFill } = require("./textboxTest");

async function textboxFill(){
  let driver = undefined;

  try{
    driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://demoqa.com/text-box");

    await driver.findElement(By.id("userName")).sendKeys("Jony", Ker.TAB);
    await driver.findElement(By.id("userEmail")).sendKeys("email1@gmail.com", Key.TAB);
    await driver.findElement(By.id("currentAddress")).sendKeys("currentAddress1Address1", Key.TAB);
    await driver.findElement(By.id("permanentAddress")).sendKeys("Permanent text 1", Key.TAB);

    let name = await driver.findElement(By.id("name")).getText();
    assert.strictEqual(name, "Jony");
  
    let email = await driver.findElement(By.id("email")).getText();
    assert.strictEqual(email, "email1@gmail.com");

    let address = await driver.findElement(By.id("currentAddress")).getText();
    assert.strictEqual(address, "currentAddress1Address1");

    let permanentAddress = await driver.findElement(By.id("permanentAddress")).getText();
    assert.strictEqual(permanentAddress, "Permanent text 1");

    console.log("All test are passed");
  }finally{
    if(driver !=undefined){
      await driver.quit();
    }
  }
}
exports.textboxFill = textboxFill;