import { CustomRequestOptions } from '@/interceptors/request';
import { IResData } from '@/typings';

import errorCode from './errorCode';

export const http = <T = any>(options: CustomRequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<IResData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success(result) {
        const data = result.data as IResData<T>;
        // 未设置状态码则默认成功状态
        const code = data.code || result.statusCode || 200;
        // 后台返回的错误信息
        const backErr = data.msg || '';
        // 是否为后台代码出错 （后台返回代码错误关键字正则）
        const isCodeError = !backErr || !!backErr.match(/sql|java|error/gi);
        // 获取错误信息
        const msg =
          errorCode[code as keyof typeof errorCode] || (isCodeError ? errorCode.default : backErr);

        if (code === 401) {
          uni.showToast({
            title: msg,
            icon: 'error',
            mask: true,
            duration: 1500,
            complete() {
              uni.reLaunch({
                url: '/pages/login/index',
              });
            },
          });
        } else if (code !== 200 && code !== 201) {
          uni.showToast({
            icon: 'error',
            title: msg,
            mask: true,
          });
          uni.$emit('z-paging-error-emit');
          reject(result.data);
        } else {
          resolve(result.data as IResData<T>);
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        });
        reject(err);
      },
    });
  });
};

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @returns
 */
export const httpGet = <T>(url: string, query?: Record<string, any>) => {
  return http<T>({
    url,
    query,
    method: 'GET',
  });
};

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @returns
 */
export const httpPost = <T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
) => {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
  });
};

http.get = httpGet;
http.post = httpPost;
