class MutatorBase
{
	constructor(document){
		this.document = document;
	}	

	Article(){
		return this.document.getElementById("article-content");
	}

	HasArticle(){
		return this.Article() !== null;
	}

	HideElementsWithClass(className){
		var elements = this.document.getElementsByClassName(className);
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = "none";
		}
	}

	HideElementWithId(elementId){
		var element = this.document.getElementById(elementId);
		if (element !== null){
			element.style.display = "none";
		}	
	}

}