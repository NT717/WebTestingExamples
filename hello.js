const {Builder} = require("selenium-webdriver");
require("chromedriver");

(async function helloSelenium() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://selenium.dev");
    driver.sleep(90000000);

    await driver.quit();
}) ();


