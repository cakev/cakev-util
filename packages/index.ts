import { on, off } from './dom'

const version = process.env.version
const util = {
	version,
	on,
	off,
}
if (window !== undefined) {
	if (!window['cakeV-util']) {
		window['cakeV-util'] = util
	}
}
export { version, on, off }
export default util
