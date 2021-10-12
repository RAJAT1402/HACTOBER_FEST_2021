let fs = require("fs");


function fn (path){
    let Allfiles = fs.readdirSync(path);
    for(let i=0;i<Allfiles.length;i++){
        console.log(  "|-" +Allfiles[i]);
    }
    

}
module.exports = {
      fxn : fn
};