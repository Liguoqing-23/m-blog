# pm2 基本使用（未完待续。。。）

> [!note] 官网
>
> https://pm2.keymetrics.io/

pm2 是一个守护进程管理工具，可以用来管理和监控 Node.js 应用程序进程。支持性能监控、自动重启、负载均衡等功能。

## 安装

```bash
npm install pm2 -g
# or
yarn global add pm2
```

## 基本使用

```bash
# 启动
pm2 start app.js [--name <name>]
# 停止
pm2 stop app.js
# 重启
pm2 restart app.js
# 删除
pm2 delete app.js
```

## 查看状态

```bash
pm2 ls
```

## 查看日志

```bash
pm2 logs
pm2 logs --raw # 查看原始日志
pm2 flush # 清空日志
pm2 reloadLogs # 重新加载日志
```
