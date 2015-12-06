/* Adds incrementing numbers to every child of a certain type that is inside a parent of a certain type, and does this for every parent of that type.
 * @params {String}, {String}
 */

function numbering(parentSelector, childSelector) {

	// Get the first character of both strings to identify the selector type
	parentSelectorType = parentSelector.charAt(0);
	childrenSelectorType = childSelector.charAt(0);

	// Identify selector type for the parent selector and find the parent element(s)
	if(parentSelectorType !== '.' && parentSelectorType !== '#') var parent = document.getElementsByTagName(parentSelector);
	if(parentSelectorType === '.') var parent = document.getElementsByClassName(parentSelector);
	if(parentSelectorType === '#') var parent = document.getElementById(parentSelector);

	// Loop through all parents that have the given selector
	for (var i = 0; i < parent.length; i++) {

		// Identify selector type for the child selector and find the child element(s)
		if(childrenSelectorType !== '.' && childrenSelectorType !== '#') var childrenElements = parent[i].getElementsByTagName(childSelector);
		if(childrenSelectorType === '.') var childrenElements = parent[i].getElementsByClassName(childSelector);
		if(childrenSelectorType === '#') var childrenElements = parent[i].getElementById(childSelector);

		// Loop through all found child element(s) and add a number in front of what's already inside of it
		for (var j = 0; j < childrenElements.length; j++) {
			childrenElements[j].innerHTML = (j + 1 + ". ") + childrenElements[j].innerHTML;
		};
	};
}

// This will add numbering to all divs that are inside a section, but the numbering will be specific for each group of divs that are in a section
numbering('section', 'div');
