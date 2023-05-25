const {Builder, By, Key} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");

async function bookStoreClick(){
    let driver = undefined;

    try{
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("https://demoqa.com/books");

        await driver.findElement(By.id("see-book-Git Pocket Guide")).click();

        await driver.findElement(By.css("button[id='addNewRecordButton']")).click();

    }finally{
        if (driver !=undefined){
            // driver.quit();
        }
    }
}
exports.bookStoreClick = bookStoreClick;