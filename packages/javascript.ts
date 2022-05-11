const buildWall = source => {
	source = `with (wall) { ${source} }`
	return new Function('wall', source)
}
const createSandbox = source => {
	return function (data) {
		return buildWall(source).call(data, data)
	}
}
export const useProcess = (methodBody, data, callback) => {
	try {
		const processor = createSandbox(methodBody)
		data = processor({ data })
	} catch (err) {
		typeof callback === 'function' && callback()
	}
	return data
}

/**
 * @description 按照引用路径，查找末端数据
 */
export const usePath = (path, data, success, error) => {
	const keys = path ? path.split('.') : []
	if (!path) {
		return data
	}
	while (keys.length) {
		const key = keys.shift()
		if (!key) {
			typeof error === 'function' && error()
			break
		}
		data = data[key]
		if (data === undefined) {
			typeof success === 'function' && success()
			break
		}
	}
	return data
}
