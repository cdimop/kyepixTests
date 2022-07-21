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
var sAA=1000;
sll=100;
var tit,title,el,temp;

describe('kyepix91 test scenario', function(){
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
    })
    
    it('TestRes2a1. test the short "σύνολα αιτήσεων",desc' ,async function(){
        const {Builder, By, Key, until}= require("selenium-webdriver");
        await driver.sleep(sA);
        //await lib.clikXpath(driver,'/html/body/div[1]/div/div/div/div/div/div/div[2]/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div[2]');
        //await driver.sleep(sA);
        tit=await ofs.locateShortBy(driver,'Σύνολο Αιτήσεων','desc');
        await tit.should.equal(true);        
    })

    it('TestRes2a2. Test if the short works correctly ',async function(){
        
        tit=await ofs.checkShort(driver,'Σύνολο Αιτήσεων','desc');
        await tit.should.equal(true);  
    })
    it('TestRes2b. check the new office button ',async function(){        
        tit=await lib.isEnabledBtnCss(driver,ofs.ofLocs.o_newOffBtn);
        await tit.should.equal(true);  
        tit=await lib.getValueCss(driver,ofs.ofLocs.o_newOffBtn);
        await tit.should.equal('Δημιουργήστε νέο γραφείο ΚΥΕΠΙΧ');
    })

    it('TestRes2c. check the name search field title',async function(){        
        tit=await lib.getValueCss(driver,ofs.ofLocs.o_searchKyepixNameTitle);
        await tit.should.equal('Όνομα ΚΥΕΠΙΧ');
    })

    it('TestRes2d. check the status search field title ',async function(){        
        tit=await lib.getValueCss(driver,ofs.ofLocs.o_searchStatusTitle);
        await tit.should.equal('Κατάσταση');
    })
    it('TestRes2e. check the status search field title ',async function(){        
        tit=await lib.getValueCss(driver,ofs.ofLocs.o_searchPublicAvTitle);
        await tit.should.equal('Διαθέσιμο στο κοινό');
    })

    it('TestRes2f. check the search button ',async function(){  
        tit=await lib.getValueCss(driver,ofs.ofLocs.o_searchBtn);
        await tit.should.equal('Αναζήτηση');
    })
    it('TestRes2g. check the id column title',async function(){  
        tit=await lib.getTextXpath(driver,ofs.ofLocs.o_listIdTitle)
        await tit.should.equal('id');
    })
    it('TestRes2h. check the Kyepix name column title',async function(){  
        tit=await lib.getTextXpath(driver,ofs.ofLocs.o_listNameTitle)
        await tit.should.equal('Όνομα ΚΥΕΠΙΧ');
    })
    it('TestRes2i. check the status column title',async function(){  
        tit=await lib.getTextXpath(driver,ofs.ofLocs.o_listStatusTitle)
        await tit.should.equal('Κατάσταση');
    })
    it('TestRes2j. check the public availiability column title',async function(){  
        tit=await lib.getTextXpath(driver,ofs.ofLocs.o_listPubAvTitle)
        await tit.should.equal('Διαθέσιμο στο Κοινό');
    })
    it('TestRes2k. check the users number column title',async function(){  
        tit=await lib.getTextXpath(driver,ofs.ofLocs.o_listUsersNumTitle)
        await tit.should.equal('Αριθμός Χρηστών');
    })
    it('TestRes2l. check the requests number column title',async function(){  
        tit=await lib.getTextXpath(driver,ofs.ofLocs.o_listTotalReqTitle)
        await tit.should.equal('Σύνολο Αιτήσεων');
    })
    it('TestRes2m. check the actions column title',async function(){  
        tit=await lib.getTextXpath(driver,ofs.ofLocs.o_listActionsTitle)
        await tit.should.equal('Ενέργεια');
    })

    it('TestRes2mi. check the "edit office" button in the actions field',async function(){  
        await ofs.findClickEdit(driver,'ΤΕΣΤΤΡΥΟ');
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_title);
        await tit.should.equal('Επεξεργασία στοιχείων Γραφείου ΚΥΕΠΙΧ')
        await driver.navigate().back();
    })
    //++ to allo button stis energeies
    
    it('Test3. click office name in the search field',async function(){
        await lib.clikId(driver,ofs.ofLocs.o_searchTitle);
        await driver.sleep(sA);
        
    })
    it('TestRes3. System displays with offices',async function(){
        await ofs.popUpSearchTitle(driver);
    })
    it('test4. Superadmin clicks status in the search field',async function(){
        await lib.clikId(driver,ofs.ofLocs.o_searchStatus);
        await driver.sleep(sA);
    })
    it('testRes4a. System displays a) "Όλες" option',async function(){
        tit=await ofs.popUpOptionExists(driver,ofs.ofLocs.o_searchStatusPopUp,'Όλες')
        await tit.should.equal(true);
    })

    it('testRes4b. System displays b) "Ενεργός" option',async function(){
        tit=await ofs.popUpOptionExists(driver,ofs.ofLocs.o_searchStatusPopUp,'Ενεργός')
        await tit.should.equal(true);
    })

    it('testRes4c. System displays c) "Ανενεργός" option',async function(){
        tit=await ofs.popUpOptionExists(driver,ofs.ofLocs.o_searchStatusPopUp,'Ανενεργός')
        await tit.should.equal(true);
    })
    it('testRes4d. System displays no other option',async function(){
        tit=await ofs.popUpOptionNum(driver,ofs.ofLocs.o_searchStatusPopUp)
        await tit.should.equal(3);        
    })

    it('test5. Superadmin clicks public availiability in the search field',async function(){
        await driver.findElement(By.css('body')).sendKeys(Key.ENTER);
        await driver.sleep(sA);
        await lib.clikId(driver,ofs.ofLocs.o_searchPAvail);        
        await driver.sleep(sA);
    })
    it('testRes5a. System displays a) "Όλα" option',async function(){
        tit=await ofs.popUpOptionExists(driver,ofs.ofLocs.o_searchStatusPopUp,'Όλα')
        await tit.should.equal(true);
    })

    it('testRes5b. System displays b) "Διαθέσιμο" option',async function(){
        tit=await ofs.popUpOptionExists(driver,ofs.ofLocs.o_searchStatusPopUp,'Διαθέσιμο')
        await tit.should.equal(true);
    })
    it('testRes5c. System displays c) "Μη Διαθέσιμο" option',async function(){
        tit=await ofs.popUpOptionExists(driver,ofs.ofLocs.o_searchStatusPopUp,'Μη Διαθέσιμο')
        await tit.should.equal(true);
        await driver.findElement(By.css('body')).sendKeys(Key.ENTER);
    })
    it('testRes5d. System displays no other option',async function(){
        tit=await ofs.popUpOptionNum(driver,ofs.ofLocs.o_searchStatusPopUp)
        await tit.should.equal(3);
        
    })
    it('Test6. Superadmin clicks an office',async function(){               
        await driver.sleep(sA);
        await ofs.findClick(driver,d.nameV2);    
    })
    it('TestRes6. System displays the office details',async function(){        
        await ofs.checkOfficeDetails(driver,sA);
    })
    it('go again to Kyepix Offices',async function(){
        await driver.navigate().back();
        await driver.sleep(sA);
    })
    
    
    it('Test7. Check the Status field in the matrix', async function(){
        tit=await ofs.findNumList(driver,d.nameV2);
        await ofs.checkFieldMatrix(driver,ofs.ofLocs.o_listStatus,tit,d.ofStatus,false);          
    })

    it('Test8. Check the Public Availiability field in the matrix', async function(){        
        await ofs.checkFieldMatrix(driver,ofs.ofLocs.o_listPubAv,tit,'Μη Διαθέσιμος',false);          
    })
    it('Test9a. Check the total users field in the matrix', async function(){        
        await ofs.checkFieldMatrix1(driver,ofs.ofLocs.o_listUsersNum,tit,false);          
    })
    it('Test9b. Check the total requests field in the matrix', async function(){        
        await ofs.checkFieldMatrix1(driver,ofs.ofLocs.o_listTotalReq,tit,false);     
        // await ofs.clickEditLogo(driver,tit) ;
        // tit=await ofs.findNumList(driver,d.nameV2);   
        await ofs.checkPublishBtn(driver,4);
    })
    it('Test10a. Check the edit button logo in the actions field', async function(){        
           
        await ofs.clickEditLogo(driver,tit) ;
        await driver.navigate().back();
        await driver.sleep(sA);
        tit=await ofs.findNumList(driver,d.nameV2);   
        
    })
    it('Test10a. Check the publish/unpublish button logo in the actions field', async function(){   
        await ofs.checkPublishBtn(driver,tit);
    })
    //test 11 ++hover

    //test 13 is testres2
    

    



})