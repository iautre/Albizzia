---
icon: edit
date: 2022-07-23 19:15:00
category:
  - mac
tag:
  - 网卡
  - mac地址
---

# 更改苹果电脑网卡mac地址

查看
```
ifconfig
```

查看当前所有端口的mac
```
networksetup -listallhardwareports
```
生成新的随机mac地址
```
openssl rand -hex 6 | sed 's/\(..\)/\1:/g; s/.$//'
```
断开当前无线网卡连接
```
sudo /System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -z
```
修改
```
sudo ifconfig en0 ether 10:4A:7D:A8:03:54
```
重新连接网卡
```
networksetup -detectnewhardware
```
