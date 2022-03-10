"use strict";
// import ErrCode from '../utils/request/errCode';
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
exports.ErrorMiddlewareExtend = void 0;
const ErrorMiddlewareExtend = (context, e) => __awaiter(void 0, void 0, void 0, function* () {
    const ErrCode = {
        BFF_ERROR: 1,
        GO_GRPC_ERROR: 2,
        GO_GRPC_UNAVAILABLE_ERROR: 4,
    };
    context.status = 200;
    let retCode = ErrCode.BFF_ERROR;
    let retMsg = '服务器出了点问题~';
    if (e.goErr && e.goErr.code && e.goErr.msg) {
        retCode = e.goErr.code;
        retMsg = 'go服务器开小差';
    }
    else if (e.details) {
        //  grpc框架本身错误
        retCode = ErrCode.GO_GRPC_ERROR;
        retMsg = `grpc服务错误: ${e.details}`;
        if (e.code === 4) {
            retMsg = '服务请求超时';
            retCode = ErrCode.GO_GRPC_UNAVAILABLE_ERROR;
        }
    }
    else {
        // bff业务错误
        retCode = e.retCode || ErrCode.BFF_ERROR;
        retMsg = e.message;
        // 日志
        console.error('broker bff error:', e);
    }
    context.body = { code: retCode, msg: retMsg };
    return context;
});
exports.ErrorMiddlewareExtend = ErrorMiddlewareExtend;
//# sourceMappingURL=errorMiddleware.js.map