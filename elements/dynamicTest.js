const {Builder, By, Key, until,locateWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function dynamicPropertiesClick() {
    driver = undefined;

try {
 driver = new Builder().forBrowser("firefox").build();
 await driver.get("https://demoqa.com/dynamic-properties");

 
 await driver.findElement(By.id("visibleAfter")).click();

 let visibleAfter = await driver.findElement(By.id("visibleAfter")).getText();
 assert.strictEqual(visibleAfter, "Visible After 5 seconds");

 console.log("All tests are passed")
 }finally{
    if (driver !=undefined){
        // await driver.quit();
   }
  }
  }
 exports.dynamicPropertiesClick = dynamicPropertiesClick;
