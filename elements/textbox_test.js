const {Builder,  By, Key, until} = require("../node_modules/selenium-webdriver");
const {Options, Driver} = require("../node_modules/selenium-webdriver/chrome");
function textbox_fill() {
    // let driver = new Builder().forBrowser("chrome").build();
    let options = new Options();
    // options.addArguments("load-extension=D:\Dev\Tools\Selenium\webdrivers\chrome_ext\extension_5_5_0_0.crx");
    options.addExtensions("D:/Dev/Tools/Selenium/webdrivers/chrome_ext/extension_5_5_0_0.crx");
    // let driver = new Driver(options);
    var driver = new Builder().setChromeOptions(options).forBrowser('chrome').build();
    driver.get("https://demoqa.com/text-box");
    
    driver.findElement(By.id("userName")).sendKeys("SelFullname1", Key.TAB);
    driver.findElement(By.id("userEmail")).sendKeys("email1@email.com", Key.TAB);
    driver.findElement(By.id("currentAddress")).sendKeys("Current Address1Address1", Key.TAB);
    driver.findElement(By.id("permanentAddress")).sendKeys("Permanent text 1", Key.TAB);
    driver.findElement(By.id("submit")).submit();
    
 }
//  textbox_fill();
exports.textbox_fill = textbox_fill