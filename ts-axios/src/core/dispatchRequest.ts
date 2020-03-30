import { AxiosRequestConfig,AxiosPromise,AxiosResponse } from '../types';
import xhr from '../xhr'
import {buildURL} from '../helpers/url'
import {transformRequest,transformResponse} from '../helpers/data'
import {processHeader} from '../helpers/headers'
export default function dispatchRequest(config: AxiosRequestConfig):AxiosPromise {
  processConfig(config);
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformRequestHeader(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const {url, params} = config
  // return buildURL(url as string, params) 类型断言
  return buildURL(url!, params)
}
function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
function transformRequestHeader (config: AxiosRequestConfig): any {
  const {headers={}, data} = config
  processHeader(headers, data)
  return headers
}
 