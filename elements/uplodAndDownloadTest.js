const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox, waitFind, findClick} = require("../utils");
const assert  = require("assert");

// const assertStatusText = async function(driver, expectedText){
//    driver.wait(until.elementTextIs(waitFind(driver, By.id("uploadAndDownloadResponse"),expectedText),5000));
// }

async function uploadAndDownloadSubmit(){
   let driver = undefined;

   try{
      driver = await new Builder().forBrowser("firefox").build();
      await driver.get("https://demoqa.com/upload-download");
  
   await driver.findElement(By.id("downloadButton")).click();
   // await driver.findElement(By.id("uploadFile")).click

   // await driver.findElement(By.id("simpleFile(1)-upload")).sendKey("simpleFile(1).jpeg");
   // await driver.findElement(By.id("simpleFile(1)-submit")).submit();

   // driver.getPageSource().then(result => {
   //    if (result.indexOf("simpleFile(1)-uploaded!")){
   //       console.log("file upload success")
   //    }else{
   //       console.log("file upload non successful")
   //    }
   // });
   }

   
  }finally{
   if (driver !=undefined){
      await driver.quit();
   }
  }

 exports.uploadAndDownloadSubmit = uploadAndDownloadSubmit;