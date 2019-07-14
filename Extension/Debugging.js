class Debug
{
	static Message(message){
		if (Debug.Enabled()){
			console.log("[NZF] " + message);
		}
	}

	static Enabled(){
		return true;
	}
}