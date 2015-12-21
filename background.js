chrome.runtime.onInstalled.addListener(function() {
	  // Replace all rules ...
	  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	    // With a new rule ...
	    chrome.declarativeContent.onPageChanged.addRules([
	      {
	        // That fires when a page's URL contains a 'g' ...
	        conditions: [
	          new chrome.declarativeContent.PageStateMatcher({
	            pageUrl: { urlContains: 'youtube.com/watch' }
	          })
	        ],
	        // And shows the extension's page action.
	        actions: [ new chrome.declarativeContent.ShowPageAction() ]
	      }
	    ]);
	  });
	});
	
var kyp = {};
kyp.flag = 1;
	
chrome.pageAction.onClicked.addListener(function(tab){
  if(kyp.flag == 1){
    kyp.flag = 0;
    console.log("clicked " + tab.url);
    chrome.runtime.sendNativeMessage('com.yaswanth.example.test',  { "url": tab.url}, function(response) {
      resp = response;
      console.log("Received ");
      console.log(response);
      kyp.flag = 1;
    });
  }

//  port.postMessage();
});


