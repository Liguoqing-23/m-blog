# axios 拦截器

> [!note] axios github
> https://github.com/axios/axios?tab=readme-ov-file#interceptors

```javascript
// 设置请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 设置响应拦截器
axios.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        // 2xx 都会进入这里
        return response;
    },
    function (error) {
        // 对响应错误做点什么
        // 除了 2xx 都会进入这里
        return Promise.reject(error);
    }
);

// 移除请求拦截器
const myInterceptor = axios.interceptors.request.use(function () {
    /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

请求拦截器是后添加的先执行，响应拦截器是先添加的先执行。

由于响应体中的数据默认 axios 返回的结果，我们在后端返回的数据被包装在了 data 字段中，多数情况下我们只需要 data 字段中的数据，所以我们可以在响应拦截器中对返回的数据进行处理，只返回 data 字段中的数据。

```javascript
axios.interceptors.response.use(
    function (response) {
        return response.data; // 只返回 data 字段中的数据
    },
    function (error) {
        return Promise.reject(error);
    }
);
```
