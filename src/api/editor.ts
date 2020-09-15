import axios from 'axios'

/** 编辑器接口地址 */
const editorInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_EDITOR_URL,
  timeout: 10000
})

export default editorInstance
