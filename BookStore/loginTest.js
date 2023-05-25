const {Builder,By,Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function loginFill(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/login");

        await driver.findElement(By.id("userName")).sendKeys("toni", Key.TAB);

        await driver.findElement(By.id("password")).sendKeys("toniMoni9899", Key.TAB);
    
        // await driver.findElement(By.css("button[id='login']")).click();

        await driver.findElement(By.css("button[id='newUser']")).click();

        await driver.findElement(By.id("firstname")).sendKeys("Antoin", Key.TAB);

        await driver.findElement(By.id("lastname")).sendKeys("Grizman", Key.TAB);

        await driver.findElement(By.id("userName")).sendKeys("Antoin", Key.TAB);

        await driver.findElement(By.id("password")).sendKeys("antoingriz", Key.TAB);

        await driver.findElement(By.css("button[id='gotologin']")).click();

    console.log("All are test passed");
    }finally{
        if (driver !=undefined){
            // driver.quit();
        }
    }
}
exports.loginFill = loginFill;
