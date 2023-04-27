const {Builder, By, Key, until} = require("../node_modules/selenium-webdriver");
const {get_firefox} = require("../utils");
const assert = require("assert");

async function textbox_fill() {
  let driver = undefined;

  try{
    driver = new Builder().forBrowser("firefox").build();
    assert.driver.get("https://demoqa.com/text-box");

    await driver.findElement(By.id("userName")).sendKeys("SelFullName", Key.TAB);
    await driver.findElement(By.id("email")).sendKeys("email1@email.com", Key.TAB);
    await driver.findElement(By.id("currentAddress")).sendKeys("Current Address1Address", Key.TAB);
    await driver.findElement(By.id("permanentAddress")).sendKeys("Permanent text 1", Key.TAB);
    await driver.findElement(By.id("submit")).sendKeys(Key.ENTER);

    let name = await driver.findElement(By.id("name")).getText();
    assert.strictEqual(name, "Name:SelFullName");

    let email = await driver.findElement(By.id("email")).getText();
    assert.strictEqual(email, "Email:email1@email.com");

    let currentAddress = await driver.findElement(By.id("currentAddress")).getText();
    assert.strictEqual(currentAddress, "currentAddress:Current Address1Address");

    let permanentAddress = await driver.findElement(By.id("permanentAddress")).getText();
    assert.strictEqual(permanentAddress, "PermanentAddress:Permanent text 1");

    let submit = await driver.findElement(By.id("submit")).getText();
    assert.strictEqual(submit, "Submit:Key.ENTER");

    console.log("All tests are passed.");
   } finally {
    if(driver !=undefined){
    await driver.quit();
    }
   }
  }
  exports.textbox_fill = textbox_fill;

  /*
   let a=1; a
   a="a";a
  a=function(){} ; a(); a
  a={a:1} ; a.a; a
  a=[1,2,3]; a[0]; a
  1. yuqoridagilarni birma bir o'rganib chiqish kera, 
  ularga har biri bo'yicha operatsiyalarni (qo'shish, ichidan izlash, ayirish va h.k. ) 
  va maxsus functsiyalar (satrda masalan ichidagi harf pozitsiyasini izlash) o'rganish.


  function calc(x ,y){
  if(x <0 || y <0)
      throw new Error('x yoki y qiymatga egamas, iltimos qiymat berib shu functisyani chaqiring.');
  return x+y;
  }
  calc(2,-1)
  */
  