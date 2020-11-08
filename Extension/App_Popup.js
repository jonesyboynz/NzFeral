class PopupEventHandlers{
	static ClickRun(e) {
		PopupEventHandlers.SendToContent("run");
	}

	static SendToContent(flag, responseMethod){
		chrome.tabs.query({active: true}, function(tabs) {
				tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, {message: flag}, responseMethod));
		});
	}

	static ClickToggle(e){
		var setting = PopupController.ElementSettingMappings[e.srcElement.id];
		PopupController.Settings[setting] = !PopupController.Settings[setting];
		AppStorage.Save(PopupController.Settings);
	}

	static SetToggleButtons(settings){
		Object.keys(PopupController.ElementSettingMappings).forEach(function(key){
			document.getElementById(key).checked = settings[PopupController.ElementSettingMappings[key]]
		});
	}
}


class PopupController {

	static Initalise(){
		document.getElementById("run").addEventListener('click', PopupEventHandlers.ClickRun);

		Object.keys(PopupController.ElementSettingMappings).forEach(function(key){
			document.getElementById(key).addEventListener('click', PopupEventHandlers.ClickToggle);
		});

		AppStorage.WithSettings(function(settings){
			PopupController.Settings = settings;
			PopupEventHandlers.SetToggleButtons(settings);
		});
	}

	static ElementSettingMappings = {
			"unlock_premium": "UnlockPremium",
			"hide_related": "HideRelated",
			"hide_social_media": "HideSocalMedia",
			"hide_ads": "HideAds",
			"autorun": "Autorun"
		}

	static Settings = {value: null}
}


document.addEventListener('DOMContentLoaded', function(){
    PopupController.Initalise();
}, false);
