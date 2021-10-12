let puppeteer  = require("puppeteer");
let answer = require("./solution");

let browserStartPromise = puppeteer.launch({

    headless: false,
    
    defaultViewport: null,
    args: ["--start-maximized" , "--disable-notifications"]
});
let page ,browser; 
(async function fn(){
    let browserObj = await browserStartPromise;
    console.log("Browser opened");
    browser = browserObj;
    page = await browserObj.newPage();
    await page.goto("https://www.google.com/");
    await page.type("input[title='Search']","hackerrank");
    await page.keyboard.press('Enter' ,{delay:100});
    await  WaitandClick(".LC20lb.DKV0Md",page);
    await  WaitandClick("#menu-item-2887",page);
    await WaitandClick("a[href= 'https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button']",page);
    await  page.waitForSelector("#input-1", {visible: true});
    await page.type("#input-1","yokose8072@mtlcz.com",{delay:100});
    await  page.waitForSelector("#input-2", {visible: true});
    await page.type("#input-2","valorant",{delay:100});
    await page.keyboard.press('Enter',{delay:500});
    await WaitandClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled",page);
    await WaitandClick('a[data-attr1="warmup"]',page);
     await page.waitForSelector(".content--list_body");
    let Allquestion = await page.$$(".content--list_body");
    await questionSolver(answer.array[0],page,Allquestion[0])
    //  for(let i = 1; i<Allquestion.length; i++) {
    // await questionSolver(answer.array[i],page,Allquestion[i]);
    // }

})()
// function WaitandClick(Selector,cpage){
//     return new Promise(function(resolve,reject){
//     let WaitForModalPromise =
//     cpage.waitForSelector(Selector, {visible: true});
//     WaitForModalPromise.then(function(){
//      let clickmodal = cpage.click(Selector ,{delay:100})
//      return clickmodal;
//      }).then(function (){
//          resolve();
//      }).catch(function(err){
//          reject(err);
//      })
//     })
// }
function WaitandClick(selector, cPage) {
    (async function fn() {
      try {
        await cPage.waitForSelector(selector, { visible: true });
        await cPage.click(selector);
      } catch (error) {
        console.log("Error" + error);
      }
    })();
  }
function questionSolver(answer,page,Allquestion){
    (async function fn(){
        try {
            await Allquestion.click();
        await page.waitFor(3000)
        await page.click(".checkbox-wrap",page);
        await page.type(".custom-input.theme-old.size-medium",answer);
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.press('x');
        await  page.keyboard.up('Control');
        await page.click(".hr-monaco-editor-parent",page);
        await  page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.press('v');
        await  page.keyboard.up('Control');
        await page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
        await page.waitForSelector(".ui-card.submission-congratulations.ui-layer-2",page);
        await page.click('a[data-attr1="Warm-up Challenges"]');
        await page.waitFor(3000)
    }
            
         catch (error) {
            console.log("err",error);
            
        }
    })()
    

}
// function questionSolver(answer,page,Allquestion){
//     return new Promise(function(resolve,reject){ 
        
//            let clickQuestion = Allquestion.click();
//             clickQuestion.then (function(){
//             let wait = page.waitFor(3000)
//             return wait;
//         }).then (function(){
//             let waitForElementPromise = WaitandClick(".checkbox-wrap",page);
//              return waitForElementPromise
//     }).then (function(){
//             let waitForElementPromise = page.type(".custom-input.theme-old.size-medium",answer);
//             return waitForElementPromise;
//            }).then(function (){ 
//              let ctrl = page.keyboard.down('Control');
//              return ctrl;
//             }).then(function (){ 
//              let ctrl = page.keyboard.press('A');
//             return ctrl;
//            }).then(function (){ 
//             let ctrl = page.keyboard.press('x');;
//             return ctrl;
//            }).then(function (){ 
//                 let ctrl = page.keyboard.up('Control');
//                 return ctrl;
//            })
//         .then(function (){ 
//             console.log("wait again");
//             let waitForElementPromise = WaitandClick(".hr-monaco-editor-parent",page);
//             return waitForElementPromise;
//         }).then(function (){ 
//          let ctrl = page.keyboard.down('Control');
//          return ctrl;
//         }).then(function (){ 
//             let ctrl = page.keyboard.press('A');
//             return ctrl;
//            }).then(function (){ 
//             let ctrl = page.keyboard.press('v');
//             return ctrl;
//            }).then(function (){ 
//             let ctrl = page.keyboard.up('Control');
//             return ctrl;
//         }).then(function (){ 
//             console.log("wait again");
//             let waitForElementPromise = WaitandClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
//             return waitForElementPromise;
//         }).then(function (){ 
//             console.log("wait again");
//             let waitForElementPromise = page.waitForSelector(".ui-card.submission-congratulations.ui-layer-2",page);
//             return waitForElementPromise;
//         }).then(function (){ 
//             console.log("wait again");
//             let waitForElementPromise = page.click('a[data-attr1="Warm-up Challenges"]');
//             return waitForElementPromise;
//         }).then (function(){
//             let wait = page.waitFor(3000)
//             return wait;
//         }).then(function (){
//             resolve();
//         }).catch(function(err){
//             reject(err);
        
//     })
// })
//     }

           