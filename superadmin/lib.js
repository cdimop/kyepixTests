async function setField(driver,field,inp){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await driver.findElement(By.id(field)).click();
    await erase(driver,field);
    await driver.findElement(By.id(field)).sendKeys(inp);  
}
async function setFieldCss(driver,field,inp){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await driver.findElement(By.css(field)).click();
    await erase(driver,field);
    await driver.findElement(By.css(field)).sendKeys(inp);  
}
async function clikId(driver,field){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await driver.findElement(By.id(field)).click();    
}

async function clikCss(driver,field){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await driver.findElement(By.css(field)).click();    
}

async function clikClassName(driver,field){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await driver.findElement(By.className(field)).click();    
}
async function erase(driver,field){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await driver.findElement(By.id(field)).sendKeys(Key.CONTROL,'a');    
    await driver.findElement(By.id(field)).sendKeys(Key.BACK_SPACE);
    //await driver.sleep(1500);
};

async function clikXpath(driver,field){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await driver.findElement(By.xpath(field)).click();    
}

async function getValueCss(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    return await driver.findElement(By.css(tag)).getText();    
}

async function getValueId(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");    
    return await driver.findElement(By.id(tag)).getAttribute('value');      
}
async function getTextId(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");    
    return await driver.findElement(By.id(tag)).getText();      
}

async function getTextXpath(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");    
    return await driver.findElement(By.xpath(tag)).getText();      
}
async function getTextClassName(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");    
    return await driver.findElement(By.className(tag)).getText();      
}


async function isEnabledBtn(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");    
    return await driver.findElement(By.id(tag)).isEnabled();          
}
async function isEnabledBtnClassName(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");    
    return await driver.findElement(By.className(tag)).isEnabled();          
}
async function isEnabledBtnCss(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");    
    return await driver.findElement(By.css(tag)).isEnabled();   
       
}
//for null output, returns 'false' (field is clickable)
async function isEnabledField(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");  
    let temp1=await driver.findElement(By.id(tag)).getAttribute('aria-disabled');
    // console.log('!!'+temp1)
    if(temp1=='true'){
        temp1='false';
    }else if(temp1==null){
        temp1='true';
    };
    return temp1;
}

async function isVisible(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver");  
    return await driver.findElement(By.css(tag)).isDisplayed();
}
async function isVisible1(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver"); 
    try{
        return await driver.findElement(By.css(tag)).isDisplayed();
       //return true;
    } catch (NoSuchElementException){
        return false;
    }
    //return await driver.findElement(By.css(tag)).isDisplayed();
}
//css tag
async function btnEnabled(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver"); 
    try{
        await driver.findElement(By.css(tag)).click();
        return true;
    }catch(err){
        return false;
    }
}

async function fieldEnabled(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver"); 
    try{
        await driver.findElement(By.id(tag)).click();
        return true;
    }catch(err){
        return false;
    }
}

async function fieldEnabledXpath(driver,tag){
    const {Builder, By, Key, until}= require("selenium-webdriver"); 
    try{
        await driver.findElement(By.xpath(tag)).click();
        return true;
    }catch(err){
        return false;
    }
}



module.exports={getTextClassName,isEnabledBtnCss,getTextXpath,fieldEnabledXpath,
    fieldEnabled,btnEnabled,isVisible1,isVisible,isEnabledField,isEnabledBtn,
    getTextId,clikCss,clikId,clikXpath,setField,erase,getValueCss,getValueId,
    isEnabledBtnClassName,clikClassName,setFieldCss
}