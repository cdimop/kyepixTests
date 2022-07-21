var {Builder, By, Key, until}= require("selenium-webdriver");
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
var sA=300;
var sAA=1000;
sll=100;
var tit,title;

describe('kyepix90 test scenario', function(){
    //this.timeout(10000);
    this.beforeAll(async function(){
        //needs a check a new set of the status in the edit office page
        //DATA(.d) MUST HAVE BEEN CREATED
        const {Builder, By, Key, until}= require("selenium-webdriver");
        driver=await new Builder().forBrowser("firefox").build();  
        await driver.get("https://admin.kyepix-stage.opencluster.eu/welcome-user");
        await driver.manage().window().maximize();
        await driver.sleep(sAA);
        
        //return driver;
    })

    it('Preconditions: log-in',async function(){
        await toLogIn.preLogIn(driver);  
        await driver.sleep(sA);  
        await logInPage.logIn(driver,'kdimopoulos@knowledge.gr','test1234');
        await driver.sleep(sA);
        await lib.clikId(driver,saFPage.fPLocs.offices);
    })

    it('step2. go to office details',async function(){        
        await driver.sleep(sAA);
        await ofs.findClick(driver,d.nameV2);
        await driver.sleep(sA);
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επισκόπηση στοιχείων γραφείου ΚΥΕΠΙΧ');
    })

    it('check name',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileNameTitle);
        await title.should.equal('Όνομα ΚΥΕΠΙΧ');
        // tit=await lib.fieldEnabledXpath(driver,ofs.ofLocs.o_offProfileName);
        // await tit.should.equal(false);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileName);
        await title.should.equal(d.nameV2);        
    })

    it('check status',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileStatusTitle);
        await title.should.equal('Κατάσταση');
        // tit=await lib.fieldEnabledXpath(driver,ofs.ofLocs.o_offProfileName);
        // await tit.should.equal(false);              
    })
    it('check street',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileStreetTitle);
        await title.should.equal('Οδός');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileStreet);
        await title.should.equal(d.streetv);        
    })

    it('check Address Number',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileAddNumTitle);
        await title.should.equal('Αριθμός');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileAddNum);
        await title.should.equal(d.adNumV);        
    })

    it('check Zip Code',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileZipCodeTitle);
        await title.should.equal('Ταχυδρομικός Κώδικας');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileZipCode);
        await title.should.equal(d.adZipCV);        
    })

    it('check phone',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfilePhoneTitle);
        await title.should.equal('Τηλέφωνο');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfilePhone);
        await title.should.equal(d.phoneV);        
    })

    it('check email',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileEmailTitle);
        await title.should.equal('E-mail');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileEmail);
        await title.should.equal(d.emailV);        
    })

    it('check fax',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileFaxTitle);
        await title.should.equal('Fax');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileFax);
        await title.should.equal(d.faxV);        
    })

    it('check open hours',async function(){
        //await driver.sleep(sA);
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileOpHoursTitle);
        await title.should.equal('Ωράριο λειτουργίας');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileOpHours);
        await title.should.equal(d.openHoursV);        
    })


    it('step2b.Go to edit office details',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageEditBtn);
        await driver.sleep(sA);
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επεξεργασία στοιχείων Γραφείου ΚΥΕΠΙΧ');
    })

    it('check name', async function(){        
        title=await noPage.getNoTitleName(driver);    
        await title.should.equal('Όνομα ΚΥΕΠΙΧ');        
        title=await noPage.getNoValueName(driver);
        await title.should.equal(d.nameV2);  
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_title);
        await tit.should.equal(true);
    })

    
    it('check status', async function(){
        const {Builder, By, Key, until}= require("selenium-webdriver");
        title=await noPage.getNoTitleStatus(driver); 
        await title.should.equal('Κατάσταση');
        title=await noPage.getNoValueStatus(driver);
        tit=await ofs.getStatus(driver,d.ofStatus);
        await title.should.equal(tit);
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_status);
        await tit.should.equal(true);
        await driver.findElement(By.css('body')).sendKeys(Key.ESCAPE);
        await driver.sleep(200);
    })

    it('check street', async function(){
        //await driver.sleep(sll);
        title=await noPage.getNoTitleStreet(driver);  
        await title.should.equal('Οδός');        
        title=await noPage.getNoValueStreet(driver);
        await title.should.equal(d.streetv); 
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_addressStreet);
        await tit.should.equal(true);
    })
    it('check address number',async function(){
        //await driver.sleep(sll);
        title=await noPage.getNoTitleAdNum(driver); 
        await title.should.equal('Αριθμός');        
        title=await noPage.getNoValueAdNum(driver);
        await title.should.equal(d.adNumV);
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_addressNo);
        await tit.should.equal(true);
    })
    it('check postal code',async function(){
        //await driver.sleep(sll);
        title=await noPage.getNoTitleAdZc(driver);  
        await title.should.equal('Ταχυδρομικός Κώδικας');       
        title=await noPage.getNoValueAdZc(driver);
        await title.should.equal(d.adZipCV); 
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_addressZc);
        await tit.should.equal(true); 
    })
    it('check phone number',async function(){
        //await driver.sleep(sll);
        title=await noPage.getNoTitlePhone(driver);  
        await title.should.equal('Tηλέφωνο');
        title=await noPage.getNoValuePhone(driver);
        await title.should.equal(d.phoneV);
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_phoneNo);
        await tit.should.equal(true);
    })
    it('check fax number',async function(){
        //await driver.sleep(sll);
        title=await noPage.getNoTitleFax(driver);
        await title.should.equal('Fax');
        title=await noPage.getNoValueFax(driver);
        await title.should.equal(d.faxV);
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_fax);
        await tit.should.equal(true);
    })
    it('check email',async function(){
        //await driver.sleep(sll);
        title=await noPage.getNoTitleEmail(driver);  
        await title.should.equal('Διεύθυνση E-mail');
        title=await noPage.getNoValueEmail(driver);
        await title.should.equal(d.emailV);
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_email);
        await tit.should.equal(true);
    })
    it('check open Hours',async function(){
        //await driver.sleep(sll);
        title=await noPage.getNoTitleOpHours(driver);
        await title.should.equal('Ωράριο λειτουργίας');
        title=await noPage.getNoValueOpenHours(driver);
        await title.should.equal(d.openHoursV); 
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_openHours);
        await tit.should.equal(true);
    })

    it('Step3. Cancel edit',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageEditCancelBtn);
        tit=await lib.getTextId(driver,ofs.ofLocs.o_alertBoxTitle);
        await tit.should.equal('Ακύρωση Ενημέρωσης στοιχείων ΚΥΕΠΙΧ')
        tit= await lib.getTextId(driver,ofs.ofLocs.o_alertBoxDescr);
        await tit.should.equal('Είστε σίγουρος/η ότι θέλετε να ακυρώσετε τη διαδικασία;')
    })

    it('Step4. User denies the cancelation',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageAlertNo);
        await driver.sleep(sA);
    })

    it('TestRes4. System displays the same page',async function(){
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επεξεργασία στοιχείων Γραφείου ΚΥΕΠΙΧ');
    })

    it('Step5a. Update fields and ckeck them',async function(){
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επεξεργασία στοιχείων Γραφείου ΚΥΕΠΙΧ');
    })

    it('Set invalid input for the name field', async function(){
        await noPage.fillName(driver,d.nameIn1);
        title= await noPage.getNameAlert(driver);
        //await driver.sleep(sAA);
        await title.should.equal(true);      
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);
    })

    it('set valid input for the name field', async function(){   
        // await noPage.fillName(driver,d.nameV1);
        // title= await noPage.getNameAlert(driver);
        // await title.should.equal(false);
        await noPage.fillName(driver,d.namev3);
        title=await lib.isVisible1(driver,noPage.noLoc.no_nameAlert);
        await title.should.equal(false);     
        
        await driver.sleep(10000);
    })

    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })

    it('set the last valid name again',async function(){
        await noPage.fillName(driver,d.nameV2);
    })

    it('Set invalid input for the street field', async function(){
        await noPage.fillStreetAddress(driver,d.streetIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_streetAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);  
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);    
    })
    it('Set valid input for the street field', async function(){
        await noPage.fillStreetAddress(driver,d.streetv2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_streetAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })
    it('set the last valid street name again',async function(){
        await noPage.fillStreetAddress(driver,d.streetv);
    })

    it('Set invalid input for the street number field', async function(){
        await noPage.fillAddressNum(driver,d.adNumIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);  
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);      
    })
    it('Set valid input for the street number field', async function(){
        //DUE TO ERROR I USE THE NEXT LINE AND I COMMENT SECOND NEXT LINE
        // await noPage.fillAddressNum(driver,'ΕΝΑ');
        await noPage.fillAddressNum(driver,d.adNumV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })

    it('set the last valid address number again',async function(){
        await noPage.fillAddressNum(driver,d.adNumV);
    })

    it('Set invalid input for the zip code field', async function(){
        await noPage.fillZipCode(driver,d.adZipCIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_zipCodeAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);  
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);    
    })
    it('Set valid input for the zip code field', async function(){
        await noPage.fillZipCode(driver,d.adZipCV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_zipCodeAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })

    it('set the last valid zip code again',async function(){
        await noPage.fillZipCode(driver,d.adZipCV);
    })

    it('Set invalid input for the phone field', async function(){
        await noPage.fillPhoneNum(driver,d.phoneIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);  
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);     
    })
    it('Set valid input for the phone field', async function(){
        await noPage.fillPhoneNum(driver,d.phoneV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })
    it('set the last valid phone number again',async function(){
        await noPage.fillPhoneNum(driver,d.phoneV);
    })
    it('Set invalid input for the email field', async function(){
        await noPage.fillEmail(driver,d.emailIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_emailAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);  
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);     
    })
    it('Set valid input for the email field', async function(){
        await noPage.fillEmail(driver,d.emailV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_emailAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })
    it('set the last valid email again',async function(){
        await noPage.fillEmail(driver,d.emailV);
    })

    it('Set invalid input for the fax field', async function(){
        await noPage.fillFax(driver,d.faxIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_faxAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true);   
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);   
    })
    it('Set valid input for the fax field', async function(){
        await noPage.fillFax(driver,d.faxV2);
        title= await lib.isVisible1(driver,noPage.noLoc.no_faxAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })
    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })
    it('set the last valid fax again',async function(){
        await noPage.fillFax(driver,d.faxV);
    })
    it('Set invalid input for the open hours field', async function(){
        await noPage.fillOpenHours(driver,d.openHoursIn1);
        title= await lib.isVisible1(driver,noPage.noLoc.no_openHoursAlert);
        //await driver.sleep(sAA);
        await title.should.equal(true); 
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(false);      
    })
    it('Set valid input for the open hours field', async function(){
        await noPage.fillOpenHours(driver,d.openHoursV2);
        await driver.sleep(sA);
        title= await lib.isVisible1(driver,noPage.noLoc.no_openHoursAlert);
        //await driver.sleep(sAA);
        await title.should.equal(false);      
    })

    it('check edit button',async function(){
        title=await lib.isEnabledBtn(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
        await title.should.equal(true);
    })

    it('Step5b. Click edit Btn',async function(){
        await lib.clikId(driver,ofs.ofLocs.o_offSubpageEditAcceptBtn);
    })

    it('check the alert box',async function(){
        tit=await lib.getTextId(driver,ofs.ofLocs.o_alertBoxTitle);
        await tit.should.equal('Ενημέρωση Στοιχείων ΚΥΕΠΙΧ')
        tit= await lib.getTextId(driver,ofs.ofLocs.o_alertBoxDescr);
        await tit.should.equal('Είστε σίγουρος/η ότι θέλετε να ενημερώσετε τα στοιχεία του γραφείου ΚΥΕΠΙΧ;')
    })
    
    it('6.User dinies the edit ',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageAlertNo);
    })

    it('TestRes6. System displays the same page',async function(){
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επεξεργασία στοιχείων Γραφείου ΚΥΕΠΙΧ');
    })

    it('Step7. Click delete',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offDeleteBtn);        
    })

    it('Check the alert box',async function(){
        tit=await lib.getTextId(driver,ofs.ofLocs.o_alertBoxTitle);
        await tit.should.equal('Διαγραφή γραφείου ΚΥΕΠΙΧ');
        tit= await lib.getTextId(driver,ofs.ofLocs.o_alertBoxDescr);
        await tit.should.equal('Είστε σίγουρος/η ότι θέλετε να διαγράψετε το γραφείο ΚΥΕΠΙΧ;');     
    })

    it('Step8. User denies the deletion of the office',async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageAlertNo);
        await driver.sleep(sA);
    })

    it('TestRes8. System displays the same page',async function(){
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επεξεργασία στοιχείων Γραφείου ΚΥΕΠΙΧ');
    })
    
})