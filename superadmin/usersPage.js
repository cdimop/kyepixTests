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
    temp1=await lib.getValueCss(driver,usersLocs.u_searchRoleTitle);
    await temp1.should.equal('Ρόλοι');
    temp1=await lib.getValueCss(driver,usersLocs.u_searchRole);
    await temp1.should.equal(role);
    //status
    temp1=await lib.getValueCss(driver,usersLocs.u_searchStatusTitle);
    await temp1.should.equal('Κατάσταση');
    temp1=await lib.getValueCss(driver,usersLocs.u_searchStatus);
    await temp1.should.equal(status);

    //search btn
    temp1=await lib.getValueCss(driver,usersLocs.u_searchBtn);
    await temp1.should.equal('Αναζήτηση');
    temp1=await lib.isEnabledBtnCss(driver,usersLocs.u_searchBtn)

  }
  
  module.exports = { usersLocs, checkUserTab, checkTexts, checkSearchField };
  