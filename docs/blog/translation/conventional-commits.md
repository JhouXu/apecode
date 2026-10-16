---
layout: doc
date: 2025-12-25
author: 俊小赞
---

# Conventional Commits 1.0.0

> 为提交信息添加人类和机器可读含义的规范

:::tip 翻译计划

[👉 原文](https://www.conventionalcommits.org/en/v1.0.0/#specification)

:::

## 摘要

常规提交规范是在提交信息上的一种轻量级约定。它提供了一套简单的规则，用于创建明确的提交历史；这使得在之上编写自动化工具更加容易。这种约定与 SemVer 相辅相成，通过描述提交信息中的功能、修复和破坏性变更来实现。

提交信息应按以下结构编写：

```shell
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

提交包含以下结构元素，以向您的库的消费者传达意图：

1. **fix:** 类型为 `fix` 的提交修复了代码库中的错误（这与 Semantic Versioning 中的 [PATCH](http://semver.org/#summary) 相关）。
2. **feat:** 类型为 `feat` 的提交为代码库引入了新功能（这与 Semantic Versioning 中的 [MINOR](http://semver.org/#summary) 相关）。
3. **BREAKING CHANGE:**一个带有 `BREAKING CHANGE:` 结尾的提交，或是在类型/作用域后追加 `!` 的提交，会引入破坏性 API 变更（与语义化版本控制中的 [MAJOR](http://semver.org/#summary) 相关联）。破坏性变更可以是任何类型提交的一部分。
4. 除了 `fix:` 和 `feat:` 之外的其他类型是被允许的，例如 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)（基于 [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)）推荐 `build:` 、 `chore:` 、 `ci:` 、 `docs:` 、 `style:` 、 `refactor:` 、 `perf:` 、 `test:` 以及其他类型。
5. 除了 `BREAKING CHANGE: <description>` 之外的其他结尾格式也可以提供，并遵循类似 [git trailer 格式](https://git-scm.com/docs/git-interpret-trailers)的惯例。

常规提交规范并未强制要求额外类型，它们在语义化版本控制中没有隐含效果（除非包含破坏性变更）。可以为提交的类型提供一个作用域，以提供额外的上下文信息，并包含在括号内，例如 `feat(parser): add ability to parse arrays` 。

## 示例

### 带有描述和破坏性变更页脚的提交信息

```shell
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 带有 ! 以引起对破坏性变更的注意的提交信息

```shell
feat!: send an email to the customer when a product is shipped
```

### 带有范围和 ! 以引起对破坏性变更的注意的提交信息

```shell
feat(api)!: send an email to the customer when a product is shipped
```

### 带有 ! 和 BREAKING CHANGE 页脚的提交信息

```shell
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### 没有正文的提交信息

```shell
docs: correct spelling of CHANGELOG
```

### 带有范围的提交信息

```shell
feat(lang): add Polish language
```

### 带有多段落正文和多个页脚的提交信息

```shell
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## 规范

本文件中的关键词“MUST”、“MUST NOT”、“REQUIRED”、“SHALL”、“SHALL NOT”、“SHOULD”、“SHOULD NOT”、“RECOMMENDED”、“MAY”和“OPTIONAL”应按照 [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) 中的描述进行解释。

1. 提交必须以类型为前缀，类型由名词、 `feat` 、 `fix` 等组成，后跟可选的作用域、可选的 `!` ，以及必需的终止冒号和空格。
2. 当提交为您的应用程序或库添加新功能时，必须使用类型 `feat` 。
3. 当提交代表您的应用程序的补丁时，必须使用类型 `fix` 。
4. 类型之后可以提供一个作用域。作用域必须由括号包围的描述代码库某一部分的名词组成，例如 `fix(parser)`:
5. 类型/作用域前缀之后的冒号和空格之后必须立即跟有一个描述。描述是对代码更改的简短总结，例如 fix: 当字符串中包含多个空格时，修复数组解析问题。
6. 在简短描述之后可以提供一个更长的提交正文，提供有关代码更改的额外上下文信息。正文必须在描述之后空一行开始。
7. 提交正文是自由形式的，可以由任意数量的由换行符分隔的段落组成。
8. 在正文之后可以提供一个或多个页脚，每个页脚必须由一个单词标记，后跟一个 `:<space>` 或 `<space>#` 分隔符，再跟一个字符串值（这借鉴了 [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)）。
9. 一个页脚的标记必须用 - 代替空白字符，例如 `Acked-by` （这有助于区分页脚部分和多段正文）。 `BREAKING CHANGE` 除外，它也可以用作标记。
10. 一个页脚的值可以包含空格和换行符，解析必须在观察到下一个有效的页脚标记/分隔符对时终止。
11. 破坏性变更必须在提交的类型/范围前缀中指示，或作为页脚条目。
12. 如果作为页脚包含，破坏性变更必须由大写文本“BREAKING CHANGE”，后跟一个冒号、空格和描述组成，例如：BREAKING CHANGE: 环境变量现在优先于配置文件。
13. 如果包含在类型/范围前缀中，破坏性变更必须在 `!` 之前立即使用 `:` 标识。如果使用 `!` ，则可以从页脚部分省略 `BREAKING CHANGE:` ，并且提交描述应当用于描述破坏性变更。
14. 除了 `feat` 和 `fix` 之外的类型，可以在你的提交信息中使用其他类型，例如：`docs:` 更新参考文档。
15. 构成 Conventional Commits 的信息单元，实现者必须不将其视为区分大小写，唯一的例外是 BREAKING CHANGE 必须为大写。
16. 当 BREAKING-CHANGE 作为页脚中的标记使用时，它必须与 BREAKING CHANGE 同义。

## 为什么要使用 Conventional Commits

- 自动生成 CHANGELOG。
- 自动确定语义版本变更（基于已合并提交的类型）。
- 向队友、公众和其他利益相关者传达变更的性质。
- 触发构建和发布流程。
- 通过允许他们探索更结构化的提交历史，使人们更容易为您的项目做出贡献。

## 常见问题解答

### 如何在初始开发阶段处理提交信息？

我们建议你像已经发布产品一样进行操作。通常有人会使用你的软件，即使他们是你同事，他们想知道已修复的内容、哪些功能被破坏等。

### 提交标题中的类型是大写还是小写？

可以使用任何大小写，但最好保持一致。

### 如果提交符合多个提交类型，我该怎么办？

尽可能多地回退并创建多个提交。Conventional Commits 的部分优势在于它能够促使我们做出更有组织的提交和 PR。

### 这难道不 discouraged 快速开发和快速迭代吗？

它不鼓励杂乱无章地快速行动。它帮助你能够在长期内跨多个项目，与不同贡献者一起快速推进。

### 传统提交（Conventional Commits）是否会导致开发者限制他们提交的类型，因为他们会思考提供的类型呢？

传统提交鼓励我们更多地提交某些类型的提交，例如修复。除此之外，传统提交的灵活性允许你的团队自己创建类型，并随着时间的推移改变这些类型。

### 这与语义化版本（SemVer）有何关联？

`fix` 类型的提交应翻译为 `PATCH` 版本。 `feat` 类型的提交应翻译为 `MINOR` 版本。所有包含 `BREAKING CHANGE` 的提交，无论类型如何，都应翻译为 `MAJOR` 版本。

### 我应该如何为 Conventional Commits 规范的扩展进行版本控制，例如 `@jameswomack/conventional-commit-spec` ？

我们建议使用 SemVer 来发布您对这个规范的扩展（并鼓励您进行这些扩展！）

### 如果我意外使用了错误的提交类型，该怎么办？

**当你使用了一个符合规范但类型不正确的类型，例如 `fix` 而不是 `feat`**

在合并或发布错误之前，我们建议使用 `git rebase -i` 来编辑提交历史。发布后，清理工作将根据你使用的工具和流程而有所不同。

**当你使用了一个不符合规范的类型，例如 `feet` 而不是 `feat`**

在最坏的情况下，如果一个提交不符合 Conventional Commits 规范，那也不是世界末日。这意味着该提交将被基于该规范的工具所忽略。

### 我所有的贡献者都需要使用 Conventional Commits 规范吗？

不！如果你在 Git 上使用基于压缩的工作流程，主要维护者可以在合并时清理提交信息——这对普通提交者没有任何工作量。这种常见的工作流程是让你的 git 系统自动压缩来自 pull request 的提交，并呈现一个表单供主要维护者输入合并的正确 git 提交信息。

### Conventional Commits 如何处理 revert 提交？

回滚代码可能很复杂：你是否在回滚多个提交？如果你回滚一个功能，下一个发布是否应该是一个补丁？

Conventional Commits 没有明确努力来定义回滚行为。相反，我们留给工具作者使用类型和脚注的灵活性来开发他们处理回滚的逻辑。

一个建议是使用 `revert` 类型，并在页脚中引用被撤销的提交 SHA：

```shell
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
