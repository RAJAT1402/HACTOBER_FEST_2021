let fs = require("fs");

function fn (path,content){
    let count = 1;
    for(let i=0; i<content.length;i++){
        if(content[i] != ""){
            content[i]=(count +  " " + content[i] );
            count++;
        }
        else{
            content[i]= (content[i]);
        } 
    }
    return content.join("\n");
}
module.exports = {
      fxn : fn
};