import { instance } from './config'
import type { AxiosResponse } from "axios";
type Tmethod = 'post' | 'get'

function getPromise(method: Tmethod, url: string, params: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
        instance[method](url, params)
            .then(function (response: AxiosResponse) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });
    })
}

export const post = (url: string, params: any) => {
    return getPromise('post', url, params)
}

export const get = (url: string, params: any) => {
    return getPromise('get', url, params)

}