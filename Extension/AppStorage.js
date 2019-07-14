class AppStorage
{
	static Save(settings){
		chrome.storage.local.set({"NZ_FERAL_AUTORUN": settings});
	}

	static WithSettings(callback){
		AppStorage.AwaitingCallback.methods.push(callback);
		chrome.storage.local.get("NZ_FERAL_AUTORUN", function(result){
			var settings = result["NZ_FERAL_AUTORUN"];
			if (settings === undefined){
				settings = new Settings();
				AppStorage.Save(settings);
			}
			AppStorage.AwaitingCallback.methods.pop()(settings);
		});
	}

	static Refresh(){
		AppStorage.Save(new Settings());
	}

	static Debug(){
		AppStorage.WithSettings(function(settings){
			Debug.Message("Settings"
				+ "\nAutorun: " + settings.Autorun
				+ "\nUnlockPremium: " + settings.UnlockPremium
				+ "\nHideOffers: " + settings.HideOffers
				+ "\nHideFx: " + settings.HideFx
				+ "\nHideAds: " + settings.HideAds
				+ "\nHideSocialMedia: " + settings.HideSocalMedia);
		});
	}

	static AwaitingCallback = {methods: []}
}