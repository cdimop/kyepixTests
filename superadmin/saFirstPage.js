//id
const fPLocs={
    newOfficeBtn :'Δημιουργία Νέου Γραφείου',
    offices:'Γραφεία ΚΥΕΠΙΧ',
    userManag:'Διαχείριση Χρηστών',
    createUser:'Δημιουργία Νέου Χρήστη',
    createAdmin:"Δημιουργία Νέου Διαχειριστή",
    cases:'Υποθέσεις',
    stats:'Στατιστικά Στοιχεία',
    expertise:'Εμπειρογνωμοσύνες'
    
}
const lib= require("./lib");

async function createNewOffice(driver){
    lib.clikId(driver,fPLocs.newOfficeBtn);
}
async function createNewuser(driver){
    lib.clikId(driver,fPLocs.createUser);
}
async function usersManag(driver){
    lib.clikId(driver,fPLocs.userManag);
}


module.exports={fPLocs,createNewOffice,createNewuser,
    usersManag}