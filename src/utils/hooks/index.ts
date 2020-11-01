import { customRef } from 'vue'

/**
 * @description 使用自定义 ref 实现带防抖功能的 v-model ：
 * @param {any} value 要更改的值
 * @param {number} delay
 * @returns {T}
 */

export function useDebouncedRef<T>(value: T, delay = 200) {
  let timeout: any = null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: T) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
