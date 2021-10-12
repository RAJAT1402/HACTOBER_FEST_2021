let pptr = require("puppeteer");
let browserstartpromise = pptr.launch({
    headless : false,
    defaultViewport : null,
    args : [ "--start-maximized" , "--disable-notifications" ]

    
});
(async function () {
    try{
        let browserobj = await browserstartpromise;
        let page = await browserobj.newPage();
         await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
       
        let element = await page.$('h1[id="title"]');
    let value = await page.evaluate(function cb(element) {
        return element.textContent;
    }
        , element);
    // all occurences F
    // 21
    console.log("Title", value)
    let someList = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
    value = await page.evaluate(
        function (element) { return element.textContent }, someList[5]);
    console.log("videos", value)
    let videos = value.split(" ")[0].trim();
    value = await page.evaluate(
        function (element) { return element.textContent }, someList[6]);
    console.log("views", value)
    // no of views -> playlist  
    // list first 100 videos console.table=>  of video number,name,// time

    // ->
    let loopcount = Math.floor(videos / 100);

    for (let i = 0; i < loopcount; i++) {
        // load start
        await page.click(".circle.style-scope.tp-yt-paper-spinner");
        // load finish
        await waitTillHTMLRendered(page);
        console.log("loaded the new videos");
    }
    // loader -> scroll 
    // video Name
    let videoNameElementList = await page.$$("a[id='video-title']");
    // console.log("videoNameElementList", videoNameElementList.length);
    // last video 
    let lastVideo = videoNameElementList[videoNameElementList.length - 1];
    // last video -> view
    await page.evaluate(function (elem) {
        elem.scrollIntoView();
    }, lastVideo);
    // time 
    let timeList = await page.$$("span[id='text']");
    console.log(timeList.length);

    let videosArr = [];
    let totaltime=0;
    for (let i = 0; i < timeList.length; i++) {
        let timeNTitleObj = await page.evaluate(getTimeAndTitle, timeList[i], videoNameElementList[i]);
        videosArr.push(timeNTitleObj);
         totaltime += timeList[i];
    }
    // console.table(videosArr);
   console.log(totaltime);

    }catch(err){
        console.log(err);
    }
})();

function getTimeAndTitle(element1, element2) {
    return {
        time: element1.textContent.trim(),
        title: element2.textContent.trim()
    }
}


// 
const waitTillHTMLRendered = async (page, timeout = 10000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;

    while (checkCounts++ <= maxChecks) {
        let html = await page.content();
        let currentHTMLSize = html.length;

        let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitFor(checkDurationMsecs);
    }
};