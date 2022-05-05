export const uuid = (): string => {
	return Math.random().toString(36).replace('0.', '')
}
