// anitatodo, 目前go-bff-php-C端临时方案code大于0就走灰度；后续go-bff-C端正式方案code看下是否需要重新约定下。
enum ErrCode {
    BFF_ERROR = 1,
    GO_GRPC_ERROR = 2,
    GO_GRPC_UNAVAILABLE_ERROR = 4,
}
export default ErrCode;
