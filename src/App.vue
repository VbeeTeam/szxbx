<template>
	<div id="app">
		<router-view />

		<!-- 底部 -->
		<Footer v-if="type"></Footer>
	</div>
</template>


<script>
	// @ is an alias to /src
	import Footer from '@/components/Footer.vue'

	export default {
		name: 'App',
		components: {
			Footer,
		},
		data() {
			return {
				type: true
			}
		},
		watch: {
			'$route'(to) {
				if (to.name == "home" || to.name == "classroom" || to.name == "selected" || to.name == "my") {
					this.type = true
				} else {
					this.type = false
				}
			}
		},

	}
</script>
<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
		background: #f7f7f7;
	}
</style>
