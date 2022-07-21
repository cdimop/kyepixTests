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
var sAA=8000;
sll=100;
var tit,title,el,temp;
//data
var phone3='',
phone4='01234567890123456789012345',//length 26//numbers
phone5='AbCDEFGhijkLmnOpQRstUVwXyz',//length 26//mixed chars
phone6a='+',
phone6b='-',
phone6c=',',
phone7='26101234567 - 1234',
phone8='0123456789.01234,56789+012345',//length 29//26numbers+3 special characters
phone9='26101234567 , 1234',
phone10='26101234567 + 1234',
phone11='2610123456';



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


    it('Test4. Fill phone value with '+phone4 ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone4);
    })
    it('TestRes4. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal('max 25 χαρακτήρες');        
    })

    it('Test3. Fill phone value with '+phone3 ,async function(){
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone3);
        // console.log('edw');
        // await driver.sleep(sAA);
    })
    
    it('TestRes3. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);

        await title.should.equal('Παρακαλούμε συμπληρώστε το πεδίο');
    })

    it('Test5. Fill phone value with '+phone5 ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone5);
    })
    it('TestRes5. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("max 25 χαρακτήρες");        
    })

    it('Test6a. Fill phone value with value:'+phone6a ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        //await driver.sleep(sAA);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone6a);
    })
    it('TestRes6a. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("Μη αποδεκτή μορφή τηλεφώνου συμπληρώστε τουλάχιστον 10 ψηφία");        
    })

    it('Test6b. Fill phone value with value:'+phone6b ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        //await driver.sleep(sAA);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone6b);
    })
    it('TestRes6b. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("Μη αποδεκτή μορφή τηλεφώνου συμπληρώστε τουλάχιστον 10 ψηφία");        
    })
    it('Test6c. Fill phone value with value:'+phone6c ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        //await driver.sleep(sAA);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone6c);
    })
    it('TestRes6c. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("Μη αποδεκτή μορφή τηλεφώνου συμπληρώστε τουλάχιστον 10 ψηφία");        
    })

    it('Test7. Fill phone value with '+phone7 ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone7);
    })
    it('TestRes7. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("Μη αποδεκτή μορφή τηλεφώνου (τουλάχιστον 10 ψηφία, '-', ',', '+')");        
    })

    it('set field+copie',async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone8);
        await driver.findElement(By.id(noPage.noLoc.no_phoneNo)).sendKeys(Key.CONTROL,'a');
        await driver.findElement(By.id(noPage.noLoc.no_phoneNo)).sendKeys(Key.CONTROL,'c');
        
    })

    it('Test8. Fill phone value with '+phone8 ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        //await driver.sleep(sAA);
        await lib.clikId(driver,noPage.noLoc.no_phoneNo);
        await driver.findElement(By.id(noPage.noLoc.no_phoneNo)).sendKeys(Key.CONTROL,'v');
    })
    it('TestRes8. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("max 25 χαρακτήρες");        
    })

    it('Test9. Fill phone value with value:'+phone9 ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        //await driver.sleep(sAA);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone9);
    })
    it('TestRes9. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("Μη αποδεκτή μορφή τηλεφώνου (τουλάχιστον 10 ψηφία, '-', ',', '+')");        
    })

    it('Test10. Fill phone value with '+phone10 ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone10);
    })
    it('TestRes10. System displays error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal("Μη αποδεκτή μορφή τηλεφώνου (τουλάχιστον 10 ψηφία, '-', ',', '+')");        
    })

    it('Test11. Fill phone value with '+phone11 ,async function(){
        await lib.erase(driver,noPage.noLoc.no_phoneNo);
        await lib.setField(driver,noPage.noLoc.no_phoneNo,phone11);
    })
    it('TestRes11. System doesnt display phone error' ,async function(){
        title=await lib.isVisible1(driver,noPage.noLoc.no_phoneAlert);
        await title.should.equal(false);        
    })

});