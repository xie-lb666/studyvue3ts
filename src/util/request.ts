import * as axios from 'axios';

// 这里可根据具体使用的ui组件库进行替换
import { ElMessage } from 'element-plus';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

export interface AjaxResponse {
    code: number;
    message: string;
    data: any
}

// baseURL根据实际进行定义
const baseURL = "http://127.0.0.1:8081";
const NotificationDuration = 2000;

// 创建axios实例
const service = axios.default.create({
    baseURL,
    timeout: 10000,  // 请求超时时间
    maxContentLength: 4000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    // if (localStorage.getItem('token')) {
    //     // config.headers.token = localStorage.getItem('token');  //让请求头携带验证token
    //     // config.headers.admin = localStorage.getItem('user'); // 让每个请求携带自定义token 请根据实际情况自行修改
    // }

    return config
}, (err: any) => {
    ElMessage({
        message: err.message,
        type: 'error',
        duration: 3 * 1000
    });
    Promise.reject(err)
});

service.interceptors.response.use((response: AxiosResponse) => {
    const status = response.status;
    const data = response.data;
    if (status !== 200) {
        ElMessage({
            message: `请求错误，${String(response.status)}`,
            type: 'error',
            duration: NotificationDuration
        });
        return Promise.reject(response);
    } else {
        if (data.code == 200) {
            return data;
        } else {
            // 可自行判断为其他的返回
            return data;
        }
    }
}, (err: any) => {
    // 大于2xx会触发
    ElMessage({
        message: err,
        type: 'error',
        duration: NotificationDuration
    });
    return Promise.reject(err);
})

export default service;