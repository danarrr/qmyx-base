"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const extApiPrefix_1 = require("./extApiPrefix");
const request = axios_1.default.create({
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
    if (!originUrl)
        return config;
    // BASEURI
    // @ts-ignore
    const apiTypes = originUrl.match(/(.*)api/) ? originUrl.match(/(.*)api/)[0] : '';
    const baseURI = extApiPrefix_1.apiPrefix[apiTypes];
    const url = originUrl.replace(new RegExp(apiTypes, 'g'), '');
    // 日志
    console.info('Request extApi start:', config.url, baseURI + url, config.params, config.data);
    return Object.assign(Object.assign({}, config), { url: baseURI + url });
});
// 响应拦截
request.interceptors.response.use((res) => {
    console.info('Request extApi end:', res.config.url);
    return res;
});
exports.default = request;
//# sourceMappingURL=index.js.map