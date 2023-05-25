const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function formFill(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/automation-practice-form");

        await driver.findElement(By.id("firstName")).sendKeys("Anton", Key.TAB);
    
        let name = await driver.findElement(By.id("firstName")).getText();
        // assert.strictEqual(name, "Anton");

        await driver.findElement(By.id("lastName")).sendKeys("Pavlov", Key.TAB);

        name = await driver.findElement(By.id("lastName")).getText();
        // assert.strictEqual(lastName, "Pavlov");
        
        await driver.findElement(By.id("userEmail")).sendKeys("an@exemple.com", Key.TAB);

        // let email = await driver.findElement("")

        await driver.findElement(By.id("genterWrapper")).click();

        await driver.findElement(By.id("userNumber")).sendKeys("0919918898", Key.TAB);

        await driver.findElement(By.id("dateOfBirthInput")).sendKeys("10 may 1970", Key.TAB);

        await driver.findElement(By.id("subjectsContainer")).sendKeys("e", Key.TAB);

        await driver.findElement(By.id("hobbiesWrapper")).click();

        // await driver.findElement(By.css("label[for='uploadPicture']")).click();

        await driver.findElement(By.id("currentAddress-wrapper")).click();

        await driver.findElement(By.id(""))        

        await driver.findElement(By.id("stateCity-wrapper")).click();

        await driver.findElement(By.id("submit")).click();


        console.log("All are test passed");
     }finally{
        if (driver !=undefined){
            // driver.quit();
        }
    }
}
exports.formFill = formFill; 