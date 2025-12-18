---
layout: doc
date: 2025-08-02
author: 俊小赞
---

# NVS 包管理器

`NVS`（Node Version Switcher）是一个跨平台的 Node.js 版本管理器，类似于 `nvm`，但支持 Windows、macOS 和 Linux，并且通过 PowerShell 和 Bash 脚本实现，速度更快，配置更灵活。

[👉 官方仓库](https://github.com/jasongin/nvs)

## 特点

- ✅ 支持跨平台（Windows / macOS / Linux）
- ✅ 支持 `.nvmrc` 文件
- ✅ 支持 LTS、最新版本自动获取
- ✅ 支持按需加载（不全局污染）
- ✅ 可设置为 shell 自动加载所需 Node 版本

## 安装方式

1. Windows 安装

```shell
git clone https://github.com/jasongin/nvs --depth=1 "$env:LOCALAPPDATA\nvs"
& $env:LOCALAPPDATA\nvs\nvs.ps1 install
```

之后重启终端，或将以下路径加入环境变量：

```makefile
C:\Users\<username>\AppData\Local\nvs
```

2. macOS / Linux 安装

```bash
git clone https://github.com/jasongin/nvs ~/.nvs --depth=1
. ~/.nvs/nvs.sh install
```

然后在 `.bashrc` / `.zshrc` 中加入：

```bash
. ~/.nvs/nvs.sh
```

:::warning ❓ PowerShell 报错：“无法加载文件，因为在此系统上禁止运行脚本”

这是因为 PowerShell 默认禁止脚本运行。

解决方案：

```shell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

然后输入 `Y` 确认。

:::

## 基本命令

```bash
nvs add <version>       # 安装某个版本的 Node.js
nvs use <version>       # 切换当前 shell 使用的版本
nvs run <version>       # 使用某版本直接运行 node/npm 命令
nvs ls                  # 查看已安装版本
nvs remote              # 查看可安装的远程版本
nvs rm <version>        # 删除某个版本
```

## .nvmrc 文件支持

NVS 支持 .nvmrc，可以实现根据项目指定 Node 版本：

确保根目录存在 .nvmrc 文件，内容是 Node 版本号，如：

```[./.nvmrc]
v10.15.3

# 可以省略 v
# 10.15.3
```

然后在终端执行 `nvs use` 命令，NVS 会自动切换到指定版本：

```bash
nvs use
```

## 和 NVM 区别

| 特性          | NVS                        | NVM                         |
| ------------- | -------------------------- | --------------------------- |
| 跨平台支持    | ✅ Windows / macOS / Linux | ❌ Windows 需用 nvm-windows |
| 安装方式      | Git clone + 脚本           | 安装脚本                    |
| `.nvmrc` 支持 | ✅ 支持                    | ✅ 支持                     |
| 自动切换版本  | ✅ `nvs auto`              | ❌ 需额外配置               |
| 安装体积      | 小，按需加载               | 通常较大                    |
| 配置方式      | Bash / PowerShell          | Bash / Zsh                  |

## 总结

NVS 是一个现代、轻量级、跨平台的 Node.js 版本管理器，适合需要在不同项目之间频繁切换 Node 版本的开发者。相比 NVM 更加灵活且适配 Windows，对于多系统开发者尤其推荐。
