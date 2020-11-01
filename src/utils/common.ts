/**
 * @description 异步加载  一段js放在 header
 * @param {object} url - js 的 url
 * @param {function} callback - 成功回调
 * @returns { promise<any>}} promise
 */
export function loadScript(url: string) {
  return new Promise(() => {
    try {
      const script: any = document.createElement('script')
      script.type = 'text/javascript'
      if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
          if (
            script.readyState == 'loaded' ||
            script.readyState == 'complete'
          ) {
            script.onreadystatechange = null
            Promise.resolve(0)
          }
        }
      } else {
        //Others: Firefox, Safari, Chrome, and Opera
        script.onload = function() {
          Promise.resolve(0)
        }
      }
      script.src = url
      document.body.appendChild(script)
    } catch (e) {
      Promise.reject(e)
    }
  })
}

/**
 * @description 通过值查找对象的 key
 * @param {object} target - 要查找的对象
 * @param {string} value - 要查找的值
 * @returns {string} key  返回的 key
 */
export function findKeyByValue(
  target: { [key: string]: string },
  value: string
): string {
  const keys = Reflect.ownKeys(target) as Array<string>
  for (let i = 0; i < keys.length; i++) {
    if (target[keys[i]] === value) {
      return keys[i]
    }
  }
  return ''
}

/**
 * @description 将 utc 格式转换为北京时间
 * @param {string} date -utc 时间字符串
 * @returns {string} 北京时间
 */
export function utc2Beijing(date: string) {
  const timestamp: Date = new Date(Date.parse(date))
  let time: number = timestamp.getTime()
  time = time / 1000

  // 增加8个小时，北京时间比utc时间多八个时区
  time = time + 8 * 60 * 60

  // 时间戳转为时间
  const beijingDatetime: any = new Date(parseInt(time + '') * 1000)

  const year = beijingDatetime.getFullYear()
  let month: string | number = beijingDatetime.getMonth() + 1
  if (month < 10) {
    month = `0${month}`
  }
  let day = beijingDatetime.getDate()
  if (day < 10) {
    day = `0${day}`
  }
  let hour = beijingDatetime.getHours()
  if (hour < 10) {
    hour = `0${hour}`
  }
  let minute = beijingDatetime.getMinutes()
  if (minute < 10) {
    minute = `0${minute}`
  }
  let second = beijingDatetime.getSeconds()
  if (second < 10) {
    second = `0${second}`
  }

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

/** 复制文本  */
export function copyText(test: string) {
  if (document !== null) {
    const tag = document.createElement('input')
    tag.setAttribute('id', 'cp_input')
    tag.value = test
    document.getElementsByTagName('body')[0].appendChild(tag)
    const target: any = document.getElementById('cp_input')
    if (target) {
      target.select()
      target.execCommand('copy')
      target.remove()
    }
  }
}

/**
 * @description 获取鼠标位置
 * @param {MouseEvent} event
 * @return {x:number,y:number} 鼠标位置
 */
export function getMousePos(event: any) {
  const e: any = event || window.event
  const x = e.clientX
  const y = e.clientY
  return { x: x, y: y }
}

/* eslint-disable */
export function HtmlEncode(text: string) {
  return text
    .replace(/&/g, '&')
    .replace(/\"/g, '"')
    .replace(/</g, '<')
    .replace(/>/g, '>')
}

// base64 encode
export function base64Decode(data: string) {
  const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  let o1
  let o2
  let o3
  let h1
  let h2
  let h3
  let h4
  let bits
  let i = 0
  let ac = 0
  let dec = ''
  let tmpArr: any = []
  if (!data) {
    return data
  }
  data += ''
  do {
    h1 = b64.indexOf(data.charAt(i++))
    h2 = b64.indexOf(data.charAt(i++))
    h3 = b64.indexOf(data.charAt(i++))
    h4 = b64.indexOf(data.charAt(i++))
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4
    o1 = (bits >> 16) & 0xff
    o2 = (bits >> 8) & 0xff
    o3 = bits & 0xff
    if (h3 === 64) {
      tmpArr[ac++] = String.fromCharCode(o1)
    } else if (h4 === 64) {
      tmpArr[ac++] = String.fromCharCode(o1, o2)
    } else {
      tmpArr[ac++] = String.fromCharCode(o1, o2, o3)
    }
  } while (i < data.length)
  dec = tmpArr.join('')
  dec = utf8Decode(dec)
  return dec
}

// is valid keypress
export function checkKey(iKey: number) {
  if (iKey === 32 || iKey === 229) {
    return true
  } /* space和exception */
  if (iKey > 47 && iKey < 58) {
    return true
  } /* number */
  if (iKey > 64 && iKey < 91) {
    return true
  } /* string */
  if (iKey > 95 && iKey < 108) {
    return true
  } /* num keyboard 1 */
  if (iKey > 108 && iKey < 112) {
    return true
  } /* num keyboard 2 */
  if (iKey > 185 && iKey < 193) {
    return true
  } /* punctuation 1 */
  if (iKey > 218 && iKey < 223) {
    return true
  } /* num keyboard 2 */
  return false
}

// get cookie value
export function getCookie(name: string) {
  const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) return unescape(arr[2])
  return null
}

// get page height
export function getPageHeight() {
  const g = document
  const a = g.body
  const f = g.documentElement
  const d = g.compatMode === 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight)
}

// get page view height
export function getPageViewHeight() {
  const d = document
  const a = d.compatMode === 'BackCompat' ? d.body : d.documentElement
  return a.clientHeight
}
// get page view width
export function getPageViewWidth() {
  const d = document
  const a = d.compatMode === 'BackCompat' ? d.body : d.documentElement
  return a.clientWidth
}
// get page width
export function getPageWidth() {
  const g = document
  const a = g.body
  const f = g.documentElement
  const d = g.compatMode === 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth)
}

export function getViewSize() {
  const de = document.documentElement
  const db = document.body
  const viewW = de.clientWidth === 0 ? db.clientWidth : de.clientWidth
  const viewH = de.clientHeight === 0 ? db.clientHeight : de.clientHeight
  return [viewW, viewH]
}

export function isAndroidMobileDevice() {
  return /android/i.test(navigator.userAgent.toLowerCase())
}

export function isAppleMobileDevice() {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}

export function isDigit(value: string) {
  const patrn = /^[0-9]*$/
  if (patrn.exec(value) == null || value === '') {
    return false
  } else {
    return true
  }
}

export const isIphonex = () => {
  // X XS, XS Max, XR
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    },
    {
      devicePixelRatio: 2,
      width: 414,
      height: 896
    }
  ]
  // h5
  if (typeof window !== 'undefined' && window) {
    const isIOS = /iphone/gi.test(window.navigator.userAgent)
    if (!isIOS) return false
    const { devicePixelRatio, screen } = window
    const { width, height } = screen
    return xSeriesConfig.some(item => item.devicePixelRatio === devicePixelRatio && item.width === width && item.height === height)
  }
  return false
}

export function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())
}

export function isViewportOpen() {
  return !!document.getElementById('wixMobileViewport')
}

export function getOffset(e: MouseEvent) {
  const target: EventTarget | null = e.target
  if (target) {
    const pageCoord: any = getPageCoord(target)
    const eventCoord: any = {
      X: window.pageXOffset + e.clientX,
      Y: window.pageYOffset + e.clientY
    }

    const offsetCoord: any = {
      X: eventCoord.X - pageCoord.X,
      Y: eventCoord.Y - pageCoord.Y
    }
    return offsetCoord
  }
}

export function getPageCoord(element: any) {
  const coord = { X: 0, Y: 0 }
  if (element) {
    while (element) {
      coord.X += element.offsetLeft
      coord.Y += element.offsetTop
      element = element.offsetParent
    }
  }
  return coord
}

/**
 * @description 设置 cookie
 * @params {string} cookie -键名
 * @params {any} value -存入的值
 * @params {Hours} number -有效期限
 */
export function setCookie(name: string, value: any, Hours: number) {
  const d = new Date()
  const offset = 8
  const utc = d.getTime() + d.getTimezoneOffset() * 60000
  const nd = utc + 3600000 * offset
  const exp = new Date(nd)
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toUTCString() + ';domain=360doc.com;'
}

export function uniqueId(): number {
  const a: any = Math.random
  const b: any = parseInt
  return Number(Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a()))
}

export function utf8Decode(strData: string) {
  let tmpArr: any = []
  let i = 0
  let ac = 0
  let c1 = 0
  let c2 = 0
  let c3 = 0
  strData += ''
  while (i < strData.length) {
    c1 = strData.charCodeAt(i)
    if (c1 < 128) {
      tmpArr[ac++] = String.fromCharCode(c1)
      i++
    } else if (c1 > 191 && c1 < 224) {
      c2 = strData.charCodeAt(i + 1)
      tmpArr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63))
      i += 2
    } else {
      c2 = strData.charCodeAt(i + 1)
      c3 = strData.charCodeAt(i + 2)
      tmpArr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
      i += 3
    }
  }
  return tmpArr.join('')
}
