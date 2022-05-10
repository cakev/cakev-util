import { on, off, once } from './dom'
import { uuid, versionToNum, getQueryString, downloadFile } from './other'
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
	findComponentDownward,
	findComponentUpward,
	findComponentsDownward,
}
export default util
