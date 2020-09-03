<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const App: any = defineComponent({
  created() {
    console.log('routerList', this.$route)
  }
})

export default App
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: @color-primary;
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
