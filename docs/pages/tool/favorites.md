---
layout: doc
---

<script setup>
  import file from '../../.vitepress/data/favorites/file.ts'
  import color from '../../.vitepress/data/favorites/color.ts'
  import logo from '../../.vitepress/data/favorites/logo.ts'
  import design from '../../.vitepress/data/favorites/design.ts'
  import icon from '../../.vitepress/data/favorites/icon.ts'
  import font from '../../.vitepress/data/favorites/font.ts'
  import illustration from '../../.vitepress/data/favorites/illustration.ts'
  import media from '../../.vitepress/data/favorites/media.ts'
  import image from '../../.vitepress/data/favorites/image.ts'
</script>

# 资源导航

## 文件转换

<NavCard :navData=file />

## 图像处理

::: tip
在线图像处理工具，抠图、画质增强、画质无损压缩
:::

<NavCard :navData=image />

## 设计配色

<NavCard :navData=color />

## 设计参考

<NavCard :navData=design />

## logo

<NavCard :navData=logo />

## 图标

<NavCard :navData=icon />

## 字体

::: tip
免费可商用的「字体」库
:::

<NavCard :navData=font />

## 插画

<NavCard :navData=illustration />

## 媒体

::: tip
免费可商用高质量图片、视频素材库
:::

<NavCard :navData=media />
