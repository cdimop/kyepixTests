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
//data
var addressNo3='ABCDEFGHIJK',//11-chars-caps
addressNo4='abCDeFGHijk',//11-chars-mixed
addressNo5='ABCDEFGHIJ',//10-chars-caps
addressNo6='AAAAAAAAAA',//10-A-caps
addressNo7='',//space
addressNo8='ΔΕΚΑ ΑΛΦΑ',
addressNo9='10 α',//4length//2intNums+spacebar+char
addressNo10='10 Α',//4length//2intNums+spacebar+capsChar
addressNo11='C DE5FGHIJ';//10 length// 8chars+1intNum+1spacebar

describe('kyepix107 test scenario', function(){
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
        await saFPage.createNewOffice(driver);
        await driver.sleep(sA);
    })

    it('TestRes2.check the page title', async function(){
        let title=await noPage.getNoFormTitle(driver); 
        await title.should.equal('Δημιουργία Νέου γραφείου ΚΥΕΠΙX');
    })
    it('TestRes2.check the create button', async function(){
        title = await lib.getTextClassName(driver,noPage.noLoc.no_createBtnCN);
        await title.should.equal('Δημιουργία');
        title=await lib.isEnabledBtnClassName(driver,noPage.noLoc.no_createBtnCN);
        await title.should.equal(false);        
    })
    it('TestRes2.check the cancel button', async function(){
        title = await lib.getTextClassName(driver,noPage.noLoc.no_cancelBtnCN);
        await title.should.equal('Ακύρωση');
        title=await lib.isEnabledBtnClassName(driver,noPage.noLoc.no_cancelBtnCN);
        await title.should.equal(true); 
    })
    it('TestRes2.check the back button', async function(){
        title = await lib.getTextClassName(driver,noPage.noLoc.no_backBtn);
        await title.should.equal('Πίσω');
        title=await lib.isEnabledBtnClassName(driver,noPage.noLoc.no_backBtn);
        await title.should.equal(true); 
    })


    it('TestRes2.check the warning message ', async function(){
        title=await noPage.getNoWarningMes(driver);
        await title.should.equal('Για να μπορέσετε να δημοσιεύσετε στο κοινό το νέο γραφείο ΚΥΕΠΙΧ, θα πρέπει να ορίσετε τουλάχιστον έναν ενεργό προϊστάμενο');     
    })

    it('TestRes2.check contact info', async function(){
        title=await noPage.getNoTitleContact(driver);   
        await title.should.equal('Στοιχεία Επικοινωνίας');    
    })
    it('check the andress title', async function(){
        title=await noPage.getNoTitleAddress(driver);
        await title.should.equal('Στοιχεία Διεύθυνσης');    
    })
    it('TestRes2.check name', async function(){
        title=await noPage.getNoTitleName(driver);    
        await title.should.equal('Όνομα ΚΥΕΠΙΧ');        
        title=await noPage.getNoValueName(driver);
        await title.should.equal('');     
    })
    it('TestRes2.check status', async function(){
        title=await noPage.getNoTitleStatus(driver); 
        await title.should.equal('Κατάσταση');
        title=await noPage.getNoValueStatus(driver);
        await title.should.equal('ΕΝΕΡΓΟ');    
    })    
    it('TestRes2.check public availiability', async function(){
        title=await noPage.getNoTitleAvail(driver);
        await title.should.equal('Διαθεσιμότητα στο κοινό');
        title=await noPage.getNoValueAvail(driver);
        await title.should.equal('ΜΗ ΔΙΑΘΕΣΙΜΟ');   
    })
    it('TestRes2.check public availiability status is not editable', async function(){
        title = await noPage.getStatusFieldUnavail(driver); //
        await title.should.equal('true');
    })
    it('TestRes2.check street', async function(){
        title=await noPage.getNoTitleStreet(driver);  
        await title.should.equal('Οδός');        
        title=await noPage.getNoValueStreet(driver);
        await title.should.equal(''); 
    })
    it('TestRes2.check address number',async function(){
        title=await noPage.getNoTitleAdNum(driver); 
        await title.should.equal('Αριθμός');        
        title=await noPage.getNoValueAdNum(driver);
        await title.should.equal('');
    })
    it('TestRes2.check postal code',async function(){
        title=await noPage.getNoTitleAdZc(driver);  
        await title.should.equal('Ταχυδρομικός Κώδικας');       
        title=await noPage.getNoValueAdZc(driver);
        await title.should.equal('');  
    })
    it('TestRes2.check phone number',async function(){
        title=await noPage.getNoTitlePhone(driver);  
        await title.should.equal('Tηλέφωνο');
        title=await noPage.getNoValuePhone(driver);
        await title.should.equal('');
    })
    it('TestRes2.check fax number',async function(){
        title=await noPage.getNoTitleFax(driver);
        await title.should.equal('Fax');
        title=await noPage.getNoValueFax(driver);
        await title.should.equal('');
    })
    it('TestRes2.check email',async function(){
        title=await noPage.getNoTitleEmail(driver);  
        await title.should.equal('Διεύθυνση E-mail');
        title=await noPage.getNoValueEmail(driver);
        await title.should.equal('');
    })
    it('TestRes2.check open Hours',async function(){
        title=await noPage.getNoTitleOpHours(driver);
        await title.should.equal('Ωράριο λειτουργίας');
        title=await noPage.getNoValueOpenHours(driver);
        await title.should.equal(''); 
    })
    it('Test3. Fill addressNo value with '+addressNo3 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo3);
    })
    
    it('TestRes3. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal('max 10 χαρακτήρες');

        lib.erase(driver,noPage.noLoc.no_addressNo);
    })
    it('Test4. Fill addressNo value with '+addressNo4 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo4);
    })
    it('TestRes4. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal('max 10 χαρακτήρες');

        lib.erase(driver,noPage.noLoc.no_addressNo);
    })

    it('Test5. Fill addressNo value with '+addressNo5 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo5);
    })
    it('TestRes5. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal('Παρακαλούμε συμπληρώστε τουλάχιστον ένα ψηφίο');

        lib.erase(driver,noPage.noLoc.no_addressNo);
    })
    it('Test6. Fill addressNo value with '+addressNo6 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo6);
    })
    it('TestRes6. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal('Παρακαλούμε συμπληρώστε τουλάχιστον ένα ψηφίο');

        lib.erase(driver,noPage.noLoc.no_addressNo);
    })

    it('Test7. Fill addressNo value with '+addressNo7 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo7);
    })
    it('TestRes7. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal('Παρακαλούμε συμπληρώστε το πεδίο');

        lib.erase(driver,noPage.noLoc.no_addressNo);
    })

    it('Test8. Fill addressNo value with '+addressNo8 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo8);
    })
    it('TestRes8. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal('Παρακαλούμε συμπληρώστε τουλάχιστον ένα ψηφίο');

        lib.erase(driver,noPage.noLoc.no_addressNo);
    })
    it('Test9. Fill addressNo value with '+addressNo9 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo9);
    })
    it('TestRes9. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal('Παρακαλούμε συμπληρώστε το πεδίο σε κεφαλαία και ελληνικούς ή λατινικούς χαρακτήρες');

        lib.erase(driver,noPage.noLoc.no_addressNo);
    })
    it('Test10. Fill addressNo value with '+addressNo10 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo10);
    })
    it('TestRes10. System doesnt display addressNo error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(false);        
    })
    it('Test11. Fill addressNo value with '+addressNo11 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_addressNo,addressNo11);
    })
    it('TestRes11. System doesnt display addressNo error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_addressNoAlert);
        await title.should.equal(false);        
    })


});