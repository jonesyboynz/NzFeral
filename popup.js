/*global chrome*/

function send(message){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {message: message}, function(response) {});
	});	
}

function click_toggle_auto(e) {
	send("run");
	window.close();
}

function click_run(e) {
	send("auto_off");
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("pause").addEventListener('click', click_toggle_auto);
	document.getElementById("run").addEventListener('click', click_run);
	});