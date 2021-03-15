<template>
  <div class="selector" ref="selectorRef">
    <div class="main">
      <span class="title main-item">{{ title }}</span>
      <a-button class="addBtn main-item" @click="handleAdd" :disabled="inAdd"
        >添加</a-button
      >
      <div
        class="selected-item main-item"
        v-for="data in selectedData"
        :key="data.userId"
        @click="checkItem(data)"
      >
        <img class="avatar" :src="data.avatar" alt="" />
        <span class="name">{{ getFormatName(data) }}</span>
        <CloseOutlined class="removeBtn" />
      </div>
      <a-input
        class="main-item"
        placeholder="搜索"
        v-model:value="keyword"
        @click="handleSearchClick"
        @input="handleSearch"
        ref="searchRef"
      ></a-input>
    </div>
    <div
      class="options"
      ref="optionsRef"
      v-show="optionsVisible"
      :class="optionsUp ? 'optionsUp' : 'optionsDown'"
    >
      <a-empty v-if="optionsData.length === 0" />
      <div v-else>
        <a-checkbox
          class="option-item"
          v-if="inAdd"
          v-model:checked="checkAll"
          :indeterminate="indeterminate"
          @change="onCheckAllChange"
        >
          全选
        </a-checkbox>
        <a-checkbox
          class="option-item"
          v-for="data in optionsData"
          :key="data.userId"
          :disabled="!canChoose(data)"
          :checked="isChecked(data.userId) || checkAll"
          @change="checkItem(data)"
        >
          <img class="avatar" :src="data.avatar" alt="" />
          <span class="name">{{ getFormatName(data) }}</span>
        </a-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  toRefs,
  computed,
  onUnmounted,
  onMounted,
  nextTick
} from 'vue'
import { CloseOutlined } from '@ant-design/icons-vue'
import { find } from 'lodash'
import { BasicUserType, RoleType, StateType } from '@/@types'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'

export default defineComponent({
  name: 'Selector',
  components: { CloseOutlined },
  props: {
    title: {
      type: String,
      default: '',
      require: true
    },
    list: {
      type: Array as PropType<BasicUserType[]>,
      require: true,
      default: []
    },
    selectedList: {
      type: Array as PropType<BasicUserType[]>,
      require: true,
      default: []
    },
    mode: {
      type: String,
      default: 'all' // all 所有团队成员  group 分组成员
    }
  },
  setup(props, context) {
    const store = useStore<StateType>()

    // 基础数据
    const state = reactive({
      inAdd: false,
      inSearch: false,
      indeterminate: false,
      checkAll: false,
      keyword: '',
      optionsUp: false,
      selectedData: [] as any[]
    })

    const rawList: BasicUserType[] = [...props.selectedList]

    // 搜索结果是否显示
    const optionsVisible = computed(() => state.inAdd || state.inSearch)

    // 搜索结果
    const optionsData = computed(() => {
      if (state.inAdd) {
        return props.list
      } else if (state.inSearch) {
        return props.list.filter((item: any) =>
          item.username.toLowerCase().includes(state.keyword.toLowerCase())
        )
      } else {
        return []
      }
    })

    // refs
    const selectorRef = ref(null)
    const searchRef: any = ref(null)
    const optionsRef = ref(null)

    /**
     * 点击'添加'按钮
     */
    const handleAdd = (e: any) => {
      state.inSearch = false
      state.inAdd = true
      // monitorClick()
      const screenHeight = window.innerHeight
      if (e.y > screenHeight * (2 / 3)) {
        state.optionsUp = true
      } else {
        state.optionsUp = false
      }
    }

    /**
     * 处理搜索
     */
    const handleSearch = () => {
      state.inAdd = false
      if (state.keyword.length !== 0) {
        state.inSearch = true
        // monitorClick()
      } else {
        state.inSearch = false
      }
    }

    /**
     * 点击搜索框
     */
    const handleSearchClick = () => {
      state.inAdd = false
      handleSearch()
    }

    const canChoose = (item: BasicUserType) => {
      // 团队分组成员模式，所有选项可选
      if (props.mode === 'group') {
        return true
      }

      // 是自己的话，不能选
      const user = store.state.user.userDetail
      if (user.userId === item.userId) {
        return false
      }
      if (
        item.roleId == RoleType['超级管理员'] ||
        item.roleId == RoleType['团队超级管理员']
      ) {
        return false
      }
      return true
    }

    const changeSelectAllStatus = () => {
      nextTick(() => {
        state.indeterminate =
          state.selectedData.length > 0 &&
          state.selectedData.length < props.list.length
        state.checkAll = state.selectedData.length === props.list.length
      })
    }

    // 搜索选项是否被选中
    const isChecked = (id: number) => {
      return state.selectedData.filter((item) => item.userId == id).length !== 0
    }

    /**
     * 点击搜索选项
     */
    const checkItem = (data: any) => {
      if (!canChoose(data)) {
        message.warning('不能删除自己或者团队超级管理员')
        return false
      }
      if (!isChecked(data.userId)) {
        state.selectedData = [...state.selectedData, data]
      } else {
        state.selectedData = [...state.selectedData].filter(
          (item) => item.userId !== data.userId
        )
      }

      changeSelectAllStatus()

      state.keyword = ''
      state.inSearch = false
      searchRef.value.focus()

      const deleteList = rawList
        .map((item) => {
          if (!find(state.selectedData, ['userId', item.userId])) {
            return item
          }
        })
        .filter((item: any) => Boolean(item))

      const addList = state.selectedData
        .map((item) => {
          if (!find(rawList, ['userId', item.userId])) {
            return item
          }
        })
        .filter((item: any) => Boolean(item))

      context.emit('list-change', { addList, deleteList })
    }

    /**
     * 点击全选
     */
    const onCheckAllChange = () => {
      state.selectedData =
        props.list.length === state.selectedData.length ? [] : [...props.list]
      state.indeterminate = false
      context.emit('list-change', {
        addList: state.selectedData,
        deleteList: []
      })
    }

    // 事件监听相关

    /**
     * 关闭待选项
     */
    const closeOptions = () => {
      state.inAdd = false
      state.inSearch = false
      ;(optionsRef.value as any).scrollTop = 0
    }

    /**
     * 删除最后一项
     */
    const deleteLastData = () => {
      state.selectedData = [...state.selectedData].slice(
        0,
        state.selectedData.length - 1
      )
      changeSelectAllStatus()
    }

    /**
     * 处理鼠标点击事件监听
     */
    const handleClickListen = (e: any) => {
      if (!(selectorRef.value as any).contains(e.target)) {
        closeOptions()
      }
    }

    /**
     * 处理键盘按下事件监听
     */
    const handleKeydownListen = (e: any) => {
      if (
        (searchRef.value as any).isFocused &&
        e.keyCode === 8 &&
        state.keyword === ''
      ) {
        deleteLastData()
      }
    }

    // 格式化名称
    const getFormatName = (item: BasicUserType) => {
      if (item.nickName) {
        return item.nickName
      }
      if (item.username) {
        return item.username.split('-')[0]
      }
      return '团队超级管理员'
    }

    onMounted(() => {
      state.selectedData = props.selectedList
      document.addEventListener('click', handleClickListen)
      document.addEventListener('keydown', handleKeydownListen)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickListen)
      document.removeEventListener('keydown', handleKeydownListen)
    })

    return {
      ...toRefs(state),
      canChoose,
      optionsData,
      selectorRef,
      searchRef,
      optionsRef,
      optionsVisible,
      handleAdd,
      handleSearchClick,
      handleSearch,
      isChecked,
      checkItem,
      onCheckAllChange,
      getFormatName
    }
  }
})
</script>

<style lang="less" scoped>
.selector {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .main {
    width: 100%;
    padding: 18px 16px;
    background: #f6f6f6;
    border-radius: 2px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 6px;
    .main-item {
      margin-bottom: 10px;
    }
    .title {
      width: 70px;
      text-align: left;
    }
    .addBtn {
      width: 48px;
      height: 24px;
      padding: 2px 10px;
      border: 1px solid @primary-color;
      border-radius: 4px;
      color: @primary-color;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      margin-right: 12px;
    }
    .addBtn:disabled {
      border: 1px dashed #a0a0a0;
      color: #a0a0a0;
      cursor: pointer;
    }
    .selected-item {
      display: flex;
      align-items: center;
      background: #f6fffc;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      cursor: pointer;
      margin-right: 12px;
      .avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 7px;
      }
      .name {
        font-size: 14px;
        color: @primary-color;
        margin-right: 5px;
      }
      .removeBtn {
        color: @primary-color;
        margin-right: 8px;
      }
    }
    .ant-input {
      flex: 1;
      margin-left: 27px;
      padding: 0;
      border: none;
      box-shadow: none;
      height: 24px;
      background: #f6f6f6;
    }
  }
  .options {
    width: 97%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-height: 30vh;
    overflow-y: auto;
    position: absolute;
    z-index: 9999;
    background: white;
    .option-item {
      margin: 0;
      padding: 16px 8px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 2px;
      ::v-deep(.ant-checkbox-inner) {
        border-radius: 50% !important;
      }

      .avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 9px;
      }
    }
    .option-item:hover {
      background: @primary-color;
      .name {
        color: white;
      }
    }
  }
  .optionsDown {
    bottom: 0;
    transform: translateY(100%);
    box-shadow: 0px 4px 6px rgba(81, 75, 75, 0.25);
  }
  .optionsUp {
    top: 0;
    transform: translateY(-100%);
    box-shadow: 0px -4px 6px rgba(81, 75, 75, 0.25);
  }
}
</style>
