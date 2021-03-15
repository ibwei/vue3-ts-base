<template>
  <div class="test-wrap">
    <full-loading :show="loading" :text="loadingText" />
    <a-card class="card">
      <div class="icon-lists">
        <h2>IconFont组件测试：</h2>
        <IconFont type="iconcheck1" style="color: #f00; font-size: 20px" />
      </div>
    </a-card>
    <a-card class="card">
      <h2>全局组件测试</h2>
      <full-loading :show="partLoading" :text="loadingText" />
      <a-row class="row" type="flex" justify="center" align="top">
        <a-col :span="10">
          <a-button type="primary" @click="openFullLoading"
            >全局加载 3 秒</a-button
          >
        </a-col>
        <a-col :span="10" :offset="4">
          <a-button @click="openPartLoading" style="margin-left: 30px"
            >局部加载
          </a-button>
        </a-col>
      </a-row>
    </a-card>
    <a-card class="card">
      <h2>i18n-语言国际化测试</h2>
      <div style="margin: 20px 0px">
        <span>更改语言：</span
        ><ChangeLanguage textColor="#000" titleColor="#000" />
      </div>
      <a-row class="row" type="flex" justify="center" align="top">
        <a-col :span="12">
          <p>i18n 语言国际化效果</p>
          <p>{{ i18n }}</p>
          <p>当前语言名称：{{ i18n.languageName }}</p>
        </a-col>
        <a-col :span="12">
          <p>antd-vue 语言国际化效果</p>
          <a-range-picker v-model:value="value3" />
        </a-col>
      </a-row>
    </a-card>

    <a-card class="card">
      <h2>vuex测试</h2>
      <a-row class="row" type="flex" justify="center" align="top">
        <a-col :span="24">
          <h3>app模块</h3>
          <p v-for="(item, key, index) of app" :key="index">
            <a-tag color="pink">{{ `${key}:${item}` }}</a-tag>
          </p>

          <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="更改theme 字段">
              <a-row>
                <a-col :span="18">
                  <a-input v-model:value="inputValue" />
                </a-col>
                <a-col :span="6">
                  <a-button type="success" @click="changeTheme">确认</a-button>
                </a-col>
              </a-row>
            </a-form-item>
            <a-form-item label="更改全局加载提示文字：">
              <a-row>
                <a-col :span="16">
                  <a-input v-model:value="globalLoadingText" />
                </a-col>
                <a-col :span="6">
                  <a-button type="success" @click="changeText"
                    >更改并打开</a-button
                  >
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-card>
  </div>
  <div>
    <h2>组件的使用请直接移步 src/componnets 查看</h2>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, onMounted } from 'vue'
import { StateType } from '@/@types'
import { useStore } from 'vuex'
import { setStoreState } from '@/store/utils'
import { i18nInstance } from '@/i18n'
import ChangeLanguage from '@/components/ChangeLanguage.vue'
import { AppStateType } from '@/store/modules/app/state'

export default defineComponent({
  components: {
    ChangeLanguage
  },
  setup() {
    const store = useStore<StateType>()
    console.log('-------------')
    console.log(store.state)
    // vuex三级module
    console.log(store.state.user)

    onMounted(() => {
      console.log(store.state.app.language)
    })

    const state = reactive({
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
      loading: false,
      partLoading: false,
      inputValue: '',
      globalLoadingText: '',
      value3: []
    })

    const app = computed(() => store.state.app)
    const loadingText = computed(() => store.state.app.loadingText)
    const changeTheme = () => {
      setStoreState('app', 'theme', state.inputValue)
    }

    const changeText = () => {
      setStoreState<AppStateType>('app', 'loadingText', state.globalLoadingText)
      setStoreState('app', 'fullLoading', true)
      setTimeout(() => {
        setStoreState('app', 'fullLoading', false)
      }, 3000)
    }

    const openPartLoading = () => {
      state.partLoading = true
      setTimeout(() => {
        state.partLoading = false
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
      i18n: i18nInstance.i18n,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
.icons-list ::v-deep(.anticon) {
  margin-right: 6px;
  font-size: 40px;
  position: relative;
  z-index: 999;
  color: #f00;
}
.card {
  margin-top: 30px;
  position: relative;
}
.icons-list ::v-deep(.anticon) {
  margin-right: 6px;
  font-size: 40px;
  position: relative;
  z-index: 999;
  color: #f00;
}
.row {
  min-height: 60px;
}
.test {
  color: @primary;
}
.card {
  margin-top: 30px;
  position: relative;
  padding: 20px;
}
.test-wrap {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 10px #eee;
  padding: 30px 10px;
}
</style>
