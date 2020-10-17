<template>
  <div>
    <a-card class="card">
      <full-loading :show="loading" :text="loadingText" />
      <p>全局组件测试</p>
      <a-row>
        <a-col :span="12"> <a-button type="primary" @click="openFullLoading">全局加载 3 秒</a-button> </a-col>
        <a-col :span="12"> <a-button @click="openPartLoading">局部加载 </a-button> </a-col>
      </a-row>
    </a-card>

    <a-card class="card">
      <p>vuex测试</p>
      <a-row>
        <a-col :span="12">
          <p>app模块</p>
          <p>
            <a-tag v-for="(item, key, index) of app" :key="index" color="pink">{{ `${key}:${item}` }}</a-tag>
          </p>

          <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="更改主题名">
              <a-row>
                <a-col :span="18">
                  <a-input v-model:value="inputValue" />
                </a-col>
                <a-col :span="6">
                  <a-button type="success" @click="changeTheme">确认</a-button>
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="12">
          <p>根模块</p>
          <p>
            <a-tag color="pink">{{ `loadingText:${loadingText}` }}</a-tag>
          </p>
          <a-form :label-col="{ span: 6 }" :wrapper-col="wrapperCol">
            <a-form-item label="全局加载文字">
              <a-row>
                <a-col :span="16">
                  <a-input v-model:value="globalLoadingText" />
                </a-col>
                <a-col offset="2" :span="6">
                  <a-button type="success" @click="changeText">更改并打开</a-button>
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { StateType } from '@types'
import { useStore } from 'vuex'
import { setStoreState } from '@/store/utils'

export default defineComponent({
  setup() {
    const store = useStore<StateType>()

    const state = reactive({
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loading: false,
      inputValue: '',
      globalLoadingText: ''
    })

    const app = computed(() => store.state.app)
    const loadingText = computed(() => store.state.app.loadingText)
    const changeTheme = () => {
      setStoreState('app', 'theme', state.inputValue)
    }

    const changeText = () => {
      setStoreState('app', 'loadingText', state.globalLoadingText)
      setStoreState('app', 'fullLoading', true)
      setTimeout(() => {
        setStoreState('app', 'fullLoading', false)
      }, 3000)
    }

    const openPartLoading = () => {
      state.loading = true
      setTimeout(() => {
        state.loading = false
      }, 3000)
    }

    const openFullLoading = () => {
      setStoreState('app', 'loadingText', '全局加载中')
      setStoreState('app', 'fullLoading', true)
      setTimeout(() => {
        setStoreState('app', 'fullLoading', false)
      }, 3000)
    }

    return {
      openFullLoading,
      openPartLoading,
      changeText,
      changeTheme,
      loadingText,
      app,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
.card {
  margin-top: 30px;
  position: relative;
}
</style>
