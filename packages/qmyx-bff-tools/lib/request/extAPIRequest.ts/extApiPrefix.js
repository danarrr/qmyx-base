"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPrefix = void 0;
const env = process.env.YUNKE_ENV || 'prod';
// 全民开放平台
const ExtApi = {
    // https://confluence.myscrm.cn/pages/viewpage.action?pageId=2107239
    dev: {
        innerapi: 'http://120.24.101.110/qmyx',
        extapi: 'https://test-extapi.myscrm.cn',
        openapi: 'http://test-extapi-inner.myscrm.cn',
    },
    test: {
        innerapi: 'http://120.24.101.110/qmyx',
        extapi: 'https://test-extapi.myscrm.cn',
        openapi: 'http://test-extapi-inner.myscrm.cn',
    },
    release: {
        innerapi: 'http://120.76.85.36/qmyx',
        extapi: 'https://beta-extapi.myscrm.cn',
        openapi: 'http://beta-extapi-inner.myscrm.cn',
    },
    prod: {
        innerapi: 'http://10.111.11.213/qmyx',
        extapi: 'https://extapi.myscrm.cn',
        openapi: 'http://extapi-inner.myscrm.cn',
    },
};
// @ts-ignore
exports.apiPrefix = ExtApi[env];
//# sourceMappingURL=extApiPrefix.js.map