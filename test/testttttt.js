var {Builder, By, Key, until, Browser}= require("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();
const toLogIn = require("../superadmin/firstPage");
const logInPage= require('../superadmin/logInPage');
const saFPage=require("../superadmin/saFirstPage");
const lib=require("../superadmin/lib");
const uPage=require("../superadmin/usersPage");
const { expect } = require("chai");
var driver;
var sA=500;
var sAA=8000;
var tit,title,el,temp;

describe('kyepix120 test scenario', function(){
    //this.timeout(10000);
    this.beforeAll(async function(){
        
        const {Builder, By, Key, until}= require("selenium-webdriver");
        driver=await new Builder().forBrowser("firefox").build();  
        await driver.get("https://admin.kyepix-stage.opencluster.eu/welcome-user");
        await driver.manage().window().maximize();
        await driver.sleep(sA);        
        //return driver;
    })

    it('Preconditions: log-in',async function(){
        await toLogIn.preLogIn(driver);  
        await driver.sleep(sA);  
        await logInPage.logIn(driver,'kdimopoulos@knowledge.gr','test1234');
        await driver.sleep(2*sA);
        
    })
    it('Test2. click new office button new office page' ,async function(){
        await saFPage.usersManag(driver);
        await driver.sleep(sA);
    })

    it('Test3. check user tab' ,async function(){
        await uPage.checkUserTab(driver,'Χρήστες γραφείων');
    })

    it('test4', async function(){
        await uPage.checkSearchField(driver,'','','Όλοι','Όλες');
    })

    it('test5', async function(){
        await uPage.checkTexts(driver);
    })
    


})