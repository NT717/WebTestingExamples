const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");
const { NoSuchElementError } = require("selenium-webdriver/lib/error");

async function radioButtonFill(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/radio-button");

       console.log("All tests are passed")
       await driver.findElement(By.id("yesRadio")).sendKeys(Key.SPACE);
       
       let yes = await driver.findElement(By.css(".text-success")).getText();
       assert.strictEqual(yes, "Yes")

       console.log("All tests are passed")
       await driver.findElement(By.id("impressiveRadio")).sendKeys(Key.SPACE);

       let impressive = await driver.findElement(By.css(".text-success")).getText();
       assert.strictEqual(impressive, "Impressive")

       console.log("All tests are passed");
  } finally{
   if(driver !=undefined) {
      //  await driver.quit();
   }
 }
}
exports.radioButtonFill = radioButtonFill;



// async function checkbox(){
//     let driver = undefined;

//     try{
//         driver = new Builder().forBrowser("fireFox").click();
//         await driver.get("https://demoqa.com/check-box");

//         console.log("1. Checking home")
//         await driver.findElement(By.xpath("label[@for='tree-node-home']/preceding-sibling::button[1]")).click();
//         console.log("Assert result text")
//         let result = await driver.findElement(By.id("result")).getText();
//         assert.strictEqual(result, "You have selected: \n' +  + 'home\n' + 'desktop\n' + 'notes\n' + 'commands\n' + 'documents\n' + 'workspace\n' + 'react\n' + 'angular\n' + 'veu\n' + 'office\n' + 'public\n' + 'private\n' + 'classified\n' + 'general\n' + 'downloads\n' + 'wordFile\n' + 'excelFile'")
       
//        console.log("2. Unchecking home")
//        await driver.findElement(By.css("label[for='tree-node-home']")).click();

//        console.log("3. Toggle home")
//        await driver.findElement(By.xpath("label[@for='tree-node-home")).click();
//        console.log("Assert Desktop displayed")
//        assert.DoesNotThrow (function () { driver.findElement(By.id("tree-node-desktop"))}, NoSuchElementError);
//        console.log("Assert Document displayed")
//        assert.DoesNotThrow (function () { driver.findElement(By.id("tree-node-document"))}, NoSuchElementError);
//        console.log("Assert Downloads displayed")
//        assert.DoesNotThrow (function () { driver.findElement(By.id("tree-node-downloads"))}, NoSuchElementError);

//        console.log("4. Desktop home")
//        await driver.findElement(By.xpath("label[@for='tree-node-desktop']")).click();
       
//        console.log("5. Document home")
//        await driver.findElement(By.xpath("label[@for='tree-node-Document']")).click();

//        console.log("6. WorkSpace home")
//        await driver.findElement(By.xpath("label[@for='tree-node-workspace']")).click();

//        console.log("7. Office home")
//        await driver.findElement(By.xpath("label[@for='tree-node-office']")).click();

//        console.log("8. Downloads home")
//        await driver.findElement(By.xpath("label[@for='tree-node-downloads']")).click();
       
//        console.log("9. Unchecking Downloads home")
//        await driver.findElement(By.xpath("label[@for='tree-node-downloads']")).click();
       
//        console.log("10. Unchecking Office home")
//        await driver.findElement(By.id("label[@for='tree-node-office']")).click();

//        console.log("11. Unchecking WorkSpace home")
//        await driver.findElement(By.xpath("label[@for='tree-node-workspace']")).click();

//        console.log("12. Uncheking Document home")
//        await driver.findElement(By.xpath("label[@for='tree-node-document']")).click();

//        console.log("13. Unchecking Desktop home")
//        await driver.findElement(By.xpath("label[@for='tree-node-desktop']")).click();

//        console.log("14. Unchecking home")
//        await driver.findElement(By.xpath("label[@for='tree-node-home")).click();

