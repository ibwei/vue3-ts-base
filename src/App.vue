<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link>
      <div class="area">
        <div>随机抽取一名幸运儿送奶茶</div>
        <div class="kk">
          中奖的是:<span class="target">{{ target }}</span>
        </div>
        <a-button @click="start">{{ ing ? '停止抽奖' : '开始抽奖' }}</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@types'
import User from './api/user'

const App = defineComponent({
  async reated() {
    console.log(this)
    console.log('routerList', this.$store)
    const b: Book = { pageName: '' }
    await User.login({ userName: 'b', password: '' })
  },
  data() {
    return {
      list: ['赵坚', '阿凤', '易杉杉', '赵坚老表', '张雪芬', '向袁媛', '张红森', '杨小明', '代黎明', '熊婧宇'],
      ing: false,
      target: '未开始',
      timer: 0
    }
  },
  methods: {
    start() {
      if (!this.ing) {
        this.$message.success('fdf')
        this.$message.success({ content: 'fff', duration: 200 })
        this.ing = true
        this.timer = setInterval(() => {
          this.target = this.list[Math.floor(Math.random() * this.list.length)]
        }, 16)
      } else {
        clearInterval(this.timer)
        // 抽奖结束,让我们把名字改成想要的
        this.target = '阿凤'
        this.ing = false
      }
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
