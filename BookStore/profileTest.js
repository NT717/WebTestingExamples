const {Builder, By, Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function loginClick(){
     let driver = undefined;

     try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/profile");

        await driver.findElement(By.xpath("//label[@id='notLoggin-label']")).click();

        console.log("All are test passed");
     }finally{
        if (driver !=undefined){
            // driver.quit();
        }
    }
}
exports.loginClick = loginClick;