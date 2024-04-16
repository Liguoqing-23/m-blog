# TS 对 axios 的二次封装

```typescript
import axios from "axios";
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";

/**
 * 基本封装
 */

interface CustomInterceptors<T = AxiosResponse> {
    requestSuccess?: (
        config: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig;
    requestFail?: (error: any) => any;
    responseSuccess?: (response: T) => T;
    responseFail?: (error: any) => any;
}

interface ExtendAxiosRequestConfig<T = any> extends AxiosRequestConfig {
    // 自定义属性
    isShowLoading?: boolean;
    interceptors?: CustomInterceptors<T>;
}

class ApiAxios {
    instance: AxiosInstance;

    baseConfig: ExtendAxiosRequestConfig = {
        baseURL: "http://localhost:3000",
        timeout: 1000 * 10,
    };

    constructor(customConfig: ExtendAxiosRequestConfig = {}) {
        this.instance = axios.create({
            ...this.baseConfig,
            ...customConfig,
        });

        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.request.use(
            customConfig.interceptors?.requestSuccess,
            customConfig.interceptors?.requestFail
        );

        this.instance.interceptors.response.use(
            customConfig.interceptors?.responseSuccess,
            customConfig.interceptors?.responseFail
        );
    }

    request<T = any>(customConfig: ExtendAxiosRequestConfig<T>): Promise<T> {
        if (customConfig.isShowLoading) {
            // 显示loading
        }

        customConfig.interceptors?.requestSuccess?.(
            customConfig as InternalAxiosRequestConfig
        );

        return new Promise<T>((resolve, reject) => {
            this.instance.request<any, T>(customConfig).then(
                (response) => {
                    customConfig.interceptors?.responseSuccess?.(response);
                    resolve(response);
                },
                (error) => {
                    customConfig.interceptors?.responseFail?.(error);
                    reject(error);
                }
            );
        });
    }

    get<T = any>(
        customConfig?: ExtendAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.instance.request({ ...customConfig, method: "GET" });
    }

    post<T = any>(
        customConfig?: ExtendAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.instance.request({ ...customConfig, method: "POST" });
    }

    put<T = any>(
        customConfig?: ExtendAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.instance.request({ ...customConfig, method: "PUT" });
    }

    delete<T = any>(
        customConfig?: ExtendAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.instance.request({ ...customConfig, method: "DELETE" });
    }

    patch<T = any>(
        customConfig?: ExtendAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.instance.request({ ...customConfig, method: "PATCH" });
    }
}

export const apiAxios = new ApiAxios();
```
