//const {By, Key, until, webdriver}= require("selenium-webdriver");
var webdriver =require('selenium-webdriver'),
By=webdriver.By,
until=webdriver.until,
firefox= require('selenium-webdriver/firefox');
//let firefox=new webdriver.Builder().forBrowser("firefox").build();

var Page= async function(){
    // this.driver =new Builder()
    // .forBrowser('firefox')    
    // .build(); 
    this.driver= await new webdriver.Builder().forBrowser("firefox").build();
    var driver=this.driver;
    //console.log('dsd');
    this.visit= function(theUrl){
        return driver.get(theUrl);
    }

    this.quit = function(){
        driver.quit();
    }

    this.find= function(el){
        driver.wait(until.elementLocated(By.css(el)),5000);
        return driver.findElement(By.css(el));
    }

    this.write= function(el,txt){
        return this.find(el).sendKeys(txt);
    }

    
};

module.exports= Page;