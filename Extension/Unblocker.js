class Unblocker extends MutatorBase
{
	constructor(document){
		super(document);
	}

	Apply(){
		if (!this.HasArticle()){
			return;
		}

		var premiumClassName = this.FindPremiumContentClassName();
		Debug.Message("premium-class: " + premiumClassName);
		if (premiumClassName === null){
			return;
		}

		//Clone article
		var cloneArticle = this.Article().cloneNode(true);

		var hiddenElements = cloneArticle.querySelectorAll('.' + premiumClassName, 'style="display:none;"');

		//Remove the premium content class from all the child elements.
		hiddenElements.forEach(function(element){
				element.classList.remove(premiumClassName);
				element.style.display = "";
			});

		//Append the cloned article
		this.Article().parentNode.appendChild(cloneArticle);

		//Hide the original article
		this.Article().style.display = "none";
	}

	FindPremiumContentClassName(){
		var article = this.Article();
		var classFrequencies = {};

		//Iterate over all the child nodes in the article content.
		for (let i = 0; i < article.children.length; i++){

			article.children[i].classList.forEach(function(className){
				//Register each class name and the number of times it occurs.
				if (classFrequencies[className] === undefined){
					classFrequencies[className] = 0;
				}
				classFrequencies[className] += 1;
			});
		}

		//Sort the classes by frequency.
		var sortedClassesAndFrequencies = Object.keys(classFrequencies)
			.map(function(className) { return [className, classFrequencies[className]]; })
			.sort(function(item1, item2) { return item1[1] - item2[1]; });

		if (sortedClassesAndFrequencies.length <= 0){
			return null;
		}

		return sortedClassesAndFrequencies[sortedClassesAndFrequencies.length - 1][0];
	}
}
