# axios 取消请求

## 通过 cancelToken 取消请求

创建一个 cancel token，然后将 cancel token 传递给请求的配置中，当我们需要取消请求时，调用 cancel 函数即可。

```javascript
const source = axios.CancelToken.source();

axios({
    method: "get",
    url: "/user/12345",
    cancelToken: source.token,
});

// 取消请求
source.cancel("Operation canceled by the user.");
```

## 取消重复请求 防抖

有时候我们需要取消请求，比如在用户输入框中输入内容时，我们需要发送请求，但是用户输入的速度可能比请求的速度快，这时候我们就需要取消上一次的请求，只保留最后一次请求。

```javascript
let source = null;

const fetchData = () => {
    if (source) {
        source.cancel("Operation canceled by the user.");
    }

    source = axios.CancelToken.source();

    axios({
        method: "get",
        url: "/user/12345",
        cancelToken: source.token,
    });
};
```
