<template>
  <div>
    <a-card class="card">
      <p>全局组件测试</p>
      <a-row>
        <a-col :span="12"> <a-button @click="openFullLoading">全局加载 3 秒</a-button> </a-col>
        <a-col :span="12"> <a-button @click="openFullLoading">局部加载 </a-button> </a-col>
      </a-row>
    </a-card>

    <a-card class="card">
      <p>vuex测试</p>
    </a-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    openFullLoading() {
      this.$store.__s('fullLoading', true)
      setTimeout(() => {
        this.$store.__s('fullLoading', false)
      }, 3000)
    }
  }
})
</script>

<style lang="less" scoped>
.card {
  margin-top: 30px;
}
</style>
