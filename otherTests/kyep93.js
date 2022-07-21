var {Builder, By, Key, until, Browser}= require("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();
const toLogIn = require("../superadmin/firstPage");
const logInPage= require('../superadmin/logInPage');
const saFPage=require("../superadmin/saFirstPage");
const lib=require("../superadmin/lib");
const ofs=require("../superadmin/offices");
const d=require("../superadmin/data");
const noPage=require("../superadmin/newOfficePage");
var driver;
var sA=500;
var sAA=10000;
sll=100;
var tit,title,el,temp;

//DATA
//for office name
var office='ΓΡΑΦΕΙΟ ΦΙΛΙΑΤΡΩΝ';

describe('kyepix93 test scenario', function(){
    //this.timeout(10000);
    this.beforeAll(async function(){
        //needs a check a new set of the status in the edit office page
        //DATA(.d) MUST HAVE BEEN CREATED
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
        await lib.clikId(driver,saFPage.fPLocs.offices);
        tit = await lib.getValueCss(driver,ofs.ofLocs.o_title);
        await tit.should.equal('Διαχείριση Γραφείων ΚΥΕΠΙΧ');
        await driver.sleep(sA);
        //await lib.clikXpath(driver,'/html/body/div[1]/div/div/div/div/div/div/div[2]/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div[2]');
        //await driver.sleep(sA);
        tit=await ofs.locateShortBy(driver,'Σύνολο Αιτήσεων','desc');
        await tit.should.equal(true); 
    })

    it('Test2. Click publish button in a public availiable office' ,async function(){
        //search for a p availiable office
        
        // ofs.search(driver,office,null,1);
        // await driver.sleep(sA);
        // tit=1;
        tit=await ofs.findNumList(driver,office)
        //console.log(tit);
        //await driver.sleep(sAA);
        await ofs.clickPublishBtn(driver,tit);
        await driver.sleep(sA*2);
        
    })
    it('TestRes2. test the short "σύνολα αιτήσεων",desc' ,async function(){
        await ofs.checkAlertClickPublishBtn(driver);        
    })

    it('Test3 Superadmin denies the change in the public availiability',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageAlertNo);
        // await driver.sleep(sA);
    })

    it('TestRes3 System displays the office page',async function(){
        tit = await lib.getValueCss(driver,ofs.ofLocs.o_title);
        await tit.should.equal('Διαχείριση Γραφείων ΚΥΕΠΙΧ');
        await driver.sleep(sA);
        //await lib.clikXpath(driver,'/html/body/div[1]/div/div/div/div/div/div/div[2]/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div[2]');
        //await driver.sleep(sA);
        // tit=await ofs.locateShortBy(driver,'Σύνολο Αιτήσεων','desc');
        // await tit.should.equal(true);
    })

    it('Test4. Click publish button in a public availiable office' ,async function(){        
        tit=await ofs.findNumList(driver,office)
        //console.log(tit);
        //await driver.sleep(sAA);
        await ofs.clickPublishBtn(driver,tit);
        //await driver.sleep(sA);        
    })
    it('TestRes4. test the short "σύνολα αιτήσεων",desc' ,async function(){
        await ofs.checkAlertClickPublishBtn(driver);        
    })

    it('Test5 Superadmin accepts the change in the public availiability',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageAlertYes);
        // await driver.sleep(sA);
    })

    it('TestRes5.3 System displays a notification',async function(){
        title = await lib.getValueId(driver,ofs.ofLocs.o_snackbar);        
        await title.should.equal("Το γραφειο ΚΥΕΠΙΧ "+office+" ειναι διαθεσιμο στο κοινο");
        
    })

    it('TestRes5.2 System redirects on the office page',async function(){
        title = await lib.getValueCss(driver,ofs.ofLocs.o_title);
        await title.should.equal('Διαχείριση Γραφείων ΚΥΕΠΙΧ');
        

        //await lib.clikXpath(driver,'/html/body/div[1]/div/div/div/div/div/div/div[2]/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div[2]');
        //await driver.sleep(sA);
        // title=await ofs.locateShortBy(driver,'Σύνολο Αιτήσεων','desc');
        // await title.should.equal(true);
    })
    it('TestRes5.1 Check tha public availiability have changed',async function(){
        await ofs.checkPAvailChange(driver,office,'ΜΗ ΔΙΑΘΕΣΙΜΟ');
    })

    















});