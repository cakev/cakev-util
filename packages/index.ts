import { on, off, once } from './dom'
import { uuid, versionToNum, getQueryString } from './other'
import { findComponentDownward, findComponentUpward, findComponentsDownward } from './vue'

const version = process.env.version
const util = {
	version,
	on,
	off,
	once,
	uuid,
	versionToNum,
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
	findComponentDownward,
	findComponentUpward,
	findComponentsDownward,
}
export default util
