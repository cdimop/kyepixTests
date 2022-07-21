//css
const preLoginBtn='.MuiButton-root';
const lib= require("./lib");

async function preLogIn(driver){
    lib.clikCss(driver,preLoginBtn);
}

module.exports={preLogIn}