let fs = require("fs");

function fn (path,content){    
      for(let i=0;i<content.length;i++){
        if(content[i]=="" && content[i-1]==""){
            content[i]="";
        }else if(content[i]=="" && content[i-1]==null){
                content[i]="";
        }
    }
    let temp=[];
    for(let i=0;i<content.length;i++){
        if(content[i]!=""){
            temp.push(content[i]);
        }
    }
    content=temp;
    return content;
}
module.exports = {
      fxn : fn,
};