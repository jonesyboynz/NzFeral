class MutatorBase
{
	constructor(document){
		this.document = document;
	}

	Article(){
		return this.document.getElementsByClassName("article__body")[0];
	}

	HasArticle(){
		return this.Article() !== undefined;
	}

	HideElementsWithClass(className){
		var elements = this.document.getElementsByClassName(className);
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = "none";
		}
	}

	RemoveElementsWithClass(className){
		var elements = this.document.getElementsByClassName(className);
		for (var i = 0; i < elements.length; i++) {
			elements[i].remove();
		}
	}

	HideElementWithId(elementId){
		var element = this.document.getElementById(elementId);
		if (element !== null){
			element.style.display = "none";
		}
	}

	HideHrefWhereLinkStartsWith(tag, startOfLink){
		var elements = document.getElementsByTagName(tag);
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].href !== null && elements[i].href.startsWith(startOfLink))
				elements[i].style.display = "none";
		}
	}
}
