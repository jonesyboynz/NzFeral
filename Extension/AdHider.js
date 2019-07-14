class AdHider extends MutatorBase
{
	constructor(document){
		super(document);
	}

	Apply(){
		super.HideElementsWithClass("ad-container");
		super.HideElementsWithClass("ob-widget");
		super.HideElementWithId("tc-arc-carousel");
		super.HideElementWithId("barfoot-arc-carousel");
		super.HideElementsWithClass("marketing---text-below");
		super.HideElementsWithClass("pb-f-ads-ad");
	}
} 