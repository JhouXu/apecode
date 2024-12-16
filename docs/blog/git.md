---
layout: doc
---

# 常用的 git 命令总结

## 一、仓库

```shell
# 在当前目录新建一个 Git 代码库
$ git init

#新建一个目录，将其初始化为 Git 代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```

## 二、配置

```shell
# 显示当前的 Git 配置
$ git config --list

# 编辑 Git 配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

## 三、增加/删除文件

```shell
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

## 四、代码提交

```shell
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次 commit 之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有 diff 信息
$ git commit -v

# 使用一次新的 commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息
$ git commit --amend -m [message]

# 重做上一次 commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

## 五、分支

```shell
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定 commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个 commit，合并进当前分支
$ git cherry-pick [commit]

# 将新分支推送到远程仓库中
$ git push origin [branch name]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

标签

```shell
# 列出所有 tag
$ git tag

# 新建一个 tag 在当前 commit
$ git tag [tag]

# 新建一个 tag 在指定 commit
$ git tag [tag] [commit]

# 删除本地 tag
$ git tag -d [tag]

# 删除远程 tag
$ git push origin :refs/tags/[tagName]

# 查看 tag 信息
$ git show [tag]

# 提交指定 tag
$ git push [remote] [tag]

# 提交所有 tag
$ git push [remote] --tags

# 新建一个分支，指向某个 tag
$ git checkout -b [branch] [tag]
```

## 六、查看信息

```shell
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示 commit 历史，以及每次 commit 发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个 commit 之后的所有变动，每个 commit 占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个 commit 之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次 diff
$ git log -p [file]

# 显示过去 5 次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个 commit 的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新 commit 之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

## 七、远程同步

```shell
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

## 八、撤销

### reset

```shell
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个 commit 的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次 commit 保持一致
$ git reset --hard

# 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致
$ git reset --hard [commit]

# 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个 commit，用来撤销指定 commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]
```

:::tip

在我们使用 git 作为版本控制工具进行代码管理之后，经常性的会碰到一个问题：git commit 后，如何撤销 commit

```shell
# 撤销最后一次 commit
$ git reset --soft HEAD^

# 撤销最后一次 commit，以及撤销最后一次 add
$ git reset --soft HEAD^
```

:::

### revert

git revert 命令用于撤销先前提交的更改。它通过创建一个新的提交来实现这一点，这个新提交的更改与被撤销提交的更改相反。以下是一些使用 git revert 的常见命令和场景：

记住，git revert 是一个安全的操作，因为它不会改变项目的历史记录，而是在历史记录中添加一个新的提交来“反做”之前的更改。这使得 git revert 在多人协作的项目中非常有用。

```bash
# 撤销特定的提交
# 这里的 <commit> 可以是提交的哈希值，也可以是引用，比如分支名或标签。
$ git revert <commit>

# 撤销一系列提交
# 这里的 <commit1> <commit2> <commit3> 是一系列提交的哈希值。
$ git revert <commit1> <commit2> <commit3>

# 交互式变基
# 如果你想要撤销一系列提交，但不确定具体要撤销哪些提交，可以使用交互式变基：
# 这里的 <commit> 是你想要撤销更改的起始点。这将打开一个交互式界面，允许你选择要撤销的提交。
$ git revert -i <commit>

# 撤销到特定的提交
# 如果你想要撤销从某个特定提交到现在的所有更改，可以使用：
$ git revert --onto <commit>

# 撤销合并提交
# 如果你需要撤销一个合并提交，可以使用：
# 这里的 <parent_number> 是合并提交的父提交编号（通常是 1 或 2），而 <merge_commit> 是合并提交的哈希值。
$ git revert -m <parent_number> <merge_commit>

# 撤销特定分支上的提交
# 如果你想要撤销特定分支上的一系列提交，可以这样做：
# 这里的 <n> 是分支上你想要撤销的起始提交的位置。
$ git revert <branch_name>~<n>..<branch_name>

# 撤销操作中处理冲突
# 如果在撤销过程中出现冲突，Git 会停止撤销操作，让你解决冲突：
# 在你解决了所有冲突并添加了更改之后，使用这个命令来继续撤销操作。
$ git revert --continue

# 撤销撤销操作
# 如果你开始了一个撤销操作，但想要撤销这个撤销操作（例如，因为冲突无法解决），可以使用：
# 这将中止当前的撤销操作。
$ git revert --abort

# 使用 ORIG_HEAD 引用
# 在撤销操作之后，如果你想要回到撤销操作之前的状态，可以使用：
# ORIG_HEAD 是一个特殊的引用，它指向撤销操作之前 HEAD 的位置。
$ git checkout ORIG_HEAD
```

### 总结

:::tip

- 使用 git reset 当你想要改变仓库的历史记录，或者重新安排提交的顺序。
- 使用 git revert 当你想要保留历史记录，但需要撤销某些更改，特别是在公共分支上。

`注意`：在多人协作的环境中，使用 git reset --hard 和 git push --force 可以覆盖远程仓库的历史记录，这可能会对其他协作者造成影响。在这种情况下，git revert 是一个更安全的选择，因为它不会改变历史记录。

:::

## 九、备份

```shell
# 备份当前的工作区的内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到 Git 栈中。
$ git stash

# 显示 Git 栈内的所有备份
$ git stash list

# 删除 Git 栈内的指定备份
$ git stash drop

# 恢复最近一次的备份内容，恢复后，Git 栈内的该备份内容消失
$ git stash pop

# 恢复指定的备份内容，恢复后，Git 栈内的该备份内容消失
$ git stash apply stash@{0}

# 删除 Git 栈中所有备份
$ git stash clear
```

## 十、其他

```shell
# 生成一个可供发布的压缩包
$ git archive
```

## 十一、实操

### 撤销最后一次 commit

```shell
# 撤销最后一次 commit
$ git reset --soft HEAD^
```


### 撤销最后一次 commit，以及撤销最后一次 add

```shell
# 撤销最后一次 commit，以及撤销最后一次 add
$ git reset --soft HEAD^
```


### 删除本地分支，并拉取远程分支到本地

```shell
# 切换到其他分支
$ git checkout master

# 删除本地test分支
$ git branch -D dev

# 拉取远程库 dev 分支到本地的 dev，并创建本地 dev 分支
$ git fetch origin dev:dev
```


### 本次 commit，忽略 eslint 校验

```shell
$ git commit --no-verify -m "信息"
# or
$ git commit -m "信息" --no-verify
```
