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
const { expect } = require("chai");
var driver;
var sA=500;
var sAA=1000;
sll=100;
var tit,title,el,temp;

describe('kyepix97 test scenario', function(){
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

    it('TestRes2a. test the short "σύνολα αιτήσεων",desc' ,async function(){
        const {Builder, By, Key, until}= require("selenium-webdriver");
        await driver.sleep(sA);
        //await lib.clikXpath(driver,'/html/body/div[1]/div/div/div/div/div/div/div[2]/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div[2]');
        //await driver.sleep(sA);
        tit=await ofs.locateShortBy(driver,'Σύνολο Αιτήσεων','desc');
        await tit.should.equal(true);           
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

    it('Test3. Find an office With inactive status availiability' ,async function(){
        //search for the no availiable offices
        await ofs.search(driver,'',0,null);
        await driver.sleep(sA);
        //selects the fisrt
        temp=1;       
         
    })

    it('TestRes3a. Check the public avail. field' ,async function(){
        //checks the public avail. field
        await ofs.checkFieldMatrix(driver,ofs.ofLocs.o_listStatus,1,0,false);        
    })

    it('TestRes3b. Check the button' ,async function(){        
    await ofs.checkPublishBtn(driver,1);       
    })

    it('Test4. Superadmin clicks an inactive office' ,async function(){
        //clicks the first in the list
        let xp='/html/body/div[1]/div/div/div/div/div/div/div[2]/div[2]/div[3]/div/div/div/div[2]/div[2]/div/div/div/div['+temp+']/div[2]'
        await lib.clikXpath(driver,xp);    
    })

    it('TestRes4a. Check office details page title' ,async function(){
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επισκόπηση στοιχείων γραφείου ΚΥΕΠΙΧ');      
    })

    it('TestRes4b. Check name field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileNameTitle);
        await title.should.equal('Όνομα ΚΥΕΠΙΧ');      
    })
    it('TestRes4c. Check status field, and status in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileStatusTitle);
        await title.should.equal('Κατάσταση');
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileStatus);
        await title.should.equal('ΜΗ ΕΝΕΡΓΟ');       
    })
    it('TestRes4d. Check public availiability field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfilePubAvailTitle);
        await title.should.equal('Διαθεσιμότητα στο κοινό');      
    })
    it('TestRes4e. Check street field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileStreetTitle);
        await title.should.equal('Οδός');     
    })
    it('TestRes4f. Check street number field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileAddNumTitle);
        await title.should.equal('Αριθμός');    
    })
    it('TestRes4g. Check zip code field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileZipCodeTitle);
        await title.should.equal('Ταχυδρομικός Κώδικας');  
    })
    it('TestRes4h. Check phone number field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfilePhoneTitle);
        await title.should.equal('Τηλέφωνο');  
    })
    it('TestRes4i. Check fax number field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileFaxTitle);
        await title.should.equal('Fax'); 
    })
    it('TestRes4j. Check email field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileEmailTitle);
        await title.should.equal('E-mail');
    })
    it('TestRes4k. Check open hours field in office details page' ,async function(){
        title= await lib.getTextXpath(driver,ofs.ofLocs.o_offProfileOpHoursTitle);
        await title.should.equal('Ωράριο λειτουργίας');
    })

    it('TestRes4l. Check edit button in office details page' ,async function(){
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageEditBtn);
        await tit.should.equal('Επεξεργασία Στοιχείων');
        tit=await lib.isEnabledBtnCss(driver,ofs.ofLocs.o_offSubpageEditBtn);
        await tit.should.equal(true);
    })

    it('Test5. Superadmin clicks edit button' ,async function(){
        await lib.clikCss(driver,ofs.ofLocs.o_offSubpageEditBtn)  
    })

    it('TestRes5a. Check edit page title' ,async function(){
        tit= await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageTitle);
        await tit.should.equal('Επεξεργασία στοιχείων Γραφείου ΚΥΕΠΙΧ');      
    })

    it('TestRes5b. Check name field in edit page' ,async function(){
        title=await noPage.getNoTitleName(driver);    
        await title.should.equal('Όνομα ΚΥΕΠΙΧ');  
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_title);
        await tit.should.equal(true);     
    })
    it('TestRes5c. Check status field, and status in edit page' ,async function(){
        title=await noPage.getNoTitleStatus(driver); 
        await title.should.equal('Κατάσταση');
        title=await noPage.getNoValueStatus(driver);
        await title.should.equal('ΑΝΕΝΕΡΓΟ');
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_status);
        await tit.should.equal(true);
        await driver.findElement(By.css('body')).sendKeys(Key.ESCAPE);
        await driver.sleep(sA);      
    })
    it('TestRes5d. Check public availiability field in edit page' ,async function(){
        title= await lib.getValueCss(driver,noPage.noLoc.no_fieldTitleAvail);
        await title.should.equal('Διαθεσιμότητα στο κοινό');      
    })
    it('TestRes5e. Check street field in edit page' ,async function(){
        title=await noPage.getNoTitleStreet(driver);  
        await title.should.equal('Οδός');      
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_addressStreet);
        await tit.should.equal(true);    
    })
    it('TestRes5f. Check street number field in edit page' ,async function(){
        title=await noPage.getNoTitleAdNum(driver); 
        await title.should.equal('Αριθμός');
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_addressNo);
        await tit.should.equal(true);    
    })
    it('TestRes5g. Check zip code field in edit page' ,async function(){
        title=await noPage.getNoTitleAdZc(driver);  
        await title.should.equal('Ταχυδρομικός Κώδικας');  
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_addressZc);
        await tit.should.equal(true); 
    })
    it('TestRes5h. Check phone number field in edit page' ,async function(){
        title=await noPage.getNoTitlePhone(driver);  
        await title.should.equal('Tηλέφωνο');
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_phoneNo);
        await tit.should.equal(true);
    })
    it('TestRes5i. Check fax number field in edit page' ,async function(){
        title=await noPage.getNoTitleFax(driver);
        await title.should.equal('Fax');
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_fax);
        await tit.should.equal(true);
    })
    it('TestRes5j. Check email field in edit page' ,async function(){
        title=await noPage.getNoTitleEmail(driver);  
        await title.should.equal('Διεύθυνση E-mail');
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_email);
        await tit.should.equal(true);
    })
    it('TestRes5k. Check open hours field in edit page' ,async function(){
        title=await noPage.getNoTitleOpHours(driver);
        await title.should.equal('Ωράριο λειτουργίας');
        tit=await lib.fieldEnabled(driver,noPage.noLoc.no_openHours);
        await tit.should.equal(true);
    })

    it('TestRes5l. Check cancel button in edit page' ,async function(){
        title=await lib.getValueCss(driver,ofs.ofLocs.o_offSubpageEditCancelBtn);
        await title.should.equal('Ακύρωση');
        tit=await lib.isEnabledBtnCss(driver,ofs.ofLocs.o_offSubpageEditCancelBtn);
        await tit.should.equal(true);
    })
    it('TestRes5m. Check update button in edit page' ,async function(){
        title=await lib.getTextClassName(driver,ofs.ofLocs.o_offSubpageEditUpdateBtn);
        await title.should.equal('Ενημέρωση');
        tit=await lib.isEnabledBtnClassName(driver,ofs.ofLocs.o_offSubpageEditUpdateBtn);
        await tit.should.equal(false);
    })

    it('Test6. Superadmin tries to change the public availaibility field to active' ,async function(){
        const {Builder, By, Key, until}= require("selenium-webdriver"); 
        try {
            tit=await driver.findElement(By.id(noPage.noLoc.no_publicAv)).getAttribute('aria-disabled');
            console.log(tit);
            await lib.clikId(driver,noPage.noLoc.no_publicAv);
        }
        catch(err) {
            tit=true;
        }
        await expect(tit).to.be.oneOf([true,'true']);
        //tit.should.equal((true)||('true'));
    })






















    

    
   


});