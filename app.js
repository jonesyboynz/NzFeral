/*global chrome*/

//window.addEventListener("beforeunload", function() { debugger; }, false);

function unblocker(){
	unblocker_main();
	unblocker_legacy();
}

chrome.runtime.onMessage.addListener(
	(request, sender, sendResponse) => {
		console.log(request.message)
		if (request.message === "run"){
			unblocker();
		}
		if (request.message === "auto_on"){
			console.log("ON")
		}
		if (request.message === "auto_off"){
			console.log("OFF")
		}
		sendResponse();
	});

//unblocker();
