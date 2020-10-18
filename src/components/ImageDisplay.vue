<template>
  <div class="display-panel">
    <div class="left">
      <img class="img" :src="list[activeIndex].image" alt="" />
    </div>
    <div class="right">
      <div
        class="r-list-item"
        :class="{ active: index === activeIndex }"
        v-for="(item, index) of list"
        :key="index"
        @mouseenter="changeActiveIndex(index)"
      >
        <img :src="item.icon" alt="" v-if="index !== activeIndex" />
        <span class="sub-title-1">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface ListItem {
  icon: string
  title: string
  imageUrl: string
}

import { defineComponent, PropType, ref } from 'vue'
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<ListItem[]>,
      required: true
    }
  },
  setup() {
    const activeIndex = ref(0)

    const changeActiveIndex = (index: number) => {
      activeIndex.value = index
    }

    return {
      changeActiveIndex,
      activeIndex
    }
  }
})
</script>

<style lang="less" scoped>
.display-panel {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 68px;
    .img {
      height: 100%;
      max-width: 100%;
    }
  }
  .right {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 384px;

    .r-list-item {
      cursor: pointer;
      width: 180px;
      height: 180px;
      background: #f5f5f5;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      img {
        width: 47px;
        height: 47px;
      }
      span.sub-title-1 {
        font-size: 30px;
        font-weight: 500;
        color: #333333;
        margin-top: 16px;
      }
    }
    .r-list-item:nth-child(7),
    .r-list-item:nth-child(8) {
      margin-bottom: 0px;
    }
    .active {
      transition: all 0.5s ease-in-out;
      background: @primary;
      span.sub-title-1 {
        color: #fff;
      }
    }
  }
}
</style>
