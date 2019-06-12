//V1.0
//Not sure if any articles still use this. But i'll keep it for now just in case!

function unblocker_legacy(){
	var paywall = document.querySelector("div.premium-content");
	if (paywall !== null){
		paywall.classList.remove("premium-content");
	}
}
