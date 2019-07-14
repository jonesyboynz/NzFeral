class OffersHider extends MutatorBase
{
	constructor(document){
		super(document);
	}

	Apply(){
		super.HideElementsWithClass("article-offer");
	}
}