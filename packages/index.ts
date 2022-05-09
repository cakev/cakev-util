import { on, off } from './dom'
import { uuid, versionToNum, getQueryString } from './other'
import { findComponentDownward, findComponentUpward } from './vue'

const version = process.env.version
const util = {
	version,
	on,
	off,
	uuid,
	versionToNum,
	findComponentDownward,
	findComponentUpward,
}
export { version, on, off, uuid, versionToNum, getQueryString, findComponentDownward, findComponentUpward }
export default util
