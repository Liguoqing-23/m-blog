# Git 配置代理

设置代理：

```bash
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
```

取消代理：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
