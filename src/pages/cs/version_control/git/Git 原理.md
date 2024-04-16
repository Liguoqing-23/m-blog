# Git 原理

## Git 校验和

Git 使用 SHA-1 算法计算数据的校验和，校验和是一个 40 位的十六进制数，用于标识数据的唯一性。

每一次 commit 都是基于 git 中文件的内容或目录结构计算得出校验和，相当于一次快照。

```bash
echo 'hello' | git hash-object --stdin

# ef0493b275aa2080237f676d2ef6559246f56636
```

## Git 对象

Git 对象是 Git 中最基本的单位，包括三种类型：

-   Blob 对象：存储文件数据
-   Tree 对象：存储目录结构
-   Commit 对象：存储提交信息

```bash
# 查看对象类型
git cat-file -t xxxxxxxx...
# commit | tree | blob

# 查看 commit 对象
git cat-file -p xxxxxxxx...
# tree xxxxxxxx...
# parent xxxxxxxx...
# author xxxxxxxx...
# committer xxxxxxxx...

# 查看 tree 对象
git cat-file -p xxxxxxxx...
# 100644 blob xxxxxxxx...    file
# 040000 tree xxxxxxxx...    dir

# 查看 blob 对象
git cat-file -p xxxxxxxx...
# console.log('hello git')
```

`git add` 后只会创建 blob 对象，所以叫暂缓区。`git commit` 会创建 tree 和 commit 对象。

首次提交产生的提交对象没有父对象，普通提交产生的提交对象有一个父对象。由多个分支合并产生的提交对象有多个父对象。

`master` 或 `main` 分支指向最新的提交对象，`HEAD` 指向当前分支。

打一个 tag 相当创建一个文件指向某个提交对象。和 `master`、`HEAD` 的本质是一样的。

创建一个分支也同样如此，切换分支相当于切换 `HEAD` 以指向分支文件所指向的提交对象。

## rebase

1. 找到两个分支的最近共同祖先
2. 比较当前分支和共同祖先的历次提交，提取相应修改，生成补丁
3. 将当前分支指向目标分支
4. 按照历次提交的顺序依次应用补丁

```bash
# 在 feature 分支中执行
git rebase master

# 在 master 中执行
git merge feature
```

这样，就当下而言，`master` 和 `feature` 指向同一个提交对象，而且分支的提交历史是线性的。
