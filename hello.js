const {Builder} = require("selenium-webdriver");
require("chromedriver");

(async function helloSelenium() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://selenium.dev");
    driver.sleep(90000000);

    await driver.quit();
}) ();



    // const element = By.id('linkResponse');
    // driver.wait(until.elementLocated(element));
    // const whatElement = driver.findElement(element);
    // let response = driver.wait(until.elementIsVisible(whatElement), 5000).getText();
    // await driver.findElement(By.id("created")).click();

    // let response = await waitFind(By.id('linkResponse')).getText();
    // let response = await driver.findElement(By.id("linkResponse")).getText();
    // assert.strictEqual(response, "Link has responded with staus 201 and status text Created");
        // let result = await waitFind(By.id("linkResponse")).getText();
    // assert.strictEqual(result, "Link has responded with staus 204 and status text No Content");

    // driver.actions().mouseMove(element);

