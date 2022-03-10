"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// anitatodo, 目前go-bff-php-C端临时方案code大于0就走灰度；后续go-bff-C端正式方案code看下是否需要重新约定下。
var ErrCode;
(function (ErrCode) {
    ErrCode[ErrCode["BFF_ERROR"] = 1] = "BFF_ERROR";
    ErrCode[ErrCode["GO_GRPC_ERROR"] = 2] = "GO_GRPC_ERROR";
    ErrCode[ErrCode["GO_GRPC_UNAVAILABLE_ERROR"] = 4] = "GO_GRPC_UNAVAILABLE_ERROR";
})(ErrCode || (ErrCode = {}));
exports.default = ErrCode;
//# sourceMappingURL=code.js.map