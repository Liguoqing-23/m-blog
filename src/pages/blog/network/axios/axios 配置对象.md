# axios 配置对象

> [!note] axios github
> https://github.com/axios/axios?tab=readme-ov-file#request-config

```js
{
  // 通过 baseURL 和 url 拼接成最终的请求地址
  url: '/user',

  // method 可以是 get、post、put、delete 等
  method: 'get', // default

  // baseURL 将会自动拼接到 url 前面，除非 url 是绝对路径
  // 通过设置 baseURL 可以方便的在 axios 实例中传递相对路径
  baseURL: 'https://some-domain.com/api/',

  // transformRequest 允许在向服务器发送前，修改请求数据
  transformRequest: [function (data, headers) {
    return data;
  }],

  // transformResponse 允许在 then/catch 之前对响应数据进行修改
  transformResponse: [function (data) {
    return data;
  }],

  // headers 是即将被发送的自定义请求头
  // 有时需要在 headers 中添加一些信息，比如 token、auth 等，经常用到
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // params 是即将与请求一起发送的 URL 参数，经常用到
  params: {
    ID: 12345 // ?ID=12345
  },

  // paramsSerializer 是一个负责 params 序列化的函数
  paramsSerializer: {
    encode?: (param: string): string => {},
    serialize?: (params: Record<string, any>, options?: ParamsSerializerOptions ),
    indexes: false
  },

  // data 是作为请求主体被发送的数据
  // 作为 json 形式的请求主体被发送的数据
  data: {
    firstName: 'Fred'
  },

  // 作为 params 形式的请求主体被发送的数据
  data: 'Country=Brasil&City=Belo Horizonte',

  // timeout 指定请求超时之前的毫秒数，如果超过 timeout，则请求将被中止
  timeout: 1000, // default is `0` (no timeout)

  // withCredentials 表示跨域请求时是否需要使用凭证
  // 表明跨域请求时，是否允许携带 cookie
  withCredentials: false, // default

  // 适配器设置，在浏览器环境中，这将是 XHR 对象
  // 在 node.js 中，将是 http、https 或者 http2 等模块
  adapter: function (config) {
  },

  // auth 表示应该使用 HTTP 基础验证，并提供凭据，不怎么用
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // responseType 表示服务器响应的数据类型
  // 可以是 'arraybuffer'、'blob'、'document'、'json'、'text'、'stream' 等
  responseType: 'json', // default

  // responseEncoding 表示响应的数据编码
  responseEncoding: 'utf8', // default

  // xsrfCookieName 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // xsrfHeaderName 是携带 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // withXSRFToken 表示是否应该在请求中携带 xsrf token
  withXSRFToken: boolean | undefined | ((config: InternalAxiosRequestConfig) => boolean | undefined),

  // onUploadProgress 允许处理上传的进度事件
  onUploadProgress: function ({loaded, total, progress, bytes, estimated, rate, upload = true}) {},
  
  // onDownloadProgress 允许处理下载的进度事件
  onDownloadProgress: function ({loaded, total, progress, bytes, estimated, rate, download = true}) {},

  // maxContentLength 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // maxBodyLength 定义允许的请求内容的最大尺寸
  maxBodyLength: 2000,

  // validateStatus 定义对于给定的 HTTP 响应状态码是 resolve 或 reject
  // 对于响应状态码的判断
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // maxRedirects 定义在 node.js 中 follow 的最大重定向数
  maxRedirects: 21, // default

  // beforeRedirect 允许在重定向之前修改请求选项
  beforeRedirect: (options, { headers }) => {
      if (options.hostname === "example.com") {
          options.auth = "user:password";
      }
  },

  // socketPath 定义在 node.js 中使用的 Unix 域套接字
  socketPath: null, // default

  // transport 定义在 node.js 中使用的自定义 http.Agent
  transport: undefined, // default

  // httpAgent 和 httpsAgent 分别定义在 node.js 中 http 和 https 的自定义代理
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 代理服务器的信息
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // cancelToken 指定可用于取消请求的 cancel token
  cancelToken: new CancelToken(function (cancel) {}),

  // signal 指定可用于取消请求的 AbortController 信号
  signal: new AbortController().signal,

  // decompress 表示是否应该自动解压缩响应数据
  decompress: true, // default

  // insecureHTTPParser 表示是否应该使用不安全的 HTTP 解析器
  insecureHTTPParser: undefined, // default

  // transitional 表示过渡性的配置
  transitional: {
    silentJSONParsing: true, // default value for the current Axios version
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
  },

  // env 用于 node.js 的自定义环境变量
  env: {
    FormData: window?.FormData || global?.FormData
  },

  // fromSerializer 用于序列化请求参数
  formSerializer: {
      visitor: (value, key, path, helpers) => {};
      dots: boolean; // use dots instead of brackets format
      metaTokens: boolean; // keep special endings like {} in parameter key
      indexes: boolean; // array indexes format null - no brackets, false - empty brackets, true - brackets with indexes
  },

  // maxRate 用于限制请求的速率
  maxRate: [
    100 * 1024, // 100KB/s upload limit,
    100 * 1024  // 100KB/s download limit
  ]
}
```
