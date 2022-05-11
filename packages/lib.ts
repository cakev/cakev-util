import Clipboard from 'clipboard'

/**
 * @description 拷贝插件 kay
 */
export const copyText = (text, success, error): void => {
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
