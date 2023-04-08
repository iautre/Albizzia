---
icon: edit
date: 2020-06-05 23:00:17
category:
  - linux
tag:
  - ssh
  - linux
star: true
link: https://mp.weixin.qq.com/s/7gYQRRAihqi4YgYP1uFiXA
---

# ssh免密登陆

本地生成证书
```
ssh-keygen -t rsa -C "your_email@example.com"
```
复制密钥内容，windows目录
```
C:\Users\当前用户名\.ssh\id_rsa.pub
```
进入到远程服务器登陆用户根目录
```
cd ~
```
将本地id_rsa.pub中内容复制到服务器文件中
```
echo "id_rsa.pub中内容" > .ssh/authorized_keys
```
这样就可以免密登陆了
```
ssh root@远程服务器
```
如果出现Permission denied（publickey）或者Permission denied（publickey，password）之类的报错，需要修改ssh配置文件
```
vi /etc/ssh/sshd_config
```
找到以下内容，
```
# Authentication:

#LoginGraceTime 2m
#PermitRootLogin yes  #设置为允许以root用户身份登录
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

PubkeyAuthentication yes  #设置为允许公钥验证。是以使用RSA密钥进行身份验证
```
将PermitRootLogin，PubkeyAuthentication注释去掉，并值为yes
然后重启ssh
```
sudo service sshd restart
```
