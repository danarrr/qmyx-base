/**
 * @param promiseReqArr // 需要合并的接口
 * @param filterPromise // 动态配置需要合并的接口
 * @param flatRespData // 平铺返回数据
 */

interface promiseReqType {
    [key: string]: Array<any>;
}

export const MergeRequest = (
    promiseReqArr: promiseReqType,
    filterPromise?: Array<any>,
    flatRespData: boolean = false,
): any => {
    if (!promiseReqArr) return { msg: '需要合并的接口不能为空' };
    const promiseReqArrKey = filterPromise || Object.keys(promiseReqArr);

    return promiseReqArrKey.reduce(async (result: any, reqKey: any) => {
        const prevResult = await result;

        const promiseFunc = promiseReqArr[reqKey][0];
        const params = promiseReqArr[reqKey][1];
        const metaData = promiseReqArr[reqKey][2];

        const data = await promiseFunc(params, metaData);
        return flatRespData
            ? {
                ...prevResult,
                ...(data || [...data.list]),
            }
            : {
                ...prevResult,
                [reqKey]: data.list || data,
            };
    }, {});
};

