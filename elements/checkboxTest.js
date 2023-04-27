const { Builder, By, Key, until } = require("selenium-webdriver");
const { NoSuchElementError } = require("selenium-webdriver/lib/error");
const { getFirefox } = require("../utils");
const assert = require("assert");

async function checkBoxClickHome() {
  let driver = undefined;

  try {
    driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://demoqa.com/checkbox");

    console.log("Checking home.")
    await driver.findElement(By.xpath("//label[@for='tree-node-home']")).click();
    console.log("Assert result text.")
    let result = await driver.findElement(By.id("result")).getText();
    assert.strictEqual(result, 'You have selected :\n' + 'home\n' + 'desktop\n' + 'notes\n' + 'commands\n' + 'documents\n' + 'workspace\n' + 'react\n' + 'angular\n' + 'veu\n' + 'office\n' + 'public\n' + 'private\n' + 'classified\n' + 'general\n' + 'downloads\n' + 'wordFile\n' + 'excelFile');
    
    console.log("UnChecking home.")
    await driver.findElement(By.css("label[for='tree-node-home']")).click();
    // result = await driver.findElement(By.id("result")).getText()
    console.log("Assert result text.")
    assert.throws(() => { driver.findElement(By.id("result")) }, NoSuchElementError);

  } finally {
    if (driver != undefined) {
      // await driver.quit();
    }
  }
}
exports.checkBoxClickHome = checkBoxClickHome;

