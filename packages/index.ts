import { on, off, once } from './dom'
import { uuid, versionToNum, getQueryString, downloadFile, copyText } from './other'
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
	findComponentDownward,
	findComponentUpward,
	findComponentsDownward,
}
export default util
