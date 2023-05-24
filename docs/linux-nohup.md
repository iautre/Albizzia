---
icon: edit
date: 2022-06-05 21:32:00
category:
  - linux
tag:
  - linux
  - nohup
---

# linux后台执行命令：&与nohup的用法

```
&，./test &
```
一般在执行shell命令的时候我们在命令的后面加上一个‘&’，这样就可以使得该程序在后台运行，但是当程序运行起来之后依旧会再次在shell中输出打印信息，shell依旧被占用，关闭shell则程序退出；这个时候我们可以使用ctrl+z命令，使得这个信息消失，可以做别的事情，但是关闭shell的时候程序依旧会退出

```
./test >> out.txt 2>&1 & 
```

2>&1是指将标准错误重定向到标准输出，于是标准错误和标准输出都重定向到指定的out.txt文件中，从此终端彻底清静了。

```
nohup ./test &
nohup ./test > myout.txt 2>&1 &
nohup -c ./test > myout.txt 2>&1 &
```
nohup打日志不实时，可以加-c让日志实时写到文件