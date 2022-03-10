// code标识 区分三个端
enum ErrCode {
    BFF_ERROR = 1,
    GO_GRPC_ERROR = 2,
    GO_GRPC_UNAVAILABLE_ERROR = 4,
}
export default ErrCode;
