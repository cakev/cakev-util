// Find components upward
export const findComponentUpward = (context, componentName, componentNames) => {
	if (typeof componentName === 'string') {
		componentNames = [componentName]
	} else {
		componentNames = componentName
	}

	let parent = context.$parent
	let name = parent.$options.name
	while (parent && (!name || componentNames.indexOf(name) < 0)) {
		parent = parent.$parent
		if (parent) name = parent.$options.name
	}
	return parent
}

// Find component downward
export const findComponentDownward = (context, componentName) => {
	const childrens = context.$children
	let children = null

	if (childrens.length) {
		for (const child of childrens) {
			const name = child.$options.name
			if (name === componentName) {
				children = child
				break
			} else {
				children = findComponentDownward(child, componentName)
				if (children) break
			}
		}
	}
	return children
}
