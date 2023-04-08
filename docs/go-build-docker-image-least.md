---
icon: edit
date: 2020-09-06 21:13:10
category:
  - linux
tag:
  - ssh
  - linux
link: https://mp.weixin.qq.com/s/7gYQRRAihqi4YgYP1uFiXA
---

# go build docker 打包压缩到最小镜像

直接上demo代码
```docker
FROM golang:alpine as builder
WORKDIR /app
COPY . /app
RUN set -x \
    && sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk update \
    && apk --no-cache add tzdata upx \
    && go env -w GO111MODULE=on \
    && go env -w GOPROXY=https://goproxy.cn,direct \
    && go env -w CGO_ENABLED=0 \
    && go env -w GOOS=linux
RUN set -x \
    && go build -ldflags "-s -w" -o server_temp \
    && upx -9 server_temp -o server \
    && rm -f server_temp

# production stage
FROM scratch as production
COPY --from=builder /app/server .
COPY --from=builder /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
EXPOSE 8080
CMD ["/server"]

```
详细说明
1. 分为构建和应用两部分，分开的后，最终实际只用到了构建的成品，所有构建前的源码以及构建过程产生的缓存包，还有构建环境其实都没有大的作用，docker本身就用go写的，所有有个特性，可以直接打成docker底层包放到docker空镜像里使用。
2. 国内源, go mod就不多说了
```
sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
```
```
go env -w GO111MODULE=on \
go env -w GOPROXY=https://goproxy.cn,direct \
```
3. 打包方式
关闭cgo，默认cgo为开启状态（1），在cgo开启状态下允许你在Go代码中调用C代码，go部分包中有c语言的实现，开启状态下可能会有动态引用外部。具体可以看go的可移植性和c的比较
```
go env -w CGO_ENABLED=0
```
GOOS为linux,可以指定编译的环境，可根据情况填写
```
GOOS=linux
```
4. 编译，添加编译参数 -ldflags "-s -w" ,如果用变量加个-X，设置如下
```
go build -ldflags "-s -w" -o server_temp
```
关于-ldflags说明

```
-w 去掉DWARF调试信息，得到的程序就不能用gdb调试了。
-s 去掉符号表,panic时候的stack trace就没有任何文件名/行号信息了，这个等价于普通C/C++程序被strip的效果，
-X 设置包中的变量值
```
5. 借助第三方工具再压缩upx, upx后面压缩值为-1~-9，1压缩速度最快，9压缩最小
```
upx -9 server_temp -o server
```
