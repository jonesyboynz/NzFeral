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

		//Add dummy nodes to trick the mutuation detector.
		this.AddDummyNodes([premiumClassName, "dummy"], 10);

		var hiddenElements = this.Article().querySelectorAll('.' + premiumClassName, 'style="display:none;"')

		//Remove the premium content class from all the child elements.
		hiddenElements.forEach(function(element){
			if (!element.classList.contains("dummy")){
				element.classList.remove(premiumClassName);
				element.style.display = "";		
			}

		})

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

	AddDummyNodes(classList, times){
		var fragment = this.document.createDocumentFragment();
		for (var i = 0; i < times; i++){
			var node = this.document.createElement("p");
			node.style.display = 'none';
			classList.forEach(function(className){
				node.classList.add(className);
			});
			fragment.appendChild(node);	
		}
		this.Article().appendChild(fragment);
	}
}
