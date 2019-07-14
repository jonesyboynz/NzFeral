class AppController {

	static Apply(settings){
		Debug.Message("app-running");
		AppController.LoadMutatorsFor(settings).forEach(function(unblocker){
			unblocker.Apply();
		});
	}

	static LoadMutatorsFor(settings){
		var mutators = [];
		if (settings.UnlockPremium){
			mutators.push(new Unblocker(document));
			mutators.push(new UnblockerLegacy(document));
		}
		if (settings.HideOffers){
			mutators.push(new OffersHider(document));
		}
		if (settings.HideRelated){
			mutators.push(new RelatedContentHider(document));
		}
		if (settings.HideAds){
			mutators.push(new AdHider(document));
		}
		if (settings.HideSocalMedia){
			mutators.push(new SocialMediaHider(document));
		}
		return mutators;
	}

	static HandleRequests(request){
		Debug.Message("app-message: " + request.message);
		if (request.message === "run"){
			AppStorage.WithSettings(function(settings){
				AppController.Run(settings);
			});
		}
		if (request.message === "refresh"){
			AppStorage.Refresh();
		}
	}

	static Run(){
		AppStorage.WithSettings(function(settings){
			AppController.Apply(settings);
		});	
	}

	static Initalise(){
		chrome.runtime.onMessage.addListener(
			function(request, sender, sendResponse) {
				AppController.HandleRequests(request);
			});

		AppStorage.Debug();

		AppStorage.WithSettings(function(settings){
			if (settings.Autorun){
				AppController.Run();
				setTimeout(AppController.Run, 3000);
			}
		});	
	}

}


AppController.Initalise();
