<template>
  <div class="slider-wrap">
    <a-carousel ref="carousel">
      <div class="carousel-item" v-for="(item, index) of list" :key="index">
        <img :src="item.image" />
        <div class="text-area">
          <span class="s-title">{{ item.title }}</span>
          <span class="s-sub-title">{{ item.desc }}</span>
        </div>
      </div>
    </a-carousel>
    <div class="operate">
      <div class="icon">
        <IconFont type="iconleft" @click="prev" />
        <IconFont type="iconright" @click="next" style="margin-left: 120px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Carousel } from 'ant-design-vue'
import { defineComponent, PropType, Ref, ref } from 'vue'
interface SliderItem {
  title: string
  desc: string
  image: string
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<SliderItem[]>,
      required: true
    }
  },
  setup(props) {
    const carousel: Ref<Carousel | null> = ref(null)
    const changeSlider = (i: number) => {
      return props.list[i].image
    }

    const next = () => {
      if (carousel.value) {
        carousel.value.next()
      }
    }
    const prev = () => {
      if (carousel.value) {
        carousel.value.prev()
      }
    }
    return {
      carousel,
      next,
      prev,
      changeSlider
    }
  }
})
</script>

<style lang="less" scoped>
.carousel-item {
  position: relative;
}
.img {
  width: 100%;
  height: 720px;
}
.slider-wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.operate {
  position: absolute;
  z-index: 9999;
  width: 600px;
  height: 600px;
  top: 400px;
  right: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}

.text-area {
  position: absolute;
  z-index: 9999;
  width: 600px;
  height: 400px;
  top: 200px;
  right: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  .s-title {
    height: 120px;
    font-size: 120px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 120px;
  }
  .s-sub-title {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
  }
}
.icon ::v-deep(.anticon) {
  margin-top: 120px;
  font-size: 64px;
  height: 64px;
  width: 64px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.icon:hover ::v-deep(.anticon) {
  transform: scale(1.1);
  font-weight: bold;
}
</style>
