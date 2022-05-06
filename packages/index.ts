import { on, off } from './dom'
import { uuid, versionToNum, getQueryString } from './other'

const version = process.env.version
const util = {
	version,
	on,
	off,
	uuid,
	versionToNum,
}
export { version, on, off, uuid, versionToNum, getQueryString }
export default util
