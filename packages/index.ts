import { on, off, once } from './dom'
import { uuid, versionToNum, getQueryString, downloadFile } from './other'
import { copyText } from './lib'
import { useProcess, usePath } from './javascript'
import { findComponentDownward, findComponentUpward, findComponentsDownward } from './vue'

const version = process.env.version
const util = {
	version,
	on,
	off,
	once,
	uuid,
	versionToNum,
	getQueryString,
	downloadFile,
	copyText,
	useProcess,
	usePath,
	findComponentDownward,
	findComponentUpward,
	findComponentsDownward,
}
export {
	version,
	on,
	off,
	once,
	uuid,
	versionToNum,
	getQueryString,
	downloadFile,
	copyText,
	useProcess,
	usePath,
	findComponentDownward,
	findComponentUpward,
	findComponentsDownward,
}

if (window !== undefined) {
	if (!window['cakeV-util']) {
		window['cakeV-util'] = util
	}
}

export default util
