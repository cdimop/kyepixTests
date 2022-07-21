var Page = require('./base2page');
var locator = require('../utils/locators')
var alertFailTxt= locator.alertFailTxt;
var logInBtn=locator.logInBtn;
var usernameInput=locator.usernameInput;
var passwordInput=locator.passwordInput;
var logInBtn=locator.logInBtn;
var gemiBtn=locator.gemiBtn;
var preLoginBtn=locator.preLoginBtn;
var ggpsBtn=locator.ggpsBtn;
//let kappa = new Page();
Page.prototype.clickPreLogin=async function(){
    return this.find(preLoginBtn).click();
};
Page.prototype.clickGemiBtn=async function(){
    return this.find(gemiBtn).click();
};
Page.prototype.credSubmit=async function(usnm,pswr){
    this.write(usernameInput,usnm);
    
    this.write(passwordInput,pswr);
    return this.find(logInBtn).click();
    // this.write(usernameInput,this.fake().email);
    // this.write(passwordInput,this.fake().password);
    // return{
    //     opacity: this.find(requestInviteBtn).getCssValue('opacity'),
    //     state: this.find(requestInviteBtn).isEnabled()
    // }
};
Page.prototype.clickGgpsBtn=async function(){
    return this.find(ggpsBtn).click();
};
Page.prototype.alertFail=async function(){    
    return this.find(alertFailTxt).getText();
};


module.exports= Page;