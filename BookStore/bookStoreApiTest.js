const {Builder, By, Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function bookStoreApiClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/swagger/");

        await driver.findElement(By.id("operations-Account-AccountV1AuthorizedPost")).click();

        await driver.findElement(By.id("operations-Account-AccountV1GenerateTokenPost")).click();

        await driver.findElement(By.id("operations-Account-AccountV1UserPost")).click();

        await driver.findElement(By.id("operations-Account-AccountV1UserByUserIdDelete")).click();

        await driver.findElement(By.id("operations-Account-AccountV1UserByUserIdGet")).click();

        await driver.findElement(By.id("operations-BookStore-BookStoreV1BooksGet")).click();

        await driver.findElement(By.id("operations-BookStore-BookStoreV1BooksPost")).click();

        await driver.findElement(By.id("operations-BookStore-BookStoreV1BooksPost")).click();

        await driver.findElement(By.id("operations-BookStore-BookStoreV1BooksDelete")).click();
        
        await driver.findElement(By.id("operations-BookStore-BookStoreV1BookGet")).click();

        await driver.findElement(By.id("operations-BookStore-BookStoreV1BookDelete")).click();

        await driver.findElement(By.id("operations-BookStore-BookStoreV1BooksByISBNPut")).click();

        await driver.findElement(By.id("model-LoginViewModel")).click();

        console.log("All are test passed");
    }finally{
        if (driver !=undefined){
            // driver.quit();
        }
    }
}
exports.bookStoreApiClick = bookStoreApiClick;