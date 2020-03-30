import axios from '../../src/index'

axios.request({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

axios.request({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

const date = new Date()

axios.request({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

axios.request({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

axios.request({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null
  }
})

axios.request({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
})

axios.request({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
})

axios.request({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;charset=utf-8'
  },
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
}).catch(err => {{
  console.log(err)
}})

const arr = new Int32Array([21, 31])

axios.request({
  method: 'post',
  url: '/base/buffer',
  data: arr
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios.request({
  method: 'post',
  url: '/base/post',
  data: searchParams
})