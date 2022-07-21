var {Builder, By, Key, until}= require("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();
const toLogIn = require("../superadmin/firstPage");
const logInPage= require('../superadmin/logInPage');
const saFPage=require("../superadmin/saFirstPage");
const noPage=require("../superadmin/newOfficePage");
const lib=require("../superadmin/lib");
const ofs=require("../superadmin/offices");
const d=require("../superadmin/data");
const { doesNotMatch } = require("assert");
var driver;
var sA=4000;
var sAA=7000;


describe('kyepix80 test scenario', function(){
    //this.timeout(10000);
    this.beforeAll(async function(){
        //data must have been deleted
        const {Builder, By, Key, until}= require("selenium-webdriver");
        driver=await new Builder().forBrowser("firefox").build();  
        await driver.get("https://admin.kyepix-stage.opencluster.eu/welcome-user");
        await driver.manage().window().maximize();
        await driver.sleep(sAA);
        
        //return driver;
    })
    // beforeEach(function(){
    //     // page=new Page();
    //     // page.visit('https://admin.kyepix-stage.opencluster.eu/welcome-beneficiary');
    // });
    // afterEach(function(){
    //     //page.quit();
    // });
    it('Preconditions & test results in step 2', async function(){
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
    it('step4a invalid input for the name field', async function(){
        await noPage.fillName(driver,d.nameIn1);
        title= await noPage.getNameAlert(driver);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })

    it('step4b valid input for the name field', async function(){   
        // await noPage.fillName(driver,d.nameV1);
        // title= await noPage.getNameAlert(driver);
        // await title.should.equal(false);
        await noPage.fillName(driver,d.nameV1);
        title=await lib.isVisible1(driver,noPage.noLoc.no_nameAlert);
        await title.should.equal(false);
    })

    it('step5 set the office status', async function(){   
        await noPage.setStatus(driver,d.ofStatus);  
        await driver.sleep(sA);      
    })

    it('step6a invalid input for the street field', async function(){
        await noPage.fillStreetAddress(driver,d.streetIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_streetAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step6b valid input for the street field', async function(){
        await noPage.fillStreetAddress(driver,d.streetv);
        title= await lib.isVisible1(driver,noPage.noLoc.no_streetAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('step7a invalid input for the street number field', async function(){
        await noPage.fillAddressNum(driver,d.adNumIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step7b valid input for the street number field', async function(){
        await noPage.fillAddressNum(driver,d.adNumV);
        title= await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('step8a invalid input for the zip code field', async function(){
        await noPage.fillZipCode(driver,d.adZipCIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_zipCodeAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step8b valid input for the zip code field', async function(){
        await noPage.fillZipCode(driver,d.adZipCV);
        title= await lib.isVisible1(driver,noPage.noLoc.no_zipCodeAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('step9a invalid input for the phone field', async function(){
        await noPage.fillPhoneNum(driver,d.phoneIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step9b valid input for the phone field', async function(){
        await noPage.fillPhoneNum(driver,d.phoneV);
        title= await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('step10a invalid input for the email field', async function(){
        await noPage.fillEmail(driver,d.emailIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_emailAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step10b valid input for the email field', async function(){
        await noPage.fillEmail(driver,d.emailV);
        title= await lib.isVisible1(driver,noPage.noLoc.no_emailAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('step11a invalid input for the fax field', async function(){
        await noPage.fillFax(driver,d.faxIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_faxAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step11b valid input for the fax field', async function(){
        await noPage.fillFax(driver,d.faxV);
        title= await lib.isVisible1(driver,noPage.noLoc.no_faxAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('step12a invalid input for the open hours field', async function(){
        await noPage.fillOpenHours(driver,d.openHoursIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_openHoursAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
    })
    it('step12b valid input for the open hours field', async function(){
        await noPage.fillOpenHours(driver,d.openHoursV);
        title= await lib.isVisible1(driver,noPage.noLoc.no_openHoursAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('step13 cancel the new office creation', async function(){
        await lib.clikCss(driver,noPage.noLoc.no_cancelBtn);
        title= await lib.isVisible1(driver,noPage.noLoc.no_cancelWindow);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
        if(title==true){
            var tit2=await lib.getTextId(driver,noPage.noLoc.no_alertDiscr);
            await tit2.should.equal('Είστε σίγουρος/η ότι θέλετε να ακυρώσετε τη διαδικασία;');
        }
    })

    it('step14 user refuses the cancelation. system keeps the given information in the page',async function(){
        await lib.clikCss(driver,noPage.noLoc.no_alertBoxNo);
        title=await noPage.getNoValueName(driver);
        await title.should.equal(d.nameV1);
        if(d.ofStatus==0){
            tit2='ΑΝΕΝΕΡΓΟ';
        }else{
            tit2='ΕΝΕΡΓΟ';
        }
        title=await noPage.getNoValueStatus(driver);
        await title.should.equal(tit2);
        title=await noPage.getNoValueAvail(driver);
        await title.should.equal('ΜΗ ΔΙΑΘΕΣΙΜΟ');
        title=await noPage.getNoValueStreet(driver);
        await title.should.equal(d.streetv);
        title=await noPage.getNoValueAdNum(driver);
        await title.should.equal(d.adNumV);
        title=await noPage.getNoValueAdZc(driver);
        await title.should.equal(d.adZipCV);
        title=await noPage.getNoValuePhone(driver);
        await title.should.equal(d.phoneV);
        title=await noPage.getNoValueEmail(driver);
        await title.should.equal(d.emailV);
        title=await noPage.getNoValueFax(driver);
        await title.should.equal(d.faxV);
        title=await noPage.getNoValueOpenHours(driver);
        await title.should.equal(d.openHoursV);
    })

    it('step15 user clicks create btn. System displays error message for the office name. ',async function(){
        await lib.clikId(driver,noPage.noLoc.no_createBtn);
        tit2=await lib.getTextId(driver,noPage.noLoc.no_alertDiscr);
        await tit2.should.equal('Είστε σίγουρος/η ότι θέλετε να δημιουργήσετε νέο γραφείο ΚΥΕΠΙΧ;');    
        await lib.clikCss(driver,noPage.noLoc.no_alertBoxYes);
        await driver.sleep(500);
        tit2=await lib.getTextId(driver,noPage.noLoc.no_snackbar);
        await tit2.should.equal('Το γραφείο ΚΥΕΠΙΧ υπάρχει ήδη!');    
    })

    it('step16 System keeps the given information in the page',async function(){
        //await lib.clikCss(driver,noPage.noLoc.no_alertBoxNo);
        title=await noPage.getNoValueName(driver);
        await title.should.equal(d.nameV1);
        if(d.ofStatus==0){
            tit2='ΑΝΕΝΕΡΓΟ';
        }else{
            tit2='ΕΝΕΡΓΟ';
        }
        title=await noPage.getNoValueStatus(driver);
        await title.should.equal(tit2);
        title=await noPage.getNoValueAvail(driver);
        await title.should.equal('ΜΗ ΔΙΑΘΕΣΙΜΟ');
        title=await noPage.getNoValueStreet(driver);
        await title.should.equal(d.streetv);
        title=await noPage.getNoValueAdNum(driver);
        await title.should.equal(d.adNumV);
        title=await noPage.getNoValueAdZc(driver);
        await title.should.equal(d.adZipCV);
        title=await noPage.getNoValuePhone(driver);
        await title.should.equal(d.phoneV);
        title=await noPage.getNoValueEmail(driver);
        await title.should.equal(d.emailV);
        title=await noPage.getNoValueFax(driver);
        await title.should.equal(d.faxV);
        title=await noPage.getNoValueOpenHours(driver);
        await title.should.equal(d.openHoursV);
    })

    it('step17 user changes the office name and clicks create btn.',async function(){
        await noPage.fillName(driver,d.nameV2);
        await lib.clikId(driver,noPage.noLoc.no_createBtn);
        await driver.sleep(sAA);
        tit2=await lib.getTextId(driver,noPage.noLoc.no_alertDiscr);
        await tit2.should.equal('Είστε σίγουρος/η ότι θέλετε να δημιουργήσετε νέο γραφείο ΚΥΕΠΙΧ;'); 
    })

    it('step18 user confirms the creation of the office', async function(){
        await lib.clikCss(driver,noPage.noLoc.no_alertBoxYes);
        await driver.sleep(500);
        await driver.sleep(sA);
        tit2=await lib.getTextId(driver,noPage.noLoc.no_snackbar);
        await tit2.should.equal('Το νέο γραφείο ΚΥΕΠΙΧ με Όνομα '+d.nameV2+' έχει δημιουργηθεί επιτυχώς!'); 
        tit2= await lib.getValueCss(driver,ofs.ofLocs.o_title);
        await tit2.should.equal('Διαχείριση Γραφείων ΚΥΕΠΙΧ');
        tit2=await ofs.ofExists(driver,d.nameV2);
        await tit2.should.equal(true);
    })



 });



// page= new Page();
// this.timeout(5000);
// page.visit('https://admin.kyepix-stage.opencluster.eu/welcome-beneficiary');
// this.timeout(5000);
// var us='sdfsdd';
// var pw='sdsdfgdsfsdf';
// this.timeout(5000);
// page.clickPreLogin();
// this.timeout(5000);
// page.clickGgpsBtn();
// this.timeout(5000);
// page.credSubmit(us,pw);
// this.timeout(5000);
// //let p=page.alertFail()
//.should.equal("Δεν βρέθηκε χρήστης ΓΕΜΗ με αυτά τα στοιχεία. Παρακαλούμε ξαναπροσπαθήστε.");
//assert.equal(page.alertFail(),"Δεν βρέθηκε χρήστης ΓΕΜΗ με αυτά τα στοιχεία. Παρακαλούμε ξαναπροσπαθήστε.");