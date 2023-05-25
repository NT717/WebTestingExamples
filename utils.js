const { Builder, By, Key, until } = require("./node_modules/selenium-webdriver");
const { Options, Driver } = require("./node_modules/selenium-webdriver/chrome");
function getChrome() {
    // let driver = new Builder().forBrowser("firefox").build();
    let options = new Options();
    // options.addArguments("load-extension=D:\Dev\Tools\Selenium\webdrivers\chrome_ext\extension_5_5_0_0.crx");
    options.addExtensions("D:/Dev/Tools/Selenium/webdrivers/chrome_ext/extension_5_5_0_0.crx");
    // let driver = new Driver(options);
    var driver = new Builder().setChromeOptions(options).forBrowser('chrome').build();
    return driver;
}

function getFirefox() {
    let driver = new Builder().forBrowser("firefox").build();
    return driver;
}

const waitFind = (driver, locator) => {
    return driver.findElement(async () => {
        await driver.wait(until.elementLocated(locator));
        return driver.findElement(locator);
    });
}

const findClick = async function (driver, locator) {
    let clickable = waitFind(driver, locator);
    // const actions = driver.actions({ async: true });
    // await actions.move({origin: clickable}).click().perform();
    clickable.sendKeys(Key.ENTER);
}

module.exports = { getChrome, getFirefox, waitFind, findClick };