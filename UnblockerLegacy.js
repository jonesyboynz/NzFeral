//V1.0
//Not sure if any articles still use this. But i'll keep it for now just in case!

class UnblockerLegacy extends MutatorBase
{
	constructor(document){
		super(document);
	}

	Apply(){
		var paywall = this.document.querySelector("div.premium-content");
		if (paywall !== null){
			paywall.classList.remove("premium-content");
		}
	}
}
