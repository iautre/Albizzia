---
icon: edit
date: 2021-01-11 20:56:49
category:
  - springcloud
tag:
  - springcloud
  - eureka
link: https://mp.weixin.qq.com/s/K9P3FgHmnBxmlvuz7gvM0w
---

# Spring Cloud 2020 config bootstarp 无效

Spring Cloud 2020版本开始 Bootstrap上下文默认不再启动，改为了spring.config.import的方式，如需开启bootstrap启动方式，有两种方式：

设置值spring.cloud.bootstrap.enabled=true或者 spring.config.use-legacy-processing=true。
注意：这些个属性值必须确保其能放进环境里才能生效。比如：环境变量，系统属性，命令行等

引入一个spring-cloud-starter-bootstrap
```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>
```
