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

## 查看提交历史

```bash
git log
git log --oneline # 简短输出
git log --graph # 图形化输出
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit # 自定义输出
```

## 版本回退

```bash
git reset --hard HEAD^ # 回退到上一个版本
git reset --hard HEAD~3 # 回退到上三个版本
git reset --hard [commit-id] # 回退到指定版本
```

## 查看所有记录

```bash
git reflog # 即使回退，也可以通过 reflog 查看所有记录
```

## 查看远程仓库

```bash
git remote -v # 查看远程仓库地址
```

## 添加远程仓库

```bash
git remote add [name] [url] # name 一般是 origin，url 是远程仓库地址
```

## 从远程仓库拉取

`git pull` 相当于 `git fetch` + `git merge`。

`fetch` 只会拉取远程仓库的代码，不会合并到本地仓库。

```bash
git pull [remote] [branch] # 从远程仓库拉取代码

# 例子
git pull origin main
```

如果是首次拉取远程已有仓库，需要指定 `--allow-unrelated-histories` 参数。

> [!tip] 关于 `--allow-unrelated-histories` 可查看
> https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase

> "git merge" used to allow merging two branches that have no common base by default, which led to a brand new history of an existing project created and then get pulled by an unsuspecting maintainer, which allowed an unnecessary parallel history merged into the existing project. The command has been taught not to allow this by default, with an escape hatch --allow-unrelated-histories option to be used in a rare event that merges histories of two projects that started their lives independently.

```bash
git pull origin main --allow-unrelated-histories
```

## 推送到远程仓库

```bash
git push [remote] [branch] # 推送到远程仓库

# 例子
git push origin main

# 不同名分支
git push origin main:master # 推送本地 main 分支到远程 master 分支
git push -u origin main:master # 推送并关联本地 main 分支到远程 master 分支
```

`push` 的默认行为是 `simple`，只会推送当前分支到远程仓库的同名分支。

如果要改变默认行为需要配置 `push.default`。

```bash
git config push.default upstream # 推送到上游分支
git config push.default current # 推送到当前分支，如果没有会创建

# 查看更改
git config --list
```

## 一个基本流程

已有项目：

```bash
git clone [url] # 克隆远程仓库
git add . # 添加所有文件
git commit -m "message" # 提交
git pull # 合并远程仓库代码
git push # 推送到远程仓库
```

新项目：

```bash
# 方法一
git clone [url] # 克隆远程空仓库
git add . # 添加所有文件
git commit -m "message" # 提交
git push # 推送到远程仓库

# 方法二：不推荐
git init # 初始化本地仓库
git add . # 添加所有文件
git commit -m "message" # 提交
git remote add origin [url] # 添加远程仓库
git branch -set-upstream-to=origin/main main # 设置本地分支与远程分支关联
git fetch
git merge --allow-unrelated-histories origin/main # 合并远程仓库代码
git push # 推送到远程仓库
```

## tag

tag 一般用于对某一关键或重要的提交做标记。比如版本号。

```bash
git tag -a [tag-name] # 创建 tag
git tag # 查看所有 tag（无法查看 message）

git tag -a [tag-name] -m "message" # 创建 tag，并添加 message
git show [tag-name] # 查看某 tag 具体信息

git tag -d [tag-name] # 删除 tag
gut push origin -d [tag-name] # 删除远程 tag

git push origin [tag-name] # 推送 tag 到远程仓库
git push origin --tags # 推送所有 tag 到远程仓库

git checkout [tag-name] # 切换到 tag，只查不改，最好创建分支
```

## 分支

Git 默认分支为 `main` 或 `master`。

```bash
git branch # 查看当前所有分支
git branch -v # 查看所有分支和最后一次提交信息
git branch -a # 查看所有分支（包括远程）
git branch -vv # 查看所有分支和远程分支关联信息

git branch --merged # 查看已合并的分支
git branch --no-merged # 查看未合并的分支

git branch -d [branch-name] # 删除分支
git branch -D [branch-name] # 强制删除分支
```

创建分支

```bash
git branch [branch-name] # 创建分支
git checkout [branch-name] # 切换分支
git checkout -b [branch-name] # 创建并切换分支
```

实际开发中往往用作于开发新功能或修复 bug。修 bug 的话可以从发布版本的 tag 创建 hotfix 分支。最终还会将已修复分支合并到主分支。

```bash
git merge [branch-name] # 合并当前分支和指定分支
```

合并共同祖先同一文件时，有可能合并冲突。这时可以选择自己手动解决冲突，或者使用编辑器或 IDE 的可视化工具来解决。

常见 git flow 1：

-   master 作为主分支进行开发
-   develop 作为开发分支，切到 master 执行 merge 发布稳定版本
-   topic 作为功能分支，从 develop 分支创建，开发完成后合并到 develop 分支

常见 git flow 2：

-   master 作为主分支进行开发
-   develop 作为开发分支，切到 master 执行 merge 发布稳定版本
-   feature 作为功能分支，从 develop 分支创建，开发完成后合并到 develop 分支
-   release 作为发布分支，从 develop 分支创建，发布完成后合并到 master 和 develop 分支
-   hotfix 作为修复分支，从 master 分支创建，修复完成后合并到 master 和 develop 分支

## 远程仓库

```bash
git remote add [name] [url] # 添加远程仓库
git remote -v # 查看远程仓库地址
git remote show [name] # 查看远程仓库信息
git remote rename [old-name] [new-name] # 重命名远程仓库
git remote rm [name] # 删除远程仓库
```

如果本地时 `master` 而远程是 `main`，可以操作如下：

```bash
# 本地创建 main 分支并关联远程 main 分支（推荐）
git checkout --track origin/main
```

如果想要开启一个共享分支，需要将分支推送到远程仓库。

```bash
git push origin [branch-name] # 推送分支到远程仓库
git branch --set-upstream-to=origin/[branch-name] # 设置本地分支与远程分支关联
git commit -a -m "message" # 提交
git push # 推送到远程仓库
```

别人要切换到该分支，只需要：

```bash
git checkout [branch-name] # 切换到分支
# 等价于 git checkout --track origin/[branch-name] ，本地创建分支并跟踪
git push
```

删除远程分支：

```bash
git push origin -d [branch-name] # 删除远程分支
```

## rebase

在 git 中整合来自不同分支的修改主要有两种方法：merge 和 rebase。

`merge` 是将两个分支的修改合并到一起，形成一个新的提交节点。

`rebase` 是将一个分支的修改放到另一个分支的最后面。

```bash
git rebase [branch-name] # 将当前分支的修改放到指定分支的最后面
git merge [branch-name] # 将指定分支的修改合并到当前分支
```

merge 用于记录所有历史，不论分支错综复杂，merge 都会全部记录下来。

rebase 用于清理历史，将分支的修改放到最后面，使历史更加清晰。

rebase 黄金法则：不要在主分支上 rebase。因为如果在主分支上使用 rebase，会造成大量的提交历史在主分支中不同。
