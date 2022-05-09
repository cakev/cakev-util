import { on, off } from './dom'
import { uuid, versionToNum, getQueryString } from './other'
import { findComponentDownward, findComponentUpward, findComponentsDownward } from './vue'

const version = process.env.version
const util = {
	version,
	on,
	off,
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
	uuid,
	versionToNum,
	getQueryString,
	findComponentDownward,
	findComponentUpward,
	findComponentsDownward,
}
export default util
