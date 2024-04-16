# axios 源码（一）目录结构

## 获取源码

```shell
git clone https://github.com/axios/axios.git
```

## axios 主要文件目录结构

```bash
axios
├── dist # 打包后的文件
├── lib # 源码
│   ├── adapters # 适配器
│   │   ├── http.js # http 适配器
│   │   └── xhr.js # xhr 适配器
│   ├── cancel # 取消请求
│   ├── core
│   │   ├── Axios.js
│   │   ├── InterceptorManager.js
│   │   ├── dispatchRequest.js
│   │   ├── mergeConfig.js
│   │   └── settle.js
│   ├── defaults.js
│   ├── utils.js
│   └── axios.js
├── package.json
└── README.md
```
