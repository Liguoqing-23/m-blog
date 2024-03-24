# Git 验证

## 基于 HTTP 凭证

HTTP 协议本身是无状态链接，所以每一个连接都需要验证信息（username and password），可以通过 session、cookie、token 等方式来保持状态。

Git Credential 选项：

-   默认：不缓存凭证。
-   cache：缓存凭证，缺省 15 分钟。
-   store：缓存凭证，缺省 15 分钟，但是会保存在磁盘上。
-   osxkeychain：macOS 的钥匙串。
-   wincred：Windows 的凭证管理器。

```bash
git config --global credential.helper # manager-core
git config --global --list # 查看配置
```

## SSH 验证

Secure Shell（SSH）是一种加密网络传输协议，用于在不安全的网络上安全地运行网络服务。

SSH 以非对称加密实现身份验证，通过公钥和私钥来验证身份。

```bash
# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "email"
```
