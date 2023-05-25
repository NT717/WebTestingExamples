const {Builder, By, Key, until, locateWith} = require("selenium-webdriver");
const {getFirefox} = require("../utils");
const assert = require("assert");





async function webtablesFill() {

    try {
    driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://demoqa.com/webtables");

    console.log("All test are passed")
    await driver.findElement(By.xpath("//button[@id='addNewRecordButton']")).sendKeys(Key.SPACE);

    // let registrationForm = await driver.findElement(By.id("registration-form-modal")).getText();
    // console.log(registrationForm);
    // assert.strictEqual(registrationForm, "Registration Form");

    console.log("All tests are passed")
    await driver.findElement(By.id("firstName")).sendKeys("Jean");
    console.log("All tests are passed")
    await driver.findElement(By.id("lastName")).sendKeys("Pierre");
    console.log("All tests are passed")
    await driver.findElement(By.id("userEmail")).sendKeys("js@gmail.com");
    console.log("All tests are passed")
    await driver.findElement(By.id("age")).sendKeys("50");
    console.log("All tests are passed")
    await driver.findElement(By.id("salary")).sendKeys("10000");
    console.log("All tests are passed")
    await driver.findElement(By.id("department")).sendKeys("Developer");
    console.log("All tests are passed")
    await driver.findElement(By.id("submit")).sendKeys(Key.SPACE);

    let name = await driver.findElement(By.id("firstName")).getText();
    assert.strictEqual(name, "Jean");

    let lastName = await driver.findElement(By.id("lastName")).getText();
    assert.strictEqual(lastName, "Pierre");

    let email = await driver.findElement(By.id("userEmail")).getText();
    assert.strictEqual(email, "js@gmail.com");

    let age = await driver.findElement(By.id("age")).getText();
    assert.strictEqual(age, "50");

    let salary = await driver.findElement(By.id("salary")).getText();
    assert.strictEqual(salary, "10000");
    
    let departement = await driver.findElement(By.id("departement")).getText();
    assert.strictEqual(departement, "Developer");

    let submit = await driver.findElement(By.id("submit")).getText();
    assert.strictEqual(submit, "Submit");



    console.log("All tests are passed")
   } finally {
        if(driver !=undefined){
            // await driver.quit()
      }
    }
   }

  // async function webtablesDelete() {
  //   let driver = undefined;

  //   try{
  //     driver = new Builder().forBrowser("firefox").build();
  //     await driver.get("https://demoqa.com/webtables");
      
  //     await driver.findElement(By.id("delete-record-4")).click();


  //   }finally{
  //     if(driver !=undefined){
  //       // driver.quit();
  //     }
  //   }
  // }
  

   //  async function webtablesEdit(){
 

  //   try {
  //     await webtablesFill();
  //     await driver.findElement(By.id("edit-record-4")).sendKeys("edit", Key.TAB);

  //     let field = await driver.findElement(By.id("firstName"));
  //     await field.clear();
  //     await field.sendKeys("Jean");
      
  //     }finally{
  //     if(driver !=undefined){
  //     //  await driver.quit();
  //     }
  //   }
  //  }
   exports.webtablesFill = webtablesFill;
  //  exports.webtablesEdit = webtablesEdit;
  // exports.webtablesDelete = webtablesDelete;