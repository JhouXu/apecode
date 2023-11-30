import{_ as s,o as n,c as a,N as l}from"./chunks/framework.a6d8af91.js";const A=JSON.parse('{"title":"常用的 git 命令总结","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"pages/blog/git.md","lastUpdated":1701314608000}'),p={name:"pages/blog/git.md"},o=l(`<h1 id="常用的-git-命令总结" tabindex="-1">常用的 git 命令总结 <a class="header-anchor" href="#常用的-git-命令总结" aria-label="Permalink to &quot;常用的 git 命令总结&quot;">​</a></h1><h2 id="一、仓库" tabindex="-1">一、仓库 <a class="header-anchor" href="#一、仓库" aria-label="Permalink to &quot;一、仓库&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">在当前目录新建一个 Git 代码库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#新建一个目录，将其初始化为 Git 代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">project-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">下载一个项目和它的整个代码历史</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="二、配置" tabindex="-1">二、配置 <a class="header-anchor" href="#二、配置" aria-label="Permalink to &quot;二、配置&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示当前的 Git 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">编辑 Git 配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git config -e </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">--global</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">设置提交代码时的用户信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git config </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">--global</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> user.name &quot;</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">--global</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> user.email &quot;[email address]&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="三、增加-删除文件" tabindex="-1">三、增加/删除文件 <a class="header-anchor" href="#三、增加-删除文件" aria-label="Permalink to &quot;三、增加/删除文件&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">添加指定文件到暂存区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git add </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">添加指定目录到暂存区，包括子目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git add </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">dir</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">添加当前目录的所有文件到暂存区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git add .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">添加每个变化前，都会要求确认</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git add -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm --cached </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git mv </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file-original</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file-renamed</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="四、代码提交" tabindex="-1">四、代码提交 <a class="header-anchor" href="#四、代码提交" aria-label="Permalink to &quot;四、代码提交&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">提交暂存区到仓库区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">提交暂存区的指定文件到仓库区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ... -m </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">提交工作区自上次 commit 之后的变化，直接到仓库区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">提交时显示所有 diff 信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">使用一次新的 commit，替代上一次提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">如果代码没有任何新变化，则用来改写上一次 commit 的提交信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend -m </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">重做上一次 commit，并包括指定文件的新变化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span></code></pre></div><h2 id="五、分支" tabindex="-1">五、分支 <a class="header-anchor" href="#五、分支" aria-label="Permalink to &quot;五、分支&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">列出所有本地分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">列出所有远程分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">列出所有本地分支和远程分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个分支，但依然停留在当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个分支，并切换到该分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个分支，指向指定 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --track </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">切换到指定分支，并更新工作区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">切换到上一个分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --set-upstream </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">合并指定分支到当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git merge </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">选择一个 commit，合并进当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git cherry-pick </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">将新分支推送到远程仓库中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin [branch name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">删除分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -d </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">删除远程分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin --delete </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -dr </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote/branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>标签</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">列出所有 tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个 tag 在当前 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个 tag 在指定 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">删除本地 tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag -d </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">删除远程 tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin :refs/tags/</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tagName</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">查看 tag 信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git show </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">提交指定 tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">提交所有 tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个分支，指向某个 tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="六、查看信息" tabindex="-1">六、查看信息 <a class="header-anchor" href="#六、查看信息" aria-label="Permalink to &quot;六、查看信息&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示有变更的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示当前分支的版本历史</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示 commit 历史，以及每次 commit 发生变更的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">搜索提交历史，根据关键词</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -S </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">keyword</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示某个 commit 之后的所有变动，每个 commit 占据一行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示某个 commit 之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --follow </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git whatchanged </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示指定文件相关的每一次 diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -p </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示过去 5 次提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -5 --pretty --oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git shortlog -sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git blame </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示暂存区和工作区的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示暂存区和上一个 commit 的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --cached </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示工作区与当前分支最新 commit 之间的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示两次提交之间的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">first-branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">second-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示今天你写了多少行代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --shortstat &quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示某次提交的元数据和内容变化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git show </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示某次提交发生变化的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git show --name-only </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示某次提交时，某个文件的内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git show </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">filename</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示当前分支的最近几次提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git reflog</span></span>
<span class="line"></span></code></pre></div><h2 id="七、远程同步" tabindex="-1">七、远程同步 <a class="header-anchor" href="#七、远程同步" aria-label="Permalink to &quot;七、远程同步&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">下载远程仓库的所有变动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git fetch </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示所有远程仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">显示某个远程仓库的信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote show </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">增加一个新的远程仓库，并命名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote add </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">shortname</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git pull </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">上传本地指定分支到远程仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">推送所有分支到远程仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git push </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --all</span></span>
<span class="line"></span></code></pre></div><h2 id="八、撤销" tabindex="-1">八、撤销 <a class="header-anchor" href="#八、撤销" aria-label="Permalink to &quot;八、撤销&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">恢复暂存区的指定文件到工作区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">恢复某个 commit 的指定文件到暂存区和工作区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">恢复暂存区的所有文件到工作区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">重置暂存区与工作区，与上一次 commit 保持一致</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --keep </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">新建一个 commit，用来撤销指定 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git revert </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash pop</span></span>
<span class="line"></span></code></pre></div><h2 id="九、其他" tabindex="-1">九、其他 <a class="header-anchor" href="#九、其他" aria-label="Permalink to &quot;九、其他&quot;">​</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">生成一个可供发布的压缩包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ git archive</span></span>
<span class="line"></span></code></pre></div>`,21),e=[o];function c(t,r,D,i,F,y){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{A as __pageData,g as default};
