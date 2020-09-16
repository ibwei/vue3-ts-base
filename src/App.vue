<template>
  <div id="app">
    <full-loading :show="fullLoading" text="hehhe" />
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> | <router-link to="/contact">Contact</router-link> |
      <router-link to="/tests">组件测试</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const App = defineComponent({
  data() {
    return {
      book: { pageName: 'hah' },
      hello: 'iis'
    }
  },
  created() {
    console.log(this.$store)
  },
  computed: {
    fullLoading() {
      return this.$store.state.fullLoading
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
