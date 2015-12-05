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

// Implementation
numbering('section', 'div');
