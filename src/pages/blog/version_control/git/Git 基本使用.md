# Git 基本使用

在古早时期，CVS 和 SVN 是主流的版本控制系统。但是它们都是集中式的版本控制系统 CVCS Centralized Version Control System，存在一些问题。比如，服务器宕机，网络不通，都会导致无法提交代码。

Git 属于一种 DVCS Distributed Version Control System，分布式版本控制系统。客户端和服务器端都有完整的版本库，不依赖网络，可以在本地进行版本控制。每一次 clone 都是对仓库的完整备份。

> [!note] 官方文档
> https://git-scm.com/doc

## 初始化

```bash
git config --global user.name "name"
git config --global user.email "xxx@xxx.com"
git config --global credential.helper store # 保存用户名和密码
git config --global --list # 查看配置
```

> [!tip]
>
> -   `--global` 全局配置，所有仓库生效
> -   `--system` 系统配置，所有用户生效
> -   `--local` 本地配置，当前仓库生效 (缺省)

## 获取一个 Git 仓库

创建新的本地仓库

```bash
git init [project-name] # 缺省 project-name 时，会在当前目录创建 git 仓库。
```

克隆远程仓库

```bash
git clone [url]
```

## Git 四大区域

-   工作区 (Working Directory)：存放项目代码资源的位置，在这里新增文件、修改文件内容，以及删除文件。
-   暂存区 (Staging Area/Index)：存放临时提交的修改内容。位于 .git/index 文件，保存待提交的文件列表信息。
-   本地仓库 (Local Repository)：Git 管理版本的数据库，记录文件/目录状态，以及文件修改记录/版本。即 .git 文件夹，包含了 Git 仓库的所有信息。
-   远程仓库 (Remote Repository)

```
project-explorer
├─.git
│  │  config # 仓库配置
│  │  index # 暂存区
│  │  HEAD # 当前分支
│  └  ...
└ 工作区
```

## Git 状态

-   未跟踪 (Untracked)：新建，且未管理的文件。
-   未修改 (Unmodified)：管理，但未修改的文件。
-   已修改 (Modified)：已修改，但未暂存的文件。
-   已暂存 (Staged)：已暂存，但未提交的文件。

## 基本概念

-   main/master: 主分支
-   origin: 远程仓库地址
-   HEAD: 当前分支
-   HEAD^: 上一个版本
-   HEAD~3: 上三个版本

## Git 文件

-   .gitignore 忽略文件
-   .gitattributes
-   .gitmodules
-   .gitconfig
-   .gitkeep

## 添加和提交

```bash
git add [file]
git add .
git commit -m "message"
git commit -a -m "message" # 相当于 git add . && git commit -m "message"
```

## 查看状态

```bash
git status
git status -s # 简短输出 (short)
```
