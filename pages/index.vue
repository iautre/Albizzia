<template>
  <NuxtLayout>
    <v-row dense>
      <v-col cols="12" v-for="item in data" :key="item.id">
        <NuxtLink :to="item.path">
          <v-card class="ma-1">
            <v-card-title class="text-h5">
              {{item.title}}
            </v-card-title>

            <v-card-subtitle>
              {{item.subtitle}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn variant="text">
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>
<script  setup>
const page = 1
const data = [
  { id: '123', path: '/', title: 'mysql 修改字符集和排序规则', subtitle: 'mysql5.7 字符集utf8mb4的默认排序规则为utf8mb4_general_ci mysql8 字符集utf8mb4的默认排序规则为utf8mb4_0900_ai_ci' },
  { id: '123', path: '/', title: '更改苹果电脑网卡mac地址', subtitle: '' },
  { id: '123', path: '/', title: 'linux后台执行命令：&与nohup的用法' , subtitle: '一般在执行shell命令的时候我们在命令的后面加上一个‘&’，这样就可以使得该程序在后台运行，但是当程序运行起来之后依旧会再次在shell中输出打印信息，shell依旧被占用，关闭shell则程序退出；这个时候我们可以使用ctrl+z命令，使得这个信息消失，可以做别的事情，但是关闭shell的时候程序依旧会退出' },
  { id: '123', path: '/', title: 'Spring Cloud 2020 config bootstarp 无效' , subtitle: 'Spring Cloud 2020版本开始 Bootstrap上下文默认不再启动，改为了spring.config.import的方式，如需开启bootstrap启动方式，有两种方式' },
  { id: '123', path: '/', title: 'springcloud eureka eureka-server和eureka-client包共存报错eurekaServerContext: no ApacheHttpClient4', subtitle: ''  },
  { id: '123', path: '/', title: '工具导航-红黑树动态解析', subtitle: '' },
  { id: '123', path: '/', title: 'vuepress-plugin-shortlink' , subtitle: 'A vuepress plugin for generate static post link based on post file name.' },
  { id: '123', path: '/', title: 'go build docker 打包压缩到最小镜像' , subtitle: '直接上demo代码' },
]
</script>