import Clipboard from 'clipboard'

/**
 * @description uuid
 */
export const uuid = (): string => {
	return Math.random().toString(36).replace('0.', '')
}

/**
 * @description 1.0.0 --->100000 每一位限两位数
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

const types = {
	json: 'application/json',
	txt: 'text/plain',
	html: 'text/html',
	js: 'application/javascript',
	png: 'image/png',
	jpg: 'image/jpeg',
}

/**
 * 文件下载函数
 * @description 文件下载函数
 */
export const downloadFile = (data, filename, type) => {
	let blob
	if (typeof data === 'string') {
		blob = new Blob([data], { type: types[type] })
	} else {
		if (data instanceof Blob || data instanceof File) {
			blob = data
		} else {
			blob = new Blob([JSON.stringify(data, null, 2)], {
				type: types[type],
			})
		}
	}
	const link = document.createElement('a')
	const url = URL.createObjectURL(blob)
	link.download = filename
	link.href = url
	link.click()
	URL.revokeObjectURL(url)
}

/**
 * @description 拷贝插件 kay
 */
export function copyText(text, success, error) {
	const oCopyBtn = document.createElement('button')
	oCopyBtn.setAttribute('id', 'cake-copy-btn')
	oCopyBtn.setAttribute('data-clipboard-text', text)
	document.body.appendChild(oCopyBtn)
	const clipboard = new Clipboard('#cake-copy-btn')
	clipboard.on('success', e => {
		typeof success === 'function' && success(e)
		clipboard.destroy()
		document.body.removeChild(oCopyBtn)
	})
	clipboard.on('error', e => {
		typeof error === 'function' && error(e)
		clipboard.destroy()
		document.body.removeChild(oCopyBtn)
	})
	oCopyBtn.click()
}
