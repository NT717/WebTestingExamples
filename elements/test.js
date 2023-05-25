const {Builder, By, Key, until, locateWith, javaScript} = require("selenium-webdriver");
// const {NoSuchElementError} = require("selenium-webdriver/lib/error");
const {getFirefox} = require("../utiles");
const {assert} = require("assert")

async function textboxFill() {
    let driver = undefined;

try {
    driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://demoqa.com/check-box");

    console.log("All tests are passed")
    await driver.findElement(By.id("userName")).sendKeys("Jean Pierre", Key.TAB);
    await driver.findElement(By.id("userEmail")).sendKeys("jp@gmail.com", Key.TAB);
    await driver.findElement(By.id("courrentAddress")).sendKeys("Courrent Address1Address1",Key.TAB);
    await driver.findElement(By.id("permanentAddress")).sendKeys("Permanent Text 1",Key.TAB);
    await driver.findElement(By.id("submit")).sendKeys(Key.ENTER);

    let name = await driver.findElement(By.id("name")).getText();
    assert.stricEqual(name, "Name:Jean Pierre");

    let email = await driver.findElement(By.id("email")).getText();
    assert.stricEqual(email, "Email:jp@gmail.com");

    let courrenAddress = await driver.findElement(By.id("courrentAddress")).getText();
    assert.stricEqual(courrenAddress, "CourrentAddress:Courrent Address1Address1");

    let permanentAddress = await driver.findElement(By.id("permanentAddress")).getText();
    assert.stricEqual(permanentAddress, "PermanentAddress:Permanent Text 1");

    let submit = await driver.findElement(By.id("submit")).getText();
    assert.stricEqual(submit, "Submit: ENTER");

    console.log("All tests are passed");
  }finally{
    if(driver !=undefined){
        await driver.quit();
    }
   }
  }