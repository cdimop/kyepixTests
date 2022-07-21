const toLogIn = require("./firstPage");
const logInPage = require("./logInPage");
const saFPage=require("./saFirstPage");
const noPage=require("./newOfficePage");
const lib=require("./lib");
const ofs=require("./offices");
const d=require("./data");
var driver;
var sA=3000;
var sAA=7000;
var sll=100;
var tit,title,el,temp,temp1,tmp;
async function kyepix1(){
    const {Builder, By, Key, until}= require("selenium-webdriver");
    var driver=await new Builder().forBrowser("firefox").build();  
    await driver.get("https://admin.kyepix-stage.opencluster.eu/welcome-user");
    await driver.manage().window().maximize();
    await driver.sleep(9000);  
    await toLogIn.preLogIn(driver);  
    await driver.sleep(9000);  
    await logInPage.logIn(driver,'kdimopoulos@knowledge.gr','test1234');
    await driver.sleep(500);
    await driver.sleep(9000);
    await lib.clikId(driver,saFPage.fPLocs.offices);
    await driver.sleep(500);
    tit= await driver.findElement(By.className('svg-inline--fa fa-arrow-down ')).getAttribute('data-icon');
    //await tit.should.equal('arrow-down');
    title=await driver.findElements(By.className('MuiDataGrid-columnHeader'));
    for(el of title){
        console.log(await el.getText());
        console.log(await el.getAttribute('data-icon'));
        try{
            await el.findElement(By.className('svg-inline--fa fa-arrow-up '))
            //console.log('edw');
        }
        catch(err){
            //console.log('fail');
        }
    }
    console.log("edwwwwwwwww"+title);

}   

kyepix1();