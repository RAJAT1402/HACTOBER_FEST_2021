let fs = require("fs");

function fn (path,content){  
      for(let j=0; j<content.length-1; j++){
          console.log(j+1+ " " + content[j]);
        }
}
module.exports = {
      fxn : fn
};