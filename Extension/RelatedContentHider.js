/*
	Hides related content offers that break up article flow and make the pages
	less readable.
*/

class RelatedContentHider extends MutatorBase
{
	constructor(document){
		super(document);
	}

	Apply(){
		super.HideElementsWithClass("article-right-rail"); //might also hide some ads but oh well.
		super.HideElementsWithClass("pb-f-global-recommend");
		super.HideElementWithId("ciNFtV1uRaANvr"); //"More from new zealand"
		super.HideElementsWithClass("pb-f-article-related-articles");
		super.HideElementWithId("cExMor1DPM25pr"); //"Latest premium content"
		super.HideElementsWithClass("related-articles"); //"Latest premium content"
		super.HideElementsWithClass("website-of-year");
		super.HideElementsWithClass("btn-premium");
	}
}
