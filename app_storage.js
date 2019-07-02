function SetAutoRunValue(value){
	chrome.storage.local.set({"NZ_FERAL_AUTORUN": value});
}


var awaitingCallback = [];


function WithAutoRunValue(callback){
	awaitingCallback.push(callback);
	chrome.storage.local.get("NZ_FERAL_AUTORUN", function(result){
		var value = result["NZ_FERAL_AUTORUN"];
		if (value === undefined){
			console.log("undefined.", result)
			SetAutoRunValue(true);
			value = true;
		}
		awaitingCallback.pop()(value);
	});
}
