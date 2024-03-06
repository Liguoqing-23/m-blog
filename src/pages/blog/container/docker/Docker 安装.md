# Docker 安装

> [!tip]
> 官方文档：https://docs.docker.com/engine/install/

## 在 Ubuntu 20.04 上安装 Docker

### 卸载旧版本

```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

或者

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

### 添加 Docker repository

在首次安装 Docker Engine，需要设置 Docker repository。之后可以从 repository 安装和更新 Docker。

```bash
# 更新 apt 包索引
sudo apt-get update
sudo apt-get upgrade

# 安装命令行工具
sudo apt-get install ca-certificates curl gnupg lsb-release

# 添加 Docker 的官方 GPG 密钥
sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -

# 添加 Docker repository
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

### 安装 Docker Engine

```bash
# 更新 apt 包索引
sudo apt-get update

# 安装最新版本的 Docker Engine 和 containerd
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 验证安装

```bash
# 验证 Docker 是否安装成功
sudo docker --version

# 验证 Docker 是否能正常运行
sudo docker run hello-world
```
