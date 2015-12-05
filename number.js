/* Adds incrementing numbers to every child of a certain type that is inside a parent of a certain type, and does this for every parent of that type.
 * @params {String}, {String}
 */

function numbering(parentSelector, childSelector) {

	parentSelectorType = parentSelector.charAt(0);
	childrenSelectorType = childSelector.charAt(0);

	if(parentSelectorType !== '.' && parentSelectorType !== '#') var parent = document.getElementsByTagName(parentSelector);
	if(parentSelectorType === '.') var parent = document.getElementsByClassName(parentSelector);
	if(parentSelectorType === '#') var parent = document.getElementById(parentSelector);

	for (var i = 0; i < parent.length; i++) {

		if(childrenSelectorType !== '.' && childrenSelectorType !== '#') var childrenElements = parent[i].getElementsByTagName(childSelector);
		if(childrenSelectorType === '.') var childrenElements = parent[i].getElementsByClassName(childSelector);
		if(childrenSelectorType === '#') var childrenElements = parent[i].getElementById(childSelector);

		for (var j = 0; j < childrenElements.length; j++) {
			childrenElements[j].innerHTML = j + 1;
		};
	};
}

numbering('section', 'div');
