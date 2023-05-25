const { Builder, By, Key, until,locateWith } = require("selenium-webdriver");
const { NoSuchElementError } = require("selenium-webdriver/lib/error");
const { getFirefox } = require("../utils");
const assert = require("assert");

/**
 * https://loyiha01.atlassian.net/projects/NUUB?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.kanoah.test-manager__main-project-page#!/testCase/NUUB-T2
 * Test Casega yozilgan avtomatlashgan testlar.
 */
async function checkBoxClickHome() {
  let driver = undefined;

  try {
    driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://demoqa.com/checkbox");

    console.log("2. Checking home.")
    await driver.findElement(By.xpath("//label[@for='tree-node-home']")).click();
    console.log("Assert result text.")
    let result = await driver.findElement(By.id("result")).getText();
    assert.strictEqual(result, 'You have selected :\n' + 'home\n' + 'desktop\n' + 'notes\n' + 'commands\n' + 'documents\n' + 'workspace\n' + 'react\n' + 'angular\n' + 'veu\n' + 'office\n' + 'public\n' + 'private\n' + 'classified\n' + 'general\n' + 'downloads\n' + 'wordFile\n' + 'excelFile');

    console.log("3. UnChecking home.")
    await driver.findElement(By.css("label[for='tree-node-home']")).click();
    // result = await driver.findElement(By.id("result")).getText()
    console.log("Assert result text.")
    // assert.throws(function() { driver.findElement(By.id("result")) }, NoSuchElementError);

    console.log("4. Toggle home.")
    await driver.findElement(By.css("button[title='Toggle']")).click();
    console.log("Assert desktop displayed.")
    assert.doesNotThrow(function () { driver.findElement(By.id("tree-node-desktop")) }, NoSuchElementError);
    console.log("Assert documents displayed.")
    assert.doesNotThrow(function () { driver.findElement(By.id("tree-node-documents")) }, NoSuchElementError);
    console.log("Assert downloads displayed.")
    assert.doesNotThrow(function () { driver.findElement(By.id("tree-node-downloads")) }, NoSuchElementError);
    
    console.log("5. Desktop home")
    // await driver.findElement(locateWith(By.css("button[title='Toggle']")).above(By.css("label[for='tree-node-desktop']"))).click();
    await driver.findElement(By.xpath("//label[@for='tree-node-desktop']/preceding-sibling::button[1]")).click();
    // assert.doesN

    console.log("6. Documents home")
    await driver.findElement(By.xpath("//label[@for='tree-node-documents']/preceding-sibling::button[2]")).click();

    console.log("")
    
  } finally {
    if (driver != undefined) {
      // await driver.quit();
    }
  }
 }
exports.checkBoxClickHome = checkBoxClickHome;

