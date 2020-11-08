/*
	Hides sociam media widgets
*/

class SocialMediaHider extends MutatorBase
{
	constructor(document){
		super(document);
	}

	Apply(){
		super.HideElementsWithClass("social-tools");
		super.HideElementsWithClass("share-bar");
		super.HideElementsWithClass("pb-f-navigation-social-links-sharebar");
	}
}
