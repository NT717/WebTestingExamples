const { Builder, By, Key, until,locateWith, JavascriptExecutor } = require("selenium-webdriver");
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
    await driver.findElement(By.xpath("//label[@for='tree-node-documents']/preceding-sibling::button[1]")).click();
    
    console.log("7. WorkSpace home")
    await driver.findElement(By.xpath("//label[@for='tree-node-workspace']/preceding-sibling::button[1]")).click();

    console.log("8. unChecking WorkSpace home")
    await driver.findElement(By.xpath("//label[@for='tree-node-workspace']/preceding-sibling::button[1]")).click();

    console.log("9. unChecking Documents home")
    await driver.findElement(By.xpath("//label[@for='tree-node-documents']/preceding-sibling::button[1]")).click();
    
    console.log("10. unChecking Desktop home");
    await driver.findElement(By.xpath("//label[@for='tree-node-desktop']/preceding-sibling::button[1]")).click();

    console.log("11. unChecking Toggle home")
    await driver.findElement(By.css("button[title='Toggle']")).click();
    
    // console.log("8. Office home")
    // await driver.findElement(By.xpath("//label[@for='tree-node-office']/preceding-sibling::button[1]")).click();

    // console.log("9. Downloads home")
    // let downloads = await driver.findElement(By.xpath("//label[@for='tree-node-downloads']/preceding-sibling::button[1]"));
    // await driver.actions().scroll(0, 0, 0, 0, downloads).perform()
    // JavascriptExecutor. jse = (JavascriptExecutor)driver;
    // jse.executeScript("window.scrollBy(0,250)");
    // driver.findElement(By.css("body")).sendKeys(Key.CONTROL, Key.END);
    // // downloads.sendKeys(Key.END);
    // driver.executeScript("window.scrollBy(0,250)");
    // driver.executeScript("scroll(0, 250);");
    // driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    // driver.then(function(){
    //   driver.executeScript("alert('hi');");
    
    // })
    // await downloads.click();
    // console.log("10. Collapse all home")
    // await driver.findElement(By.xpath("//button[@title='collapse all']")).click();

  } finally {
    if (driver != undefined) {
      // await driver.quit();
    }
   }
 }
exports.checkBoxClickHome = checkBoxClickHome;

