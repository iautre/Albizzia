//公共参数

const requestParams = {
    baseURL:"https://gateway.autre.cn/api/console",
    method:"get",
    headers:{
        "atoken": "fda035660ab14e7d92f8f332b1c5b7361"
    },
    // // 请求拦截
    // onRequest({ request, options }) {},
    // // 请求错误
    // onRequestError({ request, options, error }) {},
    // // 响应拦截
    // onResponse({ request, response, options }) {
    //   return response._data;
    // },
    // // 响应错误
    // onResponseError({ request, response, options }) {}
  }

interface Result<T> {
    code: Number,
    msg: string,
    data: T
}

export const request = async <T>(url:string='/', params?: any) =>{
  const {data: result}  = await $fetch<Result<T>>(url, {...requestParams, ...params})
  return result
}
