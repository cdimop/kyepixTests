
//id
const usernameInput='username',
passwordInput= 'password',
logInBtn= 'btn-info',

no_publicAv='Διαθεσιμότητα στο κοινό',
no_openHours= 'work_hours',
no_title='title',
no_status='Κατάσταση',
no_addressStreet='address_street',
no_addressNo='address_street_number',
no_addressZc='address_zip_code',
no_phoneNo='phone_number',
no_email= 'email',
no_fax='fax_number',
no_createBtn= 'mui-18';


const lib= require("./lib.js");


async function logIn(driver,username,password){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    await lib.setField(driver,usernameInput,username);
    await lib.setField(driver,passwordInput,password);
    await lib.clikId(driver,logInBtn);
    //await driver.sleep(1500);
};


module.exports={logIn}