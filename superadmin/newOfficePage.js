const noLoc={
no_formTitle: 'h1.MuiTypography-root',
no_fieldTitleName:'.css-1bb9xp4 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleStatus:'div.css-rfnosa:nth-child(2) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleAvail:'div.MuiGrid-root:nth-child(3) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleAddress:'h3.MuiTypography-root:nth-child(4)',
no_fieldTitleStreet:'div.MuiGrid-root:nth-child(5) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleAdNum:'div.MuiGrid-root:nth-child(6) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleAdZc:'div.MuiGrid-root:nth-child(7) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleContact:'h3.MuiTypography-root:nth-child(8)',
no_fieldTitlePhone:'div.MuiGrid-root:nth-child(9) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleEmail:'div.MuiGrid-root:nth-child(10) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleFax:'div.MuiGrid-root:nth-child(11) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > p:nth-child(1)',
no_fieldTitleOpHours:'div.MuiGrid-root:nth-child(12) > div:nth-child(1) > label:nth-child(1)',
no_warningMes:'.MuiAlert-message',
no_nameAlert:'.css-1bb9xp4 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_streetAlert:'div.MuiGrid-root:nth-child(5) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_addressNoAlert:'div.MuiGrid-root:nth-child(6) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_zipCodeAlert:'div.MuiGrid-root:nth-child(7) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_phoneAlert:'div.MuiGrid-root:nth-child(9) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_emailAlert:'div.MuiGrid-root:nth-child(10) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_faxAlert:'div.MuiGrid-root:nth-child(11) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_openHoursAlert:'div.MuiGrid-root:nth-child(12) > div:nth-child(1) > p:nth-child(3) > p:nth-child(1)',
no_cancelBtn: '.MuiButton-outlined',
no_cancelWindow: '.MuiPaper-elevation24',
no_alertBoxNo:'.MuiButton-textGray',
no_alertBoxYes:'button.MuiButton-root:nth-child(2)',
//xpath
no_statusInactive:"//li[@data-value='false']",
no_statusActive:"//li[@data-value='true']",

//id
no_publicAv:'Διαθεσιμότητα στο κοινό',
no_openHours: 'work_hours',
no_title:'title',
no_status:'Κατάσταση',
no_addressStreet:'address_street',
no_addressNo:'address_street_number',
no_addressZc:'address_zip_code',
no_phoneNo:'phone_number',
no_email: 'email',
no_fax:'fax_number',
no_createBtn: 'mui-18',
no_alertDiscr: 'alert-dialog-description',
no_snackbar: 'notistack-snackbar',

//classname
no_createBtnCN:'MuiLoadingButton-root MuiButton-root',
no_backBtn:'MuiButton-root MuiButton-text',
no_cancelBtnCN:'MuiButton-root MuiButton-outlined'
}
const lib= require("./lib");

async function fillName(driver,name){
    await lib.setField(driver,noLoc.no_title,name);
} 

async function fillStreetAddress(driver,street){
    await lib.setField(driver,noLoc.no_addressStreet,street);
} 

async function fillZipCode(driver,zipCode){
    await lib.setField(driver,noLoc.no_addressZc,zipCode);
} 
async function fillAddressNum(driver,num){
    await lib.setField(driver,noLoc.no_addressNo,num);
} 

async function fillPhoneNum(driver,pNum){
    await lib.setField(driver,noLoc.no_phoneNo,pNum);
} 

async function fillEmail(driver,email){
    await lib.setField(driver,noLoc.no_email,email);
} 

async function fillFax(driver,fax){
    await lib.setField(driver,noLoc.no_fax,fax);
} 

async function fillOpenHours(driver,openHours){
    await lib.setField(driver,noLoc.no_openHours,openHours);
} 

async function setStatus(driver, openHours){
    await lib.clikId(driver,noLoc.no_status);
    if(openHours==0){
        await lib.clikXpath(driver,noLoc.no_statusInactive);
    }else if(openHours==1){
        await lib.clikXpath(driver,noLoc.no_statusActive);
    }else{
        console.log('Adiefkrinisto status. "0" gia anenergi, "1" gia energi');
    } 
}


async function createOfficeBtn(driver){
    await lib.clikId(driver,noLoc.no_createBtn);
} 

async function getNoFormTitle(driver){
    var val= await lib.getValueCss(driver,noLoc.no_formTitle);
    return val;
}

async function getNoTitleName(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleName);
    return val;
}
async function getNoTitleStatus(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleStatus);
    return val;
}
async function getNoTitleAvail(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleAvail);
    return val;
}
async function getNoTitleAddress(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleAddress);
    return val;
}
async function getNoTitleStreet(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleStreet);
    return val;
}
async function getNoTitleAdNum(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleAdNum);
    return val;
}
async function getNoTitleAdZc(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleAdZc);
    return val;
}
async function getNoTitleContact(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleContact);
    return val;
}
async function getNoTitlePhone(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitlePhone);
    return val;
}
async function getNoTitleEmail(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleEmail);
    return val;
}
async function getNoTitleFax(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleFax);
    return val;
}
async function getNoTitleOpHours(driver){
    var val= await lib.getValueCss(driver,noLoc.no_fieldTitleOpHours);
    return val;
}

async function getNoValueName(driver){
    var val= await lib.getValueId(driver,noLoc.no_title);
    return val;
}
async function getNoValueStatus(driver){
    var val= await lib.getTextId(driver,noLoc.no_status);
    return val;
}
async function getNoValueAvail(driver){
    var val= await lib.getTextId(driver,noLoc.no_publicAv);
    return val;
}
async function getNoValueStreet(driver){
    var val= await lib.getValueId(driver,noLoc.no_addressStreet);
    return val;
}
async function getNoValueAdNum(driver){
    var val= await lib.getValueId(driver,noLoc.no_addressNo);
    return val;
}
async function getNoValueAdZc(driver){
    var val= await lib.getValueId(driver,noLoc.no_addressZc);
    return val;
}
async function getNoValuePhone(driver){
    var val= await lib.getValueId(driver,noLoc.no_phoneNo);
    return val;
}
async function getNoValueEmail(driver){
    var val= await lib.getValueId(driver,noLoc.no_email);
    return val;
}
async function getNoValueFax(driver){
    var val= await lib.getValueId(driver,noLoc.no_fax);
    return val;
}
async function getNoValueOpenHours(driver){
    var val= await lib.getTextId(driver,noLoc.no_openHours);
    return val;
}
async function getNoWarningMes(driver){
    return await lib.getValueCss(driver,noLoc.no_warningMes);
}

async function getStatusCreateBtn(driver){
    return await lib.isEnabledBtn(driver,noLoc.no_createBtn);
}
async function getStatusFieldUnavail(driver){
    return await lib.isDisabledField(driver,noLoc.no_publicAv);
}
async function getNameAlert(driver){
    try {
        await lib.isVisible(driver,noLoc.no_nameAlert);
        return true;
    } catch (NoSuchElementException) {
        return false;
    }    
}
module.exports={getNameAlert,getStatusFieldUnavail,getStatusCreateBtn,getNoWarningMes,
    getNoValueOpenHours,getNoValueFax,getNoValueEmail,getNoValuePhone,
    getNoValueAdZc,getNoValueAdNum,getNoValueStreet,getNoValueAvail,getNoValueStatus,
    getNoValueName,getNoTitleOpHours,getNoTitleFax,getNoTitleEmail,
    getNoTitlePhone,getNoTitleContact,getNoTitleAdZc,getNoTitleAdNum,
    getNoTitleStreet,getNoTitleAddress,getNoTitleAvail,getNoTitleStatus,
    getNoTitleName,getNoFormTitle,fillName,fillStreetAddress,fillZipCode,
    fillAddressNum,fillPhoneNum,fillEmail,fillFax,fillOpenHours,setStatus,
    createOfficeBtn, noLoc
};





// module.exports={getNameAlert,getStatusFieldUnavail,getStatusCreateBtn,getNoWarningMes,getNoValueOpenHours,getNoValueFax,getNoValueEmail,getNoValuePhone,
//     getNoValueAdZc,getNoValueAdNum,getNoValueStreet,getNoValueAvail,getNoValueStatus,
//     getNoValueName,getNoTitleOpHours,getNoTitleFax,getNoTitleEmail,
//     getNoTitlePhone,getNoTitleContact,getNoTitleAdZc,getNoTitleAdNum,
//     getNoTitleStreet,getNoTitleAddress,getNoTitleAvail,getNoTitleStatus,
//     getNoTitleName,getNoFormTitle,fillName,fillStreetAddress,fillZipCode,
//     fillAddressNum,fillPhoneNum,fillEmail,fillFax,fillOpenHours,setStatus,createOfficeBtn}