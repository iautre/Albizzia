---
icon: edit
date: 2020-05-02 15:12:17
category:
  - 区块链
tag:
  - Hyperledger
  - fabric
---

# Hyperledger fabric环境搭建

## 一.前言

操作系统： win10+Hyper-V+CentOS-7-x86_64-Minimal-1511

连接工具：Termuis

## 二.环境依赖

1. git
2. wget/curl
3. docker 和 docker-compose
4. nodejs 和 npm
5. python2.7 和 pip
6. go
7. gcc+ gcc-c++

### 1.git 安装

```
yum install git -y
```

### 2.wget/curlt 安装

一般自带都有吧

### 3.docker 和 docker-compose 安装

#### docker 安装

更改 docker 国内加速源：
可以通过阿里云定制属于自己的加速源
https://cr.console.aliyun.com/cn-shanghai/instances/mirrors

```
##创建目录
sudo mkdir -p /etc/docker
##创建文件
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://njai7mm6.mirror.aliyuncs.com"]
}
EOF
##载入配置项
sudo systemctl daemon-reload
##重启docker
sudo systemctl restart docker
##加入开机启动
systemctl enable docker
```

#### docker-compose 安装 https://github.com/docker/compose/releases

```
curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

如果报错：Cannot open self /usr/local/bin/docker-compose or archive /usr/local/bin/docker-compose.pkg，一般是由于下载文件不完整导致的，进入到 https://github.com/docker/compose/releases 下载对应版本的包 https://github.com/docker/compose/releases/download/1.25.4/docker-compose-Linux-x86_64 到/usr/local/bin/目录，然后重命名为 docker-compose 后赋权即可

### 4.node 和 npm 安装

通过 n 或者 nvm 安装，可以很好的控制版本，以 n 为例，先安装 n

下载源码 https://github.com/tj/n/releases 解压到 /usr/local/n/目录，然后设置 n 的环境变量：

```
export PATH=$PATH:/usr/local/n/bin
```

通过 n 命令安装 node:

注意： nodejs 版本 >=8.9.4 <9.0 ,npm 版本 >=5.6.0 <6.0

n 8.9.4

更改 npm 源

```
npm config set registry https://registry.npm.taobao.org
```

查看当前源

```
npm config get registry
```

### 6.go 安装

https://www.runoob.com/go/go-environment.html

go 源改为国内源：

https://github.com/goproxy/goproxy.cn/blob/master/README.zh-CN.md

### 7.安装 gcc+ gcc-c++

```
yum install gcc+ gcc-c++
```

## 三.Fabric 安装

官方提供了一键安装脚本，执行改脚本会有三步 1.网络好的话可以选择全自动安装

### 1.下载 fabric-sample

下载文件

```
git clone https://github.com/hyperledger/fabric-samples
```

检出指定版本

git checkout v1.4.4

或者直接下载对应版本资源代码

https://github.com/hyperledger/fabric-samples/releases

### 2.下载二进制文件

在 fabric 资源文件页面https://github.com/hyperledger/fabric/releases下载对应的包，然后解压后，将bin和cofing文件夹移至 fabric-samples 中，并赋权

```
chmod +x bin/*
```

设置环境变量

```
export PATH=$PATH:/app/fabric-samples/bin
```

验证二进制文件及环境，出现版本信息则正确

```
peer version
```

## 四.初始化环境

进入 fabric-samples/fabcar/目录, 启动脚本配置网络下载容器

```
./startFabric.sh
```

成功后进入 fabric-samples/fabcar/javascript 目录, 初始化 node 包资源

```
npm install
```

一切资源初始化完后，就可以启动了

## 五.启动网络

### 1. fabcar 网络

依次执行下面语句，第一句执行完正常应该显示“ Successfully enrolled admin user “admin” and imported it into the wallet ”

```
node enrollAdmin.js
node registerUser.js
node query.js
```

最后语句执行完结果为一堆数组 json

### 2.启动 first-network

切换目录到 fabric-samples/first-network,关闭之前启动的网络

```
./byfn.sh down
```

启动网络

```
./byfn.sh up
```

一堆像之前安装的一样大大的“END”, 说明网络环境搭建成功

> 参考资料:
>
> 1. https://hyperledger-fabric.readthedocs.io/zh_CN/release-1.4/index.html
> 2. https://blog.csdn.net/qq_27348837/article/details/92570917
