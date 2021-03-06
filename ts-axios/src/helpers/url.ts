import { isDate, isObject } from './util'

function encode(val: string):string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
export function buildURL(url: string,params?: any):string{

  if(!params) {
    return url;
  }
  const parts: string[] = [];
  Object.keys(params).forEach((key) => {
    const val = params[key];
    // 空值忽略
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    // 参数值为数组
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach((val) => {
      // 参数值为 Date 类型
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        // 参数值为对象
        val = JSON.stringify(val)
      }
      // 特殊字符支持
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams = parts.join('&')

  if (serializedParams) {
    // 丢弃 url 中的哈希标记
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    // 保留 url 中已存在的参数
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}