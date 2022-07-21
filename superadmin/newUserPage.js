const nuLoc = {
  //id
  nu_fName: "first_name",
  nu_lName: "last_name",
  nu_phoneNum: "phone_number",
  nu_email: "email",
  nu_officeName: "ΚΥΕΠΙΧ",
  nu_userStatus: "Κατάσταση",
  nu_role: "Ρόλος",
  nu_snackbar: "notistack-snackbar",
  nu_alertBoxTitle: "alert-dialog-title",
  nu_alertBoxDescr: "alert-dialog-description",

  //css
  nu_formTitle: "h1.MuiTypography-root",
  nu_formSubtitle: ".MuiTypography-subtitle1",
  nu_fNameTitle:
    ".css-1bb9xp4 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)",
  nu_lNameTitle:
    "div.css-rfnosa:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)",
  nu_phoneNumTitle:
    "div.MuiGrid-root:nth-child(3) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)",
  nu_emailTitle:
    "div.MuiGrid-root:nth-child(4) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)",
  nu_officeNameTitle:
    "div.MuiGrid-root:nth-child(5) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)",
  nu_roleTitle:
    "div.MuiGrid-root:nth-child(6) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)",
  nu_userStatusTitle:
    "div.MuiGrid-root:nth-child(7) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)",
  nu_fNameAlert:
    ".css-1bb9xp4 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)",
  nu_lNameAlert:
    "div.css-rfnosa:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)",
  nu_phoneNumAlert:
    "div.MuiGrid-root:nth-child(3) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)",
  nu_emailAlert:
    "div.MuiGrid-root:nth-child(4) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)",
  nu_statusCheckbox: ".PrivateSwitchBase-input",
  nu_statusCheckboxText: "p.MuiTypography-root:nth-child(2)",
  nu_alertBoxNo: ".MuiButton-textGray",
  nu_alertBoxYes: "button.MuiButton-root:nth-child(2)",

  //className
  nu_createBtnCN: "MuiLoadingButton-root MuiButton-root",
  nu_backBtn: "MuiButton-root MuiButton-text",
  nu_cancelBtnCN: "MuiButton-root MuiButton-outlined",
};
const lib = require("./lib");
var temp1, temp2, temp3, temp4;
async function checkFNameField(driver, inp) {
  const { Builder, By, Key, until } = require("selenium-webdriver");
  temp1 = await lib.getValueCss(driver, nuLoc.nu_fNameTitle);
  await temp1.should.equal("Όνομα");
  temp1 = await lib.getValueId(driver, nuLoc.nu_fName);
  await temp1.should.equal(inp);
}
async function checkLNameField(driver, inp) {
  temp1 = await lib.getValueCss(driver, nuLoc.nu_lNameTitle);
  await temp1.should.equal("Επώνυμο");
  temp1 = await lib.getValueId(driver, nuLoc.nu_lName);
  await temp1.should.equal(inp);
}
async function checkPhoneNumField(driver, inp) {
  temp1 = await lib.getValueCss(driver, nuLoc.nu_phoneNumTitle);
  await temp1.should.equal("Tηλέφωνο");
  temp1 = await lib.getValueId(driver, nuLoc.nu_phoneNum);
  await temp1.should.equal(inp);
}
async function checkEmailField(driver, inp) {
  temp1 = await lib.getValueCss(driver, nuLoc.nu_emailTitle);
  await temp1.should.equal("Διεύθυνση E-mail");
  temp1 = await lib.getValueId(driver, nuLoc.nu_email);
  await temp1.should.equal(inp);
}
async function checkOfficeNameField(driver, inp) {
  temp1 = await lib.getValueCss(driver, nuLoc.nu_officeNameTitle);
  await temp1.should.equal("ΚΥΕΠΙΧ");
  temp1 = await lib.getTextId(driver, nuLoc.nu_officeName);
  await temp1.should.equal(inp);
  temp1 = await lib.isEnabledField(driver, nuLoc.nu_officeName);
  await temp1.should.equal("true");
}
async function checkUserStatusField(driver, inp) {
  temp1 = await lib.getValueCss(driver, nuLoc.nu_userStatusTitle);
  await temp1.should.equal("Κατάσταση");
  temp1 = await lib.getTextId(driver, nuLoc.nu_userStatus);
  await temp1.should.equal(inp);
  temp1 = await lib.isEnabledField(driver, nuLoc.nu_userStatus);
  await temp1.should.equal("false");
}
async function checkRoleField(driver, inp) {
  temp1 = await lib.getValueCss(driver, nuLoc.nu_roleTitle);
  await temp1.should.equal("Ρόλος");
  temp1 = await lib.getTextId(driver, nuLoc.nu_role);
  await temp1.should.equal(inp);
  temp1 = await lib.isEnabledField(driver, nuLoc.nu_role);
  await temp1.should.equal("true");
}
async function checkBtns(driver, createBtnStatus) {
  await checkBackBtn(driver);
  await checkCancelBtn(driver);
  await checkCreateBtn(driver, createBtnStatus);
}

async function checkCreateBtn(driver, createBtnStatus) {
  //console.log('createBtn');
  temp1 = await lib.getTextClassName(driver, nuLoc.nu_createBtnCN);
  await temp1.should.equal("Δημιουργία");
  temp1 = await lib.isEnabledBtnClassName(driver, nuLoc.nu_createBtnCN);
  await temp1.should.equal(createBtnStatus);
}

async function checkBackBtn(driver) {
  //console.log('backBtn');
  temp1 = await lib.getTextClassName(driver, nuLoc.nu_backBtn);
  await temp1.should.equal("Πίσω");
  temp1 = await lib.isEnabledBtnClassName(driver, nuLoc.nu_backBtn);
  await temp1.should.equal(true);
}

async function checkCancelBtn(driver) {
  //console.log('cancelBtn');
  temp1 = await lib.getTextClassName(driver, nuLoc.nu_cancelBtnCN);
  await temp1.should.equal("Ακύρωση");
  temp1 = await lib.isEnabledBtnClassName(driver, nuLoc.nu_cancelBtnCN);
  await temp1.should.equal(true);
}

async function checkPageTexts(driver) {
  temp1 = await lib.getValueCss(driver, nuLoc.nu_formTitle);
  await temp1.should.equal("Δημιουργία προφίλ χρήστη γραφείου ΚΥΕΠΙΧ");
  temp1 = await lib.getValueCss(driver, nuLoc.nu_formSubtitle);
  await temp1.should.equal(
    "Συμπληρώστε τα στοιχεία του χρήστη γραφείου ΚΥΕΠΙΧ"
  );
}

//checked : "true" || "false"
async function checkStatusCheckBox(driver, checked) {
  const { Builder, By, Key, until } = require("selenium-webdriver");
  temp1 = await lib.getValueCss(driver, nuLoc.nu_statusCheckboxText);
  await temp1.should.equal(
    "Αυτόματη αλλαγή κατάστασης χρήστη ΚΥΕΠΙΧ σε 'ΕΝΕΡΓΟΣ' μετά απο την πρώτη σύνδεση στο σύστημα"
  );
  temp1 = await driver
    .findElement(By.css(nuLoc.nu_statusCheckbox))
    .getAttribute("value");
  temp2 = checked;
  //console.log(temp2);
  await temp1.should.equal(temp2);
}

async function setOffice(driver, ofName) {
  const { Builder, By, Key, until } = require("selenium-webdriver");
  temp1 = await lib.getTextId(driver, nuLoc.nu_officeName);
  if (temp1 != ofName) {
    await lib.clikId(driver, nuLoc.nu_officeName);
    temp1 = await driver.findElements(
      By.className("MuiList-root MuiList-padding MuiMenu-list css-r8u8y9")
    );
    for (temp2 of temp1) {
      temp3 = await temp2.getAttribute("role");
      if (temp3 == "listbox") {
        //console.log('mpike')
        temp4 = temp2;
      }
    }
    temp1 = await temp4.findElements(
      By.className(
        "MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-1imvk2h"
      )
    );
    for (temp2 of temp1) {
      temp3 = await temp2.getText();
      if (temp3 == ofName) {
        await temp2.click();
      }
    }
  }
  //check the office name field
  temp1 = await lib.getTextId(driver, nuLoc.nu_officeName);
  await temp1.should.equal(ofName);
}

async function setRole(driver, role) {
  const { Builder, By, Key, until } = require("selenium-webdriver");
  temp1 = await lib.getTextId(driver, nuLoc.nu_role);
  if (temp1 != role) {
    //console.log('mpike')
    await lib.clikId(driver, nuLoc.nu_role);
    temp1 = await driver.findElements(
      By.className("MuiList-root MuiList-padding MuiMenu-list css-r8u8y9")
    );
    for (temp2 of temp1) {
      temp3 = await temp2.getAttribute("role");
      if (temp3 == "listbox") {
        //console.log('mpike')
        temp4 = temp2;
      }
    }
    temp1 = await temp4.findElements(
      By.className(
        "MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-1imvk2h"
      )
    );
    for (temp2 of temp1) {
      temp3 = await temp2.getText();
      if (temp3 == role) {
        await temp2.click();
      }
    }
  }
  //check the office name field
  temp1 = await lib.getTextId(driver, nuLoc.nu_role);
  await temp1.should.equal(role);
}

async function setStatusCheckbox(driver, status) {
  const { Builder, By, Key, until } = require("selenium-webdriver");
  temp1 = await driver
    .findElement(By.css(nuLoc.nu_statusCheckbox))
    .getAttribute("value");
  if (temp1 != status) {
    await lib.clikCss(driver, nuLoc.nu_statusCheckbox);
  }

  //check checkbox value
  temp1 = await driver
    .findElement(By.css(nuLoc.nu_statusCheckbox))
    .getAttribute("value");
  await temp1.should.equal(status);
}

async function checkAlerts(driver) {
  temp1 = await lib.isVisible1(driver, nuLoc.nu_fNameAlert);
  await temp1.should.equal(false);
  temp1 = await lib.isVisible1(driver, nuLoc.nu_lNameAlert);
  await temp1.should.equal(false);
  temp1 = await lib.isVisible1(driver, nuLoc.nu_phoneNumAlert);
  await temp1.should.equal(false);
  temp1 = await lib.isVisible1(driver, nuLoc.nu_emailAlert);
  await temp1.should.equal(false);
}

async function checkAlertBox(driver, alertBoxTitle, alertBoxDesciption) {
  temp1 = await lib.getTextId(driver, nuLoc.nu_alertBoxTitle);
  await temp1.should.equal(alertBoxTitle);
  temp1 = await lib.getTextId(driver, nuLoc.nu_alertBoxDescr);
  await temp1.should.equal(alertBoxDesciption);
  temp1 = await lib.getValueCss(driver, nuLoc.nu_alertBoxNo);
  await temp1.should.equal("ΟΧΙ");
  temp1 = await lib.isEnabledBtnCss(driver, nuLoc.nu_alertBoxNo);
  await temp1.should.equal(true);
  temp1 = await lib.getValueCss(driver, nuLoc.nu_alertBoxYes);
  await temp1.should.equal("ΝΑΙ");
  temp1 = await lib.isEnabledBtnCss(driver, nuLoc.nu_alertBoxYes);
  await temp1.should.equal(true);
}

module.exports = {
  nuLoc,
  checkFNameField,
  checkLNameField,
  checkPhoneNumField,
  checkEmailField,
  checkOfficeNameField,
  checkUserStatusField,
  checkRoleField,
  checkBtns,
  checkPageTexts,
  checkCancelBtn,
  checkBackBtn,
  checkCreateBtn,
  checkStatusCheckBox,
  setOffice,
  setRole,
  setStatusCheckbox,
  checkAlerts,
  checkAlertBox,
};
