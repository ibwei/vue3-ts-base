import Axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

/**
 * get status code
 * @param {AxiosResponse} response Axios  response object
 */
const getErrorCode2text = (response: AxiosResponse) => {
  /** http status code */
  const code = response.status
  /** notice text */
  let message = 'Request Error'
  switch (code) {
    case 400:
      message = 'Request Error'
      break
    case 401:
      message = 'Unauthorized, please login'
      break
    case 403:
      message = 'Access denied'
      break
    case 404:
      message = 'Request address error'
      break
    case 408:
      message = 'Request timeout'
      break
    case 500:
      message = 'Internal server error'
      break
    case 501:
      message = 'Service not implemented'
      break
    case 502:
      message = 'Gateway error'
      break
    case 503:
      message = 'Service is not available'
      break
    case 504:
      message = 'Gateway timeout'
      break
    case 505:
      message = 'HTTP version is not supported'
      break
    default:
  }
  return message
}

/**
 * @returns  {AxiosResponse} result
 * @tutorial see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * service.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
const service = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

// request interceptors

interface ApiResponse {
  err_code: number
  err_msg?: string
  data?: any
}

/**
 * @description 请求发起前的拦截器
 * @returns {AxiosRequestConfig} config
 */
service.interceptors.request.use(async <AxiosRequestConfig>(config: AxiosRequestConfig) => {
  // check network
  /* TODO add http headers
   const token = window.localStorage.getItem('token')
   config.headers = {
    ...config.headers,
    Authorization: token
  } */

  return config
})

/**
 * @description 请求发起前的拦截器
 * @returns {} config
 */
service.interceptors.response.use(
  /** 请求有响应 */
  async (response: AxiosResponse) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      const __text = getErrorCode2text(response)
      return Promise.reject(new Error(__text))
    }
  },
  /** 请求无响应 */
  (error: AxiosError) => {
    let __emsg: string = error.message || ''

    if (error.message) {
      __emsg = error.message
    }

    if (error.response) {
      __emsg = error.response.data.msg
    }
    // timeout
    if (__emsg.indexOf('timeout') >= 0) {
      __emsg = 'timeout'
    }

    if (error?.response?.data?.code === 401) {
      return Promise.reject(new Error('401'))
    }
    return Promise.reject(new Error(__emsg))
  }
)

export default service
