function ClickToggleAuto(e) {
	WithAutoRunValue(function(value){
		SetAutoRunValue(!value);
		SetAutoRunText(!value);
	});
	window.close();
}


function ClickRun(e) {
	SendToContent("run");
	window.close();
}


function SendToContent(flag, responseMethod){ 
	chrome.tabs.query({active: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {message: flag}, responseMethod);
	});	
}


function SetAutoRunText(value){
	if (value){
		document.getElementById("autorun_toggle").innerHTML = "Disable autorun";
	}
	else{
		document.getElementById("autorun_toggle").innerHTML = "Enable autorun";
	}
}


function Initalise(){
	document.addEventListener('DOMContentLoaded', function () {
		WithAutoRunValue(function(value){
			SetAutoRunText(value);
		});
		document.getElementById("autorun_toggle").style.display = '';
		document.getElementById("autorun_toggle").addEventListener('click', ClickToggleAuto);
		document.getElementById("run").addEventListener('click', ClickRun);
		});
}

Initalise();
