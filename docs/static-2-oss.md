---
icon: edit
date: 2020-05-01 17:22:30
category:
  - oss
tag:
  - hexo
  - vuepress
  - oss
---

# 静态文件部署到阿里云oss

一个可以将构建的静态文件推送到[阿里云](https://www.aliyun.com/minisite/goods?userCode=o5ofeqxc) oss 的 docker 镜像，一般来说，既然是 docker，还得使用宿主机，既然有了宿主机，完全可以用 ossutil 工具。

所以该镜像配合 coding 用起来很方便，coding 有自动化部署功能，通过该功能可以实现静态网站生成，配合该推送工具，即可同步推送到 oss。

该镜像目前通过 hexo 和 vuepress 测试正常，其他程序暂未测试。

## 实现步骤

先进行构建静态网站，然后讲静态网站文件全部推送到 oss

## 准备条件

1. oss 秘钥配置文件 ossutilconfig

```
[Credentials]
    language=CH
    accessKeyID=LTAIbZcdVCmQ****
    accessKeySecret=D26oqKBudxDRBg8Wuh2EWDBrM0****
    endpoint=oss-cn-hongkong.aliyuncs.com
```

2. hexo 和 vuepress 需要基于现有项目，不能全局安装，需要基于项目安装的 vuepress 或者 hexo，所以需要 package.json 增加 scripts

```
"scripts": {
  "build2oss": "npx xxxxxxxx"
}
```

3. 配置 Jenkinsifle，DEST=生成的静态文件目录

```
pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]],userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]])
      }
    }
    stage('构建并推送到oss') {
      steps {
        sh 'docker run -i --name build2oss -v "$(pwd)/":/var/app -e DEST="public" -e BUCKET=${BUCKET} ioutio/build2oss'
      }
    }
  }
}
```

4. coding 自动部署配置：

持续集成=》构建计划=》新建，配置来源选择使用代码库中的 Jenkinsfile

![新建构建计划](https://i.autre.cn/20200502234746.png)

设置环境变量 BUCKET=Bucket 名称，其他保持不变，触发规则可以根据自己情况配置

![环境变量设置](https://i.autre.cn/20200502235231.png)

## vuepress 目录及文件说明：

进到 vuepress 根目录，确保结构如下，有 ossutilconfig 文件

```
. 根目录
|--docs
|--|--dist          #生成的静态文件目录
|--|--.vuepress
|--|--|--config.js  #vuepress配置文件
|--|--README.md
|--package.json     #vuepress所属项目配置文件
|--ossutilconfig    #阿里云oss配置参数
|--Jenkinsifle      #自动构建文件
```

package.json 中"build2oss"："npx vuepress build docs"

将 Jenkinsifle 中构建并推送 oss 步内容改为：

```
stage('构建并推送到oss') {
  steps {
    sh 'docker run -i --name build2oss -v "$(pwd)/":/var/app -e DEST="docs/dist" -e BUCKET=${BUCKET} ioutio/build2oss'
  }
}

```

## hexo 目录及文件说明：

进到 hexo 根目录，确保结构如下，有 ossutilconfig 文件

```
. 根目录
|--public           #生成的静态文件目录
|--package.json     #vuepress所属项目配置文件
|--ossutilconfig    #阿里云oss配置参数
```

package.json 中"build2oss"："npx hexo generate"

将 Jenkinsifle 中构建并推送 oss 步内容改为：

```
stage('构建并推送到oss') {
  steps {
    sh 'docker run -i --name build2oss -v "$(pwd)/":/var/app -e DEST="public" -e BUCKET=${BUCKET} ioutio/build2oss'
  }
}
```

一切配置好后，如果触发是提交代码就触发，每次提交代码，就自动部署到 oss 了，大约 1 分钟左右吧。
