/**
 * @description uuid
 */
export const uuid = (): string => {
	return Math.random().toString(36).replace('0.', '')
}

/**
 * @description 1.0.0 --->100000
 * 每一位限两位数
 */
export const versionToNum = (version: string): number => {
	let num = version.split('.')
	num = num.map(item => {
		if (Number(item) >= 99) item = '99'
		if (Number(item) < 10) {
			item = '0' + item
		}
		return item
	})
	return Number(num.join(''))
}

/**
 * @description 获取url参数
 */
export const getQueryString = (name): null | string => {
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
	const r = window.location.search.substr(1).match(reg)
	if (r != null) return unescape(r[2])
	return null
}
