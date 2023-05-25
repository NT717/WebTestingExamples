const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function listClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/sortable");

        await driver.findElement(By.className("list-group-item list-group-item-action")).click();
    
    console.log("All test are passed")
    }finally{
        if (driver !=undefined){
          // await driver.quit();
        }
    }
}
exports.listClick = listClick;
