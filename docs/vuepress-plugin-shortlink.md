---
icon: edit
date: 2020-11-15 21:40:25
category:
  - vue
tag:
  - vuepress
  - shortlink
# sidebar: heading
---

# vuepress-plugin-shortlink

# [vuepress-plugin-shortlink](https://coding.autre.cn/vuepress-plugin-shortlink.html)

A vuepress plugin for generate static post link based on post file name.

## 安装

```
npm install vuepress-plugin-shortlink --save
```

从config.js配置中删除 permalink，该插件是基于默认永久链接/:regular


## 例子

### version 1.0
```
source: /books/a-book.md
permalink: /books/261f97f7.html

source: /hello-word.md
permalink: /b1d4025b.html

source: /books/computer/a-book.md
permalink: /books/computer/261f97f7.html
```

## 设定参数

该插件基于vuepress-plugin-clean-urls，可以自定义后缀和404，设定方法同vuepress-plugin-clean-urls

```
plugins: [
    [
      'vuepress-plugin-shortlink',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      },
    ],
  ],
```
### version 1.1 

增加配置containDirs
可设定只当文件夹全路径，其余只保留文件路径

```
plugins: [
    [
      'vuepress-plugin-shortlink',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
        containDirs: ['/books']
      },
    ],
  ],
```
地址展示
```
source: /books/a-book.md
permalink: /books/261f97f7/

source: /hello-word.md
permalink: /b1d4025b/

source: /say/hello-word.md
permalink: /b1d4025b/

source: /books/computer/a-book.md
permalink: 261f97f7/
```

## ThanksFor

[vuepress-plugin-clean-urls](https://github.com/vuepress/vuepress-plugin-clean-urls) [sheetjs](https://github.com/SheetJS/js-crc32)
