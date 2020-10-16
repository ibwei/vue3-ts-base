<template>
	<a-config-provider :locale="currentLanguage">
		<div id="app">
			<full-loading :show="fullLoading" :text="loadingText" />
			<app-layout />
		</div>
	</a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from '@/layout/AppLayout.vue'
import { Locales } from '@/i18n/index'

const App = defineComponent({
	setup() {
		return {
			Locales
		}
	},
	components: {
		AppLayout
	},
	computed: {
		fullLoading() {
			return this.$store.state.fullLoading
		},
		loadingText() {
			return this.$store.state.loadingText
		}
	}
})

export default App
</script>

<style lang="less" scoped>
.target {
	display: block;
	width: 100px;
	color: green;
	font-weight: bold;
	size: 18px;
}
.kk {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
}
.area {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 200px;
	line-height: 40px;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
