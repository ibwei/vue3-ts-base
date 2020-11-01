<template>
  <div class="spin-wrap" :class="{ show: show }">
    <div class="ant-spin ant-spin-spinning">
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Loading...'
    }
  }
})
</script>

<style lang="less" scoped>
.spin-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.65);
  display: none;
  &.show {
    display: block;
  }
  .ant-spin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.ant-spin {
  font-family: Monospaced Number, Chinese Quote, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #1890ff;
  vertical-align: middle;
  text-align: center;
  opacity: 0;
  position: absolute;
  -webkit-transition: -webkit-transform 0.3s
    cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
    -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  display: none;
}
.ant-spin-spinning {
  opacity: 1;
  position: static;
  display: inline-block;
}
.ant-spin-nested-loading {
  position: relative;
}
.ant-spin-nested-loading > div > .ant-spin {
  display: block;
  position: absolute;
  height: 100%;
  max-height: 320px;
  width: 100%;
  z-index: 4;
}
.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px;
}
.ant-spin-nested-loading > div > .ant-spin .ant-spin-text {
  position: absolute;
  top: 50%;
  width: 100%;
  padding-top: 5px;
  text-shadow: 0 1px 2px #fff;
}
.ant-spin-nested-loading > div > .ant-spin.ant-spin-show-text .ant-spin-dot {
  margin-top: -20px;
}
.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-dot {
  margin: -7px;
}
.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-text {
  padding-top: 2px;
}
.ant-spin-nested-loading > div > .ant-spin-sm.ant-spin-show-text .ant-spin-dot {
  margin-top: -17px;
}
.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-dot {
  margin: -16px;
}
.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-text {
  padding-top: 11px;
}
.ant-spin-nested-loading > div > .ant-spin-lg.ant-spin-show-text .ant-spin-dot {
  margin-top: -26px;
}
.ant-spin-container {
  position: relative;
  zoom: 1;
}
.ant-spin-container:after,
.ant-spin-container:before {
  content: '';
  display: table;
}
.ant-spin-container:after {
  clear: both;
}
.ant-spin-blur {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  opacity: 0.7;
  -webkit-filter: blur(0.5px);
  filter: blur(0.5px);
  //-webkit-filter:progid\:DXImageTransform\.Microsoft\.Blur(PixelRadius\=1, MakeShadow\=false);
  //filter:progid\:DXImageTransform\.Microsoft\.Blur(PixelRadius\=1, MakeShadow\=false)
}
.ant-spin-blur:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  opacity: 0.3;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 10;
}
.ant-spin-tip {
  color: rgba(0, 0, 0, 0.45);
}
.ant-spin-dot {
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 20px;
  height: 20px;
}
.ant-spin-dot i {
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: #1890ff;
  -webkit-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75);
  display: block;
  position: absolute;
  opacity: 0.3;
  -webkit-animation: antSpinMove 1s infinite linear alternate;
  animation: antSpinMove 1s infinite linear alternate;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
.ant-spin-dot i:first-child {
  left: 0;
  top: 0;
}
.ant-spin-dot i:nth-child(2) {
  right: 0;
  top: 0;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.ant-spin-dot i:nth-child(3) {
  right: 0;
  bottom: 0;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.ant-spin-dot i:nth-child(4) {
  left: 0;
  bottom: 0;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}
.ant-spin-dot-spin {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: antRotate 1.2s infinite linear;
  animation: antRotate 1.2s infinite linear;
}
.ant-spin-sm .ant-spin-dot {
  font-size: 14px;
  width: 14px;
  height: 14px;
}
.ant-spin-sm .ant-spin-dot i {
  width: 6px;
  height: 6px;
}
.ant-spin-lg .ant-spin-dot {
  font-size: 32px;
  width: 32px;
  height: 32px;
}
.ant-spin-lg .ant-spin-dot i {
  width: 14px;
  height: 14px;
}
.ant-spin.ant-spin-show-text .ant-spin-text {
  display: block;
}
@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ant-spin-blur {
    background: #fff;
    opacity: 0.5;
  }
}
@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}
@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}
</style>
