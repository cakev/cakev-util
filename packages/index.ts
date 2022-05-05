import { on, off } from './dom'
import { uuid } from './other'

const version = process.env.version
const util = {
	version,
	on,
	off,
	uuid,
}
if (window !== undefined) {
	if (!window['cakeV-util']) {
		window['cakeV-util'] = util
	}
}
export { version, on, off, uuid }
export default util
