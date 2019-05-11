//Start with the article content node.
var article = document.getElementById("article-content");

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

/*
Find the class name which occurs most frequenly.
This is ---probbaly--- the class which is blocking the ---premium--- content.
If we remove this class from class list of all the children then the premium should be revealed.
*/

//Sort the classes by frequency.
var sortedClassesAndFrequencies = Object.keys(classFrequencies)
	.map(function(className) { return [className, classFrequencies[className]]; })
	.sort(function(item1, item2) { return item1[1] - item2[1]; });

if (sortedClassesAndFrequencies.length > 0){
	/*
	The premium content class occurs most frequently. 
	It seems to have a weird name which looks machine-generated. 
	It might change daily or something, but it is plastered everywhere in the article content.
	*/
	var premiumClassName = sortedClassesAndFrequencies[sortedClassesAndFrequencies.length - 1][0];

	//Remove the premium content class from all the child elements.
	for (let i = 0; i < article.children.length; i++){
		if (article.children[i].classList.contains(premiumClassName)){
			article.children[i].classList.remove(premiumClassName);
		}
	}
}
