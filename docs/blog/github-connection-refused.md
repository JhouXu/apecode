---
layout: doc
---

# Github Connection Refused

今天准备 push 代码时，出现 `vscode git ssh connect to host ssh.github.com port 443: Connection refused` 错误。

“ssh: connect to host ssh.github.com port 443: Connection refused” 通常意味着你的客户端成功到达了 GitHub 的 443 端口，但远端没有响应 SSH 请求，最常见的原因包括网络防火墙或路由阻断、DNS/hosts 配置错误、SSH 配置不当，以及代理/VPN 环境干扰。

解决方法：**重置 SSH 密钥**

```shell
# 删除原有 SSH 密钥
$ mv ~/.ssh ~/.ssh.bak

# 生成新的 SSH 密钥
# -t 指定密钥类型，这里使用 ed25519
$ ssh-keygen -t ed25519 -C "you@example.com"
```

然后将新公钥添加到 GitHub 账号 [Github Docs](https://docs.github.com/en/authentication/troubleshooting-ssh?utm_source=chatgpt.com)，即可。
