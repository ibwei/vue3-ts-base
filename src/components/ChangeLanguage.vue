<template>
  <a-dropdown :trigger="['click']">
    <a
      class="ant-dropdown-link"
      @click="(e) => e.preventDefault()"
      :style="{ color: titleColor, fontSize: titleSize }"
    >
      {{ i18n.languageName }}<DownOutlined
    /></a>
    <template v-slot:overlay>
      <a-menu class="dropdown-panel">
        <a-menu-item
          v-for="(value, key) of LanguageNameList"
          :key="key"
          @click="changeLanguage"
        >
          <span :style="{ color: textColor }">{{ LanguageNameList[key] }}</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { defineComponent } from 'vue'
import { setLang, i18nInstance, LanguageNameList } from '../i18n/index'
import { message } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  props: {
    titleColor: {
      type: String,
      default: '#fff'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    titleSize: {
      type: String,
      default: '16px'
    }
  },
  components: {
    DownOutlined
  },
  setup() {
    const { i18n } = i18nInstance
    const changeLanguage = (e) => {
      const lang = e.key
      setLang(lang).then((result) => {
        if (result === lang) {
          message.success(
            `${i18n.value['Current Language:']} ${i18n.value.languageName}`
          )
        }
      })
    }
    return {
      LanguageNameList,
      changeLanguage,
      i18n
    }
  }
})
</script>

<style lang="less" scoped>
.dropdown-panel {
  background: rgba(255, 255, 255, 0.3);
  margin-top: 10px;
  /deep/ .ant-dropdown-menu-item-active {
    background: transparent;
    transform: translateX(2px);
    transition: all 0.2s ease-in-out;
  }
}
.dropdown-panel::before {
  content: '';
  display: block;
  border: 10px solid transparent;
  border-bottom-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
