<template>
  <div class="app-layout">
    <router-view v-if="fullScreenMode" />
    <div class="app-content" v-else>
      <app-header />
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/tsxtest">tsx页面</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/tests">组件测试</router-link>
      </div>
      <router-view />
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppFooter from './Footer.vue'
import AppHeader from './Header.vue'
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    AppFooter,
    AppHeader
  },
  setup() {
    const fullScreenMode = ref(true)
    const router = useRouter()
    watch(router.currentRoute, () => {
      fullScreenMode.value = Boolean(router.currentRoute.value.meta?.fullScreen)
    })

    return {
      fullScreenMode
    }
  }
})
</script>

<style lang="less" scoped>
.app-layout {
  height: 100%;
}
.app-content {
  position: relative;
  padding: 0;
  margin: 0;
}
.router-view {
  margin: 0;
  padding: 0;
}
</style>
