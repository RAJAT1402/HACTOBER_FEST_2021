
const pptr = require('puppeteer');
const ans = require('./answer');
const confidential = require('./confidential');
let browserstartpromise = pptr.launch({
    headless : false,
    defaultViewport : null,
    args : [ "--start-maximized" , "--disable-notifications" ]

    
});
let page ;
browserstartpromise.then(function (browserobj){
    console.log("browser started");
    let browsertabopen = browserobj.newPage();
    browser = browserobj;
    return browsertabopen;
}).then( function (newtab){
    page = newtab
        console.log("new tab opened")
        let gpage = newtab.goto("https://www.google.com/");
        return gpage;
}).then( function () {
    console.log("new page loaded");
    let waitfortype = page.type("input[title='Search']","Hackerrank",{delay: 100})
    return waitfortype;
})
.then( function () {
    let presseneter = page.keyboard.press('Enter',{delay : 100 });
    console.log("hackerrank opened");
    return presseneter;
})

.then( function () {
  
    let homepageofhr = Waitandclick(".LC20lb.DKV0Md",page);
    return homepageofhr;
})

.then( function () {
  
    let clickonlogin = Waitandclick("#menu-item-2887",page);
    return clickonlogin;
})
.then( function () {
  
    let finallogin = Waitandclick("a[href='https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button']",page);
    return finallogin;
})

 .then( function (){
    let waitforelement1 = page.waitForSelector("#input-1",{visible : true})
    return waitforelement1;
 })

 .then( function () {
    console.log("login box opened");
    let waitfortype = page.type("#input-1",confidential.email,{delay: 100})
    return waitfortype;
})
.then( function (){
    let waitforelement1 = page.waitForSelector("#input-2",{visible : true})
    return waitforelement1;
 })

 .then( function () {
    
    let waitfortype = page.type("#input-2",confidential.password,{delay: 100})
    return waitfortype;
})
.then( function () {
    let pressenter = page.keyboard.press('Enter',{delay : 500 });
    console.log("login successfull");
    return pressenter;
})
.then( function () {
    let finallogin = Waitandclick("#base-card-1-link",page);
    return finallogin;
})
.then( function () {
  
    let finallogin = Waitandclick('a[data-attr1="warmup"]',page);
    return finallogin;
})
.then( function () {
    let waitforques = page.waitForSelector(".challenge-submit-btn");
    return waitforques;
})
.then( function () {
  
    let queslist = page.$$(".challenge-submit-btn");
    return queslist;
})

.then( function (quesarr) {
    console.log(quesarr.length);
     let quessolved = solveques(quesarr[0],ans.code[0],page);
    for(let i=1; i<quesarr.length; i++) {
         console.log("insideloop");
       quessolved = quessolved.then(function () {
            return solveques(quesarr[i],ans.code[i],page);  
       })
       
    }
    quessolved.then(function(){
        return quessolved;
    })
    // console.log("outsideloop");
    // return quessolved;
})
// .then( function (quesarr) {
//     let quessolved = solveques(quesarr[1],ans.code[1],page);
//    // for(let i=1; i<quesarr.length; i++) {
//    //    quessolved = quessolved.then(function () {
//    //         return solveques(quesarr[i],ans.code[i],page);  
//    //    })
      
//    // }
//    return quessolved;
// })



function Waitandclick(selector,cpage) {
    return new Promise (function (resolve ,reject ){
         let waitforelement = cpage.waitForSelector(selector,{visible : true})
         waitforelement.then( function(){
         let clickonhomepage = cpage.click(selector,{delay : 200});
         return clickonhomepage
         }).then( function() {
                resolve();
         }).catch ( function(err){
             reject(err);
         })
    }
    )
}
function solveques(quesno,anscode,page) { 
    return new Promise (function (resolve,reject) {
            let clickonques = quesno.click()
             clickonques
        .then( function(){
                 let waitforpage = page.waitFor(3000);
                 return waitforpage
             })
            .then( function(){
                let finallogin = Waitandclick(".checkbox-input",page);
        return finallogin
            })
        .then( function () {
            let finallogin = page.type(".input.text-area.custominput.auto-width",anscode);
            return finallogin;
        })
        .then( function () {
            let presseneter = page.keyboard.down('Control');
            return presseneter;
        })
        .then( function () {
            let presseneter = page.keyboard.press('A');
            return presseneter;
        })
        .then( function () {
            let presseneter = page.keyboard.press('X');
            return presseneter;
        })
        .then( function () {
            let presseneter = page.keyboard.up('Control');
            return presseneter;
        })
        .then( function () {
            let finallogin = page.click(".monaco-scrollable-element.editor-scrollable.vs");
            return finallogin;
        })
        .then( function () {
            let presseneter = page.keyboard.down('Control');
            return presseneter;
        })
        .then( function () {
            let presseneter = page.keyboard.press('A');
            return presseneter;
        })
        .then( function () {
            let presseneter = page.keyboard.press('V');
            return presseneter;
        })
        .then( function () {
            let presseneter = page.keyboard.up('Control');
            return presseneter;
        })
        .then( function () {
          
            let finallogin = Waitandclick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
            return finallogin;
        })
        .then( function(){
          let waitforpage = page.waitForSelector(".ui-card.submission-congratulations.ui-layer-2");
          return waitforpage
           })
        .then( function () {
            let backpage = page.click('a[data-attr1="Warm-up Challenges"]')
            return backpage;
            
        }).then( function () {
            let wait = page.waitFor(3000)
            return wait
        })
        .then( function () {
            resolve();
        }).catch( function (err) {
            reject(err);
        })
    })
}