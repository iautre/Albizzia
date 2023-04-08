---
icon: edit
date: 2021-01-11 20:56:49
category:
  - springcloud
tag:
  - springcloud
  - eureka
---

# springcloud eureka eureka-server和eureka-client包共存报错eurekaServerContext: no ApacheHttpClient4

父pom引用
```maven
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```
子工程eureka中引用
```maven
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```
这时启动eureka时报错

```java
xception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'org.springframework.cloud.netflix.eureka.server.EurekaServerInitializerConfiguration': Unsatisfied dependency expressed through field 'eurekaServerBootstrap'; nested exception is org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'eurekaServerBootstrap' defined in class path resource [org/springframework/cloud/netflix/eureka/server/EurekaServerAutoConfiguration.class]: Unsatisfied dependency expressed through method 'eurekaServerBootstrap' parameter 1; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'eurekaServerContext': Invocation of init method failed; nested exception is java.lang.NoClassDefFoundError: com/sun/jersey/client/apache4/ApacheHttpClient4
```
