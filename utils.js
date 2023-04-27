const {Builder,  By, Key, until} = require("./node_modules/selenium-webdriver");
const {Options, Driver} = require("./node_modules/selenium-webdriver/chrome");
function getChrome() {
    // let driver = new Builder().forBrowser("firefox").build();
    let options = new Options();
    // options.addArguments("load-extension=D:\Dev\Tools\Selenium\webdrivers\chrome_ext\extension_5_5_0_0.crx");
    options.addExtensions("D:/Dev/Tools/Selenium/webdrivers/chrome_ext/extension_5_5_0_0.crx");
    // let driver = new Driver(options);
    var driver = new Builder().setChromeOptions(options).forBrowser('chrome').build();
    return driver;
}

function getFirefox(){
    let driver = new Builder().forBrowser("firefox").build();
    return driver;
}


exports.getChrome = getChrome;
exports.getFirefox = getFirefox;