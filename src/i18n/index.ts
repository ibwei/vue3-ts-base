/**
 * vue-i18n 使用姿势说明
 * see more : https://pikax.me/vue-composable/composable/i18n/i18n.html#parameters
 */

import { includes } from 'lodash'
import moment from 'moment'
import { findKeyByValue } from '@/utils/common'
import { useI18n } from 'vue-composable'
import zhCN from '@/i18n/messages/zhCN'
import en from '@/i18n/messages/en'
import store from '@/store'
import { setStoreState } from '../store/utils'

const __LOCALE__ = store.state.app.language

if (!__LOCALE__) {
  //__LOCALE__ = window.navigator.language.split('-').join('')
  setStoreState('app', 'language', 'zhCN')
}

/** 定义语言模版 */
export const Locales: any = {}

/**
 * @todo 语言名字命名要考虑三个部分：一是 antdv 组件国际化的语言名字，二是 i18n模版语言的命名，三是浏览器对于语言的命名（这里会跟 http 请* 求相关，也是后端能识别的语言命名），因此要将前两种语言的名字通过字典转换成标准名称，也就是浏览器的语言名使用SO 639-1标准
 */

export const TranslateTable: { [key: string]: string } = {
  en: 'en_US',
  zhCN: 'zh_CN'
}

export const LanguageNameList: { [key: string]: string } = {
  en: 'English',
  zhCN: '简体(中文)'
}

export const i18nInstance = useI18n({
  locale: 'zhCN',
  messages: {
    zhCN,
    en
  }
})

/**
 * @description 自动加载 antd-vue 需要的语言模版
 */
function loadAtdLocales() {
  const files = require.context('../../node_modules/ant-design-vue/es/locale-provider', true, /\.js$/)
  files.keys().forEach(key => {
    const fileName = key.slice(2, key.lastIndexOf('.'))
    if (includes(TranslateTable, fileName)) {
      const localeKey = findKeyByValue(TranslateTable, fileName)
      if (localeKey) {
        Locales[localeKey] = files(key).default
      }
    }
  })
}

/**
 * @functin setLang - set the app's language
 * @param {string} lang - the language will be setted
 * @return {string} lang - langguage name
 */

function _set(lang: keyof typeof TranslateTable): keyof typeof TranslateTable {
  i18nInstance.locale.value = lang as any
  // 设置当前语言的时间
  moment.locale(TranslateTable[lang])
  // Axios.defaults.headers.common['Accept-Language'] = lang
  setStoreState('app', 'language', lang)
  return lang
}

/**
 * @functin 异步加载自定义的 i18n 模版
 * @param {string} lang - 将要更换的语言
 * @return {string} lang - 返回将要更改的语言明后才能
 */
export function setLang(lang: string): Promise<keyof typeof TranslateTable | 'same'> {
  if (lang === i18nInstance.locale.value) {
    return Promise.resolve('same')
  }
  return Promise.resolve(_set(lang))
}

/* 加载 antd 模版 */
loadAtdLocales()

/** 设置初始化语言 */
setLang(__LOCALE__)
