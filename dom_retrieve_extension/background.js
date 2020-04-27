

// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent); 

    // NOTE: For YouTube DOM, it seems like "aria-label" is the identifier for video titles
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {

    // Regex-pattern to check URLs against.
    // It matches URLs like: http[s]://[...]stackoverflow.com[...]
    var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

    // ...check the URL of the active tab against our pattern and...
    if (urlRegex.test(tab.url)) {
        // ...if it matches, send a message specifying a callback too
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
    }

});

// -------------------

// Run function when web page loaded
// reference: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/onCompleted
chrome.webNavigation.onCompleted.addListener(function(details) {
    // alert("This is my favorite website!");
    // ...if it matches, send a message specifying a callback too
    chrome.tabs.sendMessage(details.tabId, {text: 'report_back'}, doStuffWithDom);
}, {url: [{urlMatches : 'https://www.youtube.com/'}]});