var {Builder, By, Key, until, Browser}= require("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();
const toLogIn = require("../superadmin/firstPage");
const logInPage= require('../superadmin/logInPage');
const saFPage=require("../superadmin/saFirstPage");
const nuPage=require("../superadmin/newUserPage");
const lib=require("../superadmin/lib");
const d=require("../superadmin/data");
const { expect } = require("chai");
var driver;
var sA=500;
var sAA=8000;
sll=100;
var tit,title,el,temp;
//DATA
var fName3a='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',//length 52//all chars-caps
fName3b='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX',//length 50//all chars-caps
lName4a='',
lName4b='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX',//length 50//all chars-caps,
phoneNum5a='01234567890123456789012345',//length 26//all numbers,
phoneNum5b='0123456789012345678901234',//length 25//all numbers,
email6='text@text.tex',//*\@*\.3chars
officeName7='ΤΕΣΤΤΡΥΟ',
role8='ΥΠΑΛΛΗΛΟΣ',
statusCheckbox='true';



describe('kyepix140 test scenario', function(){
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
        await saFPage.createNewuser(driver);
        await driver.sleep(2*sA);
    })
    it('testRes2. check page texts',async function(){
        await nuPage.checkPageTexts(driver);
    })
    it('TestRes2. check fname field' ,async function(){
        await nuPage.checkFNameField(driver,'');
    })
    it('TestRes2. check lname field' ,async function(){
        await nuPage.checkLNameField(driver,'');
    })
    it('TestRes2. check email field' ,async function(){
        await nuPage.checkEmailField(driver,'');
    })
    it('TestRes2. check office name field' ,async function(){
        await nuPage.checkOfficeNameField(driver,'');
    })
    it('TestRes2. check role field' ,async function(){
        await nuPage.checkRoleField(driver,'ΥΠΑΛΛΗΛΟΣ');
    })
    it('TestRes2. check userStatus field' ,async function(){
        await nuPage.checkUserStatusField(driver,'ΑΝΕΝΕΡΓΟ');
    })
    it('TestRes2. check phone field' ,async function(){
        await nuPage.checkPhoneNumField(driver,'');
    })
    it('testRes2. check status checkbox texts',async function(){
        await nuPage.checkStatusCheckBox(driver,'true');
    })
    it('TestRes2. check buttons' ,async function(){
        await nuPage.checkBtns(driver,false);
    })

    it('Test3a. fill the first name with value:'+fName3a ,async function(){
        await lib.setField(driver,nuPage.nuLoc.nu_fName,fName3a);        
    })

    it('TestRes3a. System displays error' ,async function(){
        title=await lib.isVisible1(driver,nuPage.nuLoc.nu_fNameAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,nuPage.nuLoc.nu_fNameAlert)
        await title.should.equal('max 50 χαρακτήρες');
    })

    it('Test3b. fill the first name with value:'+fName3b ,async function(){
        await lib.setField(driver,nuPage.nuLoc.nu_fName,fName3b);        
    })

    it('TestRes3b. System doesnt display error' ,async function(){
        title=await lib.isVisible1(driver,nuPage.nuLoc.nu_fNameAlert);
        await title.should.equal(false);
        // title=await lib.getValueCss(driver,nuPage.nuLoc.nu_fNameAlert)
        // await title.should.equal('max 50 χαρακτήρες');
    })

    it('Test4a. fill the last name with value:'+lName4a ,async function(){
        await lib.setField(driver,nuPage.nuLoc.nu_lName,lName4a);        
    })

    it('TestRes4a. System displays error' ,async function(){
        title=await lib.isVisible1(driver,nuPage.nuLoc.nu_lNameAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,nuPage.nuLoc.nu_lNameAlert)
        await title.should.equal('Παρακαλούμε συμπληρώστε το πεδίο');
    })

    it('Test4b. fill the last name with value:'+lName4b ,async function(){
        await lib.setField(driver,nuPage.nuLoc.nu_lName,lName4b);        
    })

    it('TestRes4b. System doesnt display error' ,async function(){
        title=await lib.isVisible1(driver,nuPage.nuLoc.nu_lNameAlert);
        await title.should.equal(false);
        // title=await lib.getValueCss(driver,nuPage.nuLoc.nu_lNameAlert)
        // await title.should.equal('max 50 χαρακτήρες');
    })

    it('Test5a. fill the phone with value:'+phoneNum5a ,async function(){
        await lib.setField(driver,nuPage.nuLoc.nu_phoneNum,phoneNum5a);        
    })

    it('TestRes5a. System displays error' ,async function(){
        title=await lib.isVisible1(driver,nuPage.nuLoc.nu_phoneNumAlert);
        await title.should.equal(true);
        title=await lib.getValueCss(driver,nuPage.nuLoc.nu_phoneNumAlert)
        await title.should.equal('max 25 χαρακτήρες');
    })

    it('Test5b. fill the phone with value:'+phoneNum5b ,async function(){
        await lib.setField(driver,nuPage.nuLoc.nu_phoneNum,phoneNum5b);        
    })

    it('TestRes5b. System doesnt display error' ,async function(){
        title=await lib.isVisible1(driver,nuPage.nuLoc.nu_phoneNumAlert);
        await title.should.equal(false);
        // title=await lib.getValueCss(driver,nuPage.nuLoc.nu_phoneNumAlert)
        // await title.should.equal('max 50 χαρακτήρες');
    })
    it('Test6. fill the email with value:'+email6 ,async function(){
        await lib.setField(driver,nuPage.nuLoc.nu_email,email6);        
    })
    it('TestRes6. System doesnt display error' ,async function(){
        title=await lib.isVisible1(driver,nuPage.nuLoc.nu_emailAlert);
        await title.should.equal(false);
        // title=await lib.getValueCss(driver,nuPage.nuLoc.nu_phoneNumAlert)
        // await title.should.equal('max 50 χαρακτήρες');
    })

    it('Test7. Set users office with:'+officeName7 ,async function(){
        await nuPage.setOffice(driver,officeName7); 
    })

    it('Test8. Set users role with:'+role8 ,async function(){
        await nuPage.setRole(driver,role8); 
    })
    it('Test9. Set status checkbox with:'+statusCheckbox ,async function(){
        await nuPage.setStatusCheckbox(driver,statusCheckbox); 
    })

    it('Test10. check the alerts in the fields' ,async function(){
        await nuPage.setStatusCheckbox(driver,statusCheckbox); 
    })

    it('TestRes10. the create button is enabled' ,async function(){
        await nuPage.checkCreateBtn(driver,true); 
    })
    it('Test11. User clicks the create button' ,async function(){
        await lib.clikClassName(driver,nuPage.nuLoc.nu_createBtnCN);
    })

    it('TestRes11. Check the message', async function(){
        await nuPage.checkAlertBox(driver,'Δημιουργία νέου προφίλ χρήστη γραφείου ΚΥΕΠΙΧ','Είστε σίγουρος/η ότι θέλετε να δημιουργήσετε νέο χρήστη γραφείου ΚΥΕΠΙΧ;')
    })

    // it('Test12. User denies the creation of the user' ,async function(){
    //     await lib.clikCss(driver,nuPage.nuLoc.nu_alertBoxNo);
    // })

    // it('TestRes12. System diplays the new users form page, and the values have not been changed',async function(){
    //     await driver.sleep(sA*2);
    //     await nuPage.checkPageTexts(driver);
    //     await nuPage.checkFNameField(driver,fName3b);
    //     await nuPage.checkLNameField(driver,lName4b);        
    //     await nuPage.checkEmailField(driver,email6);
    //     await nuPage.checkOfficeNameField(driver,officeName7);
    //     await nuPage.checkRoleField(driver,role8);
    //     await nuPage.checkUserStatusField(driver,'ΑΝΕΝΕΡΓΟ');
    //     await nuPage.checkPhoneNumField(driver,phoneNum5b);
    //     await nuPage.checkStatusCheckBox(driver,statusCheckbox);
    //     await nuPage.checkBtns(driver,true);
    // })













    
    





    


})