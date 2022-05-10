/**
 * @description Find components upward
 */
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

/**
 * @description Find component downward
 */
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

/**
 * @description Find components downward
 */
export const findComponentsDownward = (context, componentName, ignoreComponentNames = []) => {
	if (!Array.isArray(ignoreComponentNames)) {
		ignoreComponentNames = [ignoreComponentNames]
	}
	return context.$children.reduce((components, child) => {
		if (child.$options.name === componentName) components.push(child)
		if (ignoreComponentNames.indexOf(child.$options.name) < 0) {
			const foundChilds = findComponentsDownward(child, componentName)
			return components.concat(foundChilds)
		} else {
			return components
		}
	}, [])
}
