# Docker 基本概念

## 容器和镜像

> [!tip]
> 什么是容器：https://docs.docker.com/guides/walkthroughs/what-is-a-container/

容器提供了一个独立、隔离的运行环境，代码能不受宿主操作系统或文件的影响而独立运行。
镜像是一个只读的模板（理解为类），容器是一个运行时的实例（理解为对象）。

当我们利用 Docker 安装应用时，Docker 会自动搜索并下载应用镜像 `image`。镜像不仅包含应用本身，还包含应用运行所需要的环境、配置、系统函数库。Docker 会在运行镜像时创建一个隔离环境，称为容器 `container`。
