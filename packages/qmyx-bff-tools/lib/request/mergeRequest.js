"use strict";
/**
 * @param promiseReqArr // 需要合并的接口
 * @param filterPromise // 动态配置需要合并的接口
 * @param flatRespData // 平铺返回数据
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequest = void 0;
const MergeRequest = (promiseReqArr, filterPromise, flatRespData = false) => {
    if (!promiseReqArr)
        return { msg: '需要合并的接口不能为空' };
    const promiseReqArrKey = filterPromise || Object.keys(promiseReqArr);
    return promiseReqArrKey.reduce((result, reqKey) => __awaiter(void 0, void 0, void 0, function* () {
        const prevResult = yield result;
        const promiseFunc = promiseReqArr[reqKey][0];
        const params = promiseReqArr[reqKey][1];
        const metaData = promiseReqArr[reqKey][2];
        const data = yield promiseFunc(params, metaData);
        return flatRespData
            ? Object.assign(Object.assign({}, prevResult), (data || [...data.list])) : Object.assign(Object.assign({}, prevResult), { [reqKey]: data.list || data });
    }), {});
};
exports.MergeRequest = MergeRequest;
//# sourceMappingURL=mergeRequest.js.map