const pptr = require('puppeteer');
const ans = require('./answer');
const confidential = require('./confidential');
let browserstartpromise = pptr.launch({
    headless : false,
    defaultViewport : null,
    args : [ "--start-maximized" , "--disable-notifications" ]

    
});
(async function () {
    try{ 
        let browserobj = await browserstartpromise;
            console.log("browser started");
            

            browser = browserobj;
            let page = await browserobj.newPage();
            await page.goto("https://www.google.com/");
            await page.type("input[title='Search']","Hackerrank",{delay: 100})
            await page.keyboard.press('Enter',{delay : 100 });
            await Waitandclick(".LC20lb.DKV0Md",page);
           await Waitandclick("#menu-item-2887",page); 
           await Waitandclick("a[href='https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button']",page);
            await page.waitForSelector("#input-1",{visible : true}) 
            await page.type("#input-1",confidential.email,{delay: 100})
           await page.waitForSelector("#input-2",{visible : true})
           await page.type("#input-2",confidential.password,{delay: 100})
          await page.keyboard.press('Enter',{delay : 500 });
          await Waitandclick("#base-card-1-link",page);
         await  Waitandclick('a[data-attr1="warmup"]',page);
          await page.waitForSelector(".challenge-submit-btn");
        let quesarr =  await  page.$$(".challenge-submit-btn");
        for(let i=0;i<quesarr.length;i++) {
            await solveques(quesarr[i],ans.code[i],page);
        }
    } catch (err){ 
        console.log(err);
    } 
})()



function Waitandclick(selector,cpage) {
    (async function(){
        try{ 
            await cpage.waitForSelector(selector,{visible : true})
            await cpage.click(selector,{delay : 200});
        } catch(err){ console.log(err); 

        }
    })();
    
    }

function solveques(quesno,anscode,page) { 
    (async function(){
        try{ 
            await quesno.click()
           await page.waitFor(3000);
            Waitandclick(".checkbox-input",page);
            page.type(".input.text-area.custominput.auto-width",anscode);
        //    input text-area custominput auto-width
           await page.keyboard.down('Control');
           await page.keyboard.press('A');
           await page.keyboard.press('X');
           await page.keyboard.up('Control');
           await page.click(".monaco-scrollable-element.editor-scrollable.vs");
           await page.keyboard.down('Control');
           await page.keyboard.press('A');
           await page.keyboard.press('V');
           await page.keyboard.up('Control');
           await Waitandclick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
           await page.waitForSelector(".ui-card.submission-congratulations.ui-layer-2");
           await page.click('a[data-attr1="Warm-up Challenges"]')
        }catch(err){
            console.log(err);
        }
    })();
        }