import axios from 'axios';
import { ElMessage } from "element-plus";
/**
 * 创建axios实例
 */
export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
    withCredentials: false
});
// 添加请求拦截器
instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    // config.headers['Access-Token'] = getSessionStorage('Access_Token') || '';
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    // console.log("响应拦截器")
    return response.data;
}, (error) => {
    // 对响应错误做点什么
    ElMessage.error("网络错误，请稍后再试")
    return Promise.reject(error);
});
