function Unblocker(){
	DebugMessage("running");
	UnblockerMain();
	unblocker_legacy();
}


function Initalise(){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			DebugMessage("message: " + request.message);
			if (request.message === "run"){

				Unblocker();
			}
		});

	WithAutoRunValue(function(value){
		DebugMessage("auto=" + value);
	});

	WithAutoRunValue(function(value){
		if (value){
			Unblocker();
		}
	});	
}

Initalise();
