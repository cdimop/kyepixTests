var {Builder, By, Key, until}= require("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();
const toLogIn = require("../superadmin/firstPage");
const logInPage= require('../superadmin/logInPage');
const saFPage=require("../superadmin/saFirstPage");
const noPage=require("../superadmin/newOfficePage");
const lib=require("../superadmin/lib");
const d=require("../superadmin/data");
const ofs=require("../superadmin/offices");

var driver;
var sA=5000;
var sAA=7000;

describe('kyepix82 test scenario', function(){
    this.beforeAll(async function(){
        //data must have been deleted
        const {Builder, By, Key, until}= require("selenium-webdriver");
        driver=await new Builder().forBrowser("firefox").build();  
        await driver.get("https://admin.kyepix-stage.opencluster.eu/welcome-user");
        await driver.manage().window().maximize();
        await driver.sleep(sAA);
        
        //return driver;
    })

    it('Preconditions & step2', async function(){
        //preconditions
        await toLogIn.preLogIn(driver);  
        await driver.sleep(sA);  
        await logInPage.logIn(driver,'kdimopoulos@knowledge.gr','test1234');
        await driver.sleep(sA);
        await saFPage.createNewOffice(driver);
        await driver.sleep(sA);
    });


    it('check the page title', async function(){
        let title=await noPage.getNoFormTitle(driver); 
        await title.should.equal('Δημιουργία Νέου γραφείου ΚΥΕΠΙX');
    })
    it('check if the create button is enabled', async function(){
        title = await noPage.getStatusCreateBtn(driver);
        await title.should.equal(false);
    })
    it('check the warning message ', async function(){
        title=await noPage.getNoWarningMes(driver);
        await title.should.equal('Για να μπορέσετε να δημοσιεύσετε στο κοινό το νέο γραφείο ΚΥΕΠΙΧ, θα πρέπει να ορίσετε τουλάχιστον έναν ενεργό προϊστάμενο');     
    })

    it('check contact info', async function(){
        title=await noPage.getNoTitleContact(driver);   
        await title.should.equal('Στοιχεία Επικοινωνίας');    
    })
    it('check the andress title', async function(){
        title=await noPage.getNoTitleAddress(driver);
        await title.should.equal('Στοιχεία Διεύθυνσης');    
    })
    it('check name', async function(){
        title=await noPage.getNoTitleName(driver);    
        await title.should.equal('Όνομα ΚΥΕΠΙΧ');        
        title=await noPage.getNoValueName(driver);
        await title.should.equal('');     
    })
    it('check status', async function(){
        title=await noPage.getNoTitleStatus(driver); 
        await title.should.equal('Κατάσταση');
        title=await noPage.getNoValueStatus(driver);
        await title.should.equal('ΕΝΕΡΓΟ');    
    })    
    it('check public availiability', async function(){
        title=await noPage.getNoTitleAvail(driver);
        await title.should.equal('Διαθεσιμότητα στο κοινό');
        title=await noPage.getNoValueAvail(driver);
        await title.should.equal('ΜΗ ΔΙΑΘΕΣΙΜΟ');   
    })
    it('check public availiability status is not editable', async function(){
        title = await noPage.getStatusFieldUnavail(driver); //
        await title.should.equal('true');
    })
    it('check street', async function(){
        title=await noPage.getNoTitleStreet(driver);  
        await title.should.equal('Οδός');        
        title=await noPage.getNoValueStreet(driver);
        await title.should.equal(''); 
    })
    it('check address number',async function(){
        title=await noPage.getNoTitleAdNum(driver); 
        await title.should.equal('Αριθμός');        
        title=await noPage.getNoValueAdNum(driver);
        await title.should.equal('');
    })
    it('check postal code',async function(){
        title=await noPage.getNoTitleAdZc(driver);  
        await title.should.equal('Ταχυδρομικός Κώδικας');       
        title=await noPage.getNoValueAdZc(driver);
        await title.should.equal('');  
    })
    it('check phone number',async function(){
        title=await noPage.getNoTitlePhone(driver);  
        await title.should.equal('Tηλέφωνο');
        title=await noPage.getNoValuePhone(driver);
        await title.should.equal('');
    })
    it('check fax number',async function(){
        title=await noPage.getNoTitleFax(driver);
        await title.should.equal('Fax');
        title=await noPage.getNoValueFax(driver);
        await title.should.equal('');
    })
    it('check email',async function(){
        title=await noPage.getNoTitleEmail(driver);  
        await title.should.equal('Διεύθυνση E-mail');
        title=await noPage.getNoValueEmail(driver);
        await title.should.equal('');
    })
    it('check open Hours',async function(){
        title=await noPage.getNoTitleOpHours(driver);
        await title.should.equal('Ωράριο λειτουργίας');
        title=await noPage.getNoValueOpenHours(driver);
        await title.should.equal(''); 
    })

    it('check create button',async function(){
        title=await lib.isEnabledBtn(driver,noPage.noLoc.no_createBtn);
        await title.should.equal(false);
    })
  
     it('step3 set the office status', async function(){   
        await noPage.setStatus(driver,d.ofStatus2);  
        await driver.sleep(sA);      
    })
    //step 4 have been checked in step2

    it('step5a invalid input for the name field', async function(){
        await noPage.fillName(driver,d.nameIn2);
        title= await noPage.getNameAlert(driver);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })

    it('step5b valid input for the name field', async function(){   
        // await noPage.fillName(driver,d.nameV1);
        // title= await noPage.getNameAlert(driver);
        // await title.should.equal(false);
        await noPage.fillName(driver,d.namev3);
        title=await lib.isVisible1(driver,noPage.noLoc.no_nameAlert);
        await title.should.equal(false);
    })

    it('TestRes6a1 invalid input for the street field', async function(){
        await noPage.fillStreetAddress(driver,d.streetIn2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_streetAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('TestRes6a2 valid input for the street field', async function(){
        await noPage.fillStreetAddress(driver,d.streetv2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_streetAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('TestRes6b1 invalid input for the street number field', async function(){
        await noPage.fillAddressNum(driver,d.adNumIn2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('TestRes6b2 valid input for the street number field', async function(){
        await noPage.fillAddressNum(driver,d.adNumV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('TestRes6c1 invalid input for the zip code field', async function(){
        await noPage.fillZipCode(driver,d.adZipCIn2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_zipCodeAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('TestRes6c2 valid input for the zip code field', async function(){
        await noPage.fillZipCode(driver,d.adZipCV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_zipCodeAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('TestRes7a1 invalid input for the phone field', async function(){
        await noPage.fillPhoneNum(driver,d.phoneIn2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('TestRes7a2 valid input for the phone field', async function(){
        await noPage.fillPhoneNum(driver,d.phoneV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('TestRes7b1 invalid input for the email field', async function(){
        await noPage.fillEmail(driver,d.emailIn2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_emailAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('TestRes7b2 valid input for the email field', async function(){
        await noPage.fillEmail(driver,d.emailV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_emailAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('TestRes7c1 invalid input for the fax field', async function(){
        await noPage.fillFax(driver,d.faxIn2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_faxAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('TestRes7c2 valid input for the fax field', async function(){
        await noPage.fillFax(driver,d.faxV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_faxAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    
    it('step8a invalid input for the open hours field', async function(){
        await noPage.fillOpenHours(driver,d.openHoursIn2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_openHoursAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step8b valid input for the open hours field', async function(){
        await noPage.fillOpenHours(driver,d.openHoursV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_openHoursAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('step19 SuperAdmin is canceling the new office creation', async function(){
        await lib.clikCss(driver,noPage.noLoc.no_cancelBtn);
    })
    it('TestRes9 System diplays an allert box', async function(){
        title= await lib.isVisible1(driver,noPage.noLoc.no_cancelWindow);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
        if(title==true){
            var tit2=await lib.getTextId(driver,noPage.noLoc.no_alertDiscr);
            await tit2.should.equal('Είστε σίγουρος/η ότι θέλετε να ακυρώσετε τη διαδικασία;');
        }      
    })

    it('step10 SuperAdmin clicks yes', async function(){
        await lib.clikCss(driver,noPage.noLoc.no_alertBoxYes);
    })

    it('TestRes10. Check Page title',async function(){
        tit=await lib.getValueCss(driver,ofs.ofLocs.o_title);
        await tit.should.equal('Διαχείριση Γραφείων ΚΥΕΠΙΧ');
    })



})