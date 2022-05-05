<template lang="pug"></template>
<script lang="ts">
import { on, off } from '../packages'
export default {
	name: 'play',
	data() {
		return {}
	},
	methods: {
		selfEvent(e) {
			console.log(e)
			console.log(1)
		},
	},
	mounted() {
		on(window, 'click', this.selfEvent)
	},
}
</script>
<style lang="scss" scoped>
.play-box {
	margin: 80px;
}
</style>
