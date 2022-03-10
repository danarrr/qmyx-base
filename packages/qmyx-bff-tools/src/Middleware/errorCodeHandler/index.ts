import ErrCode from './code';

export const ErrorCodeHandler = async (context: any, e: any) => {
    context.status = 200;
    let retCode = ErrCode.BFF_ERROR;
    let retMsg = '服务器出了点问题~';

    if (e.goErr && e.goErr.code && e.goErr.msg) {
        retCode = e.goErr.code;
        retMsg = 'go服务器开小差';
    } else if (e.details) {
        //  grpc框架本身错误
        retCode = ErrCode.GO_GRPC_ERROR;
        retMsg = `grpc服务错误: ${e.details}`;
        if (e.code === 4) {
            retMsg = '服务请求超时';
            retCode = ErrCode.GO_GRPC_UNAVAILABLE_ERROR;
        }
    } else {
        // bff业务错误
        retCode = e.retCode || ErrCode.BFF_ERROR;
        retMsg = e.message;
        // 日志
        console.error('broker bff error:', e);
    }

    context.body = { code: retCode, msg: retMsg }
    return context
}
