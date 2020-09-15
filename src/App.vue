<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Book } from '@types'
import { defineComponent } from 'vue'

const App = defineComponent({
  data() {
    return {
      book: { pageName: 'hah' } as Book,
      hello: 'iis'
    }
  },
  created() {
    console.log(this.$store)
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
