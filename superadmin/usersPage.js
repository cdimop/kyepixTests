const usersLocs = {
    //css
    u_title: ".MuiTypography-h1",
    u_searchBtn:'.MuiButton-outlined',
    u_searchTitle:'.MuiCardHeader-root',
    u_searchLNameTitle:'.css-1ro59f',
    u_searchLName:'div.MuiFormControl-root:nth-child(2)',
    u_searchOfficeTitle:'.css-1jtelux',
    u_searchOffice:'#kyepix_office_id',
    u_searchRoleTitle:'div.MuiGrid-root:nth-child(3) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
    u_searchRole:'#roles',
    u_searchStatusTitle:'div.MuiGrid-root:nth-child(4) > div:nth-child(1) > label:nth-child(1)',
    u_searchStatus:'#enabled',

    //id
    u_offUsersTab: "simple-tab-0",
    u_offAdminsTab: "simple-tab-1",
  
    //xpath
    u_listId: 1,
    u_listName: 2,
    u_listOffice: 3,
    u_listRole: 4,
    u_listPenCases: 5,
    u_listCompCases: 6,
    u_listLastCon: 7,
    u_listActions: 8,

    //className
    u_createNewUserBtn:'class="MuiBox-root css-u43kzn',

  };
  const lib = require("./lib");
const { nuLoc } = require("./newUserPage");
  var temp1, temp2, temp3, temp4;
  
  //checked inp: field name
  async function checkUserTab(driver, checked) {
    const { Builder, By, Key, until } = require("selenium-webdriver");
    let flag = true;
    temp1 = await lib.getTextId(driver, usersLocs.u_offUsersTab);
    await temp1.should.equal("Χρήστες γραφείων");
    temp1 = await lib.getTextId(driver, usersLocs.u_offAdminsTab);
    await temp1.should.equal("Διαχειριστές ΚΕΕΕ");
    temp1 = await driver.findElements(
      By.className("MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary")
    );
    for (temp2 of temp1) {
      temp3 = await temp2.getText();
      //console.log('onoma'+temp3);
      temp4 = await temp2.getAttribute("aria-selected");
      if (temp3 == checked) {
        if (temp4 != "true") {
          flag = false;
          //console.log('flag1')
        }
      } else {
        if (temp4 != "false") {
          flag = false;
          //console.log('flag2')
        }
      }
    }
    await flag.should.equal(true);
  }
  async function checkTexts(driver) {
    temp1 = await lib.getValueCss(driver, usersLocs.u_title);
    await temp1.should.equal("Διαχείριση Χρηστών Συστήματος");
  }
  
  async function checkSearchField(driver,lName,office,role,status){
    const {Builder, By, Key, until}= require("selenium-webdriver"); 
    let temp=false;
    //title
    temp1=await lib.getValueCss(driver,usersLocs.u_searchTitle);
    await temp1.should.equal('Κριτήρια Αναζήτησης');
    //lastname
    temp1=await lib.getValueCss(driver,usersLocs.u_searchLNameTitle);
    await temp1.should.equal('Επώνυμο χρήστη');
    temp1=await lib.getValueCss(driver,usersLocs.u_searchLName);
    await temp1.should.equal(lName);
    //office
    temp1=await lib.getValueCss(driver,usersLocs.u_searchOfficeTitle);
    await temp1.should.equal('Γραφείο ΚΥΕΠΙΧ');
    temp1=await lib.getValueCss(driver,usersLocs.u_searchOffice);
    await temp1.should.equal(office);
    //role
    await checkSearchRole(driver,role);
    //status
    await checkSearchStatus(driver,status);  
  
    //search btn
    temp1=await lib.getValueCss(driver,usersLocs.u_searchBtn);
    await temp1.should.equal('Αναζήτηση');
    temp1=await lib.isEnabledBtnCss(driver,usersLocs.u_searchBtn)

  }

  async function checkSearchRole(driver,value){ 
    const {Builder, By, Key, until}= require("selenium-webdriver"); 

    //check field title 
    temp1=await lib.getValueCss(driver,usersLocs.u_searchRoleTitle);
    await temp1.should.equal('Ρόλοι');
    //check the options
    await lib.clikCss(driver,usersLocs.u_searchRole);
    temp1=await driver.findElement(By.id('menu-roles'));
    temp2=await temp1.findElements(By.className('MuiMenuItem-root MuiMenuItem-gutters'));
    temp3=await checkInListbox(driver,temp2,'Όλοι');
    await temp3.should.equal(true);
    temp3=await checkInListbox(driver,temp2,'Προϊστάμενος');
    await temp3.should.equal(true);
    temp3=await checkInListbox(driver,temp2,'Υπάλληλος');
    await temp3.should.equal(true);
    temp=0;
    for(temp3 of temp2){
      temp=temp+1;
    }
    await temp.should.equal(3);
    await driver.findElement(By.tagName('body')).sendKeys(Key.ESCAPE);
    //check the field value
    temp1=await lib.getValueCss(driver,usersLocs.u_searchRole);
    await temp1.should.equal(value);
  }

  async function checkSearchStatus(driver,value){
    const {Builder, By, Key, until}= require("selenium-webdriver"); 
    await driver.sleep(500);
    temp1=await lib.getValueCss(driver,usersLocs.u_searchStatusTitle);
    await temp1.should.equal('Κατάσταση');
    //check the options
    await lib.clikCss(driver,usersLocs.u_searchStatus);
    temp1=await driver.findElement(By.id('menu-enabled'));
    temp2=await temp1.findElements(By.className('MuiMenuItem-root MuiMenuItem-gutters'));
    temp3=await checkInListbox(driver,temp2,'Όλες');
    await temp3.should.equal(true);
    temp3=await checkInListbox(driver,temp2,'Ενεργός');
    await temp3.should.equal(true);
    temp3=await checkInListbox(driver,temp2,'Ανενεργός');
    await temp3.should.equal(true);
    //check that the options are 3
    temp=0;
    for(temp3 of temp2){
      temp=temp+1;
    }
    await temp.should.equal(3);


    await driver.findElement(By.tagName('body')).sendKeys(Key.ESCAPE);
    //check the field value 
    temp1=await lib.getValueCss(driver,usersLocs.u_searchStatus);
    await temp1.should.equal(value);
  }

  async function checkInListbox(driver,listbox,value){
    let tmp,tmp1;
    for(tmp of listbox){
      tmp1=await tmp.getText();
      if(tmp1==value){
        return true;        
      }
    }
    return false;
  }

  //input. for no inp:name:'',off:null,rol:'Όλοι',stat:'Ολες'
  async function setSearchField(driver,lname,off,rol,stat){
    const {Builder, By, Key, until}= require("selenium-webdriver"); 
    //lName 
    await lib.setFieldCss(driver,usersLocs.u_searchLName,lname);
    //set office
    await lib.clikCss(driver,usersLocs.u_searchOffice);
    temp1= await driver.findElement(By.id('kyepix_office_id-listbox'));
    temp2=await temp1.findElements(By.className('MuiAutocomplete-option'));
    if(off==null){
      temp3=await lib.getValueCss(driver,usersLocs.u_searchOffice);
      if(temp3!=''){
        
        for (temp3 of temp2){
          temp4=await temp3.getText();
          if(temp4==off){
            await temp3.click();
            break;
          }
        }
      }
    };

    //set role
    await lib.clikCss(driver,usersLocs.u_searchRole);
    temp1= await driver.findElement(By.id('menu-roles'));
    temp2=await temp1.findElements(By.className('MuiMenuItem-root MuiMenuItem-gutters'));
    if(rol==null){
      rol=='Όλοι';
    };
    for (temp3 of temp2){
      temp4=await temp3.getText();
      if(temp4==rol){
        await temp3.click();
        break;
      }
    }

    //set status
    await lib.clikCss(driver,usersLocs.u_searchStatus);
    temp1= await driver.findElement(By.id('menu-enabled'));
    temp2=await temp1.findElements(By.className('MuiMenuItem-root MuiMenuItem-gutters'));
    if(stat==null){
      stat=='Όλες';
    };
    for (temp3 of temp2){
      temp4=await temp3.getText();
      if(temp4==stat){
        await temp3.click();
        break;
      }
    }

    await checkSearchField(driver,lname,off,rol,stat)

  }
  
  module.exports = { usersLocs, checkUserTab, checkTexts, checkSearchField, 
    setSearchField,checkInListbox,checkSearchRole,checkSearchStatus};
  