class SocialMediaHider extends MutatorBase
{
	constructor(document){
		super(document);
	}

	Apply(){
		super.HideElementsWithClass("social-tools");
		super.HideElementsWithClass("pb-f-navigation-social-links-sharebar");
	}
}