import axios from 'axios';
import { apiPrefix } from './extApiPrefix';

const request = axios.create({
  timeout: 6000, // 请求超时时间
  // baseURL: apiPrefix.opPrefix
  // config: {
  //   headers: {
  //     'X-Consumer-Custom-ID': 'gzminjieadmin_test',
  //   },
  // },
});

// 请求拦截
request.interceptors.request.use((config) => {
  const originUrl = config.url;
  if (!originUrl) return config;
  // BASEURI
  // @ts-ignore
  const apiTypes = originUrl.match(/(.*)api/) ? originUrl.match(/(.*)api/)[0] : '';
  const baseURI = apiPrefix[apiTypes];
  const url = originUrl.replace(new RegExp(apiTypes, 'g'), '');

  // 日志
  console.info('Request extApi start:', config.url, baseURI + url, config.params, config.data);
  return {
    ...config,
    url: baseURI + url,
  };
});

// 响应拦截
request.interceptors.response.use((res) => {
  console.info('Request extApi end:', res.config.url);
  return res;
});

export default request;
