const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function selectableClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/selectable");

        await driver.findElement(By.id("verticalListContainer")).click();

    console.log("All test are passed");
   }finally{
    if(driver !=undefined){
        await driver.quit();
  
     }
   }
 }
 exports.selectableClick = selectableClick;