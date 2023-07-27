<template>
  <v-card class="ma-1" style="position: fixed; z-index: 9999;width: 200px;box-shadow: none;background:none;">
<!--    <v-card-title class="mx-auto bg-grey-lighten-3">-->
<!--    <v-avatar color="grey-darken-1" size="64"></v-avatar>-->
<!--    </v-card-title>-->
  <v-list class="pt-0" style="background:none;">
    <v-list-item class="pt-1 pb-2" >
<!--        prepend-avatar="https://avatars.githubusercontent.com/u/8779333?v=4"-->
<!--        title="a little"-->
<!--        subtitle="有风小站"-->

      <NuxtLink to="/">有风小站</NuxtLink>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <NuxtLink v-for="item in menus" :key="item.key" :to="item.path" >
    <v-list-item link>
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>
      <v-list-item-title>
        {{item.title}}
      </v-list-item-title>
    </v-list-item>
    </NuxtLink>
    <v-divider class="my-2"></v-divider>

    <v-list-item
        color="grey-lighten-3"
    >
        <v-icon v-for="item in links" :key="item.key"
            size="large"
            :icon="item.icon"
        ></v-icon>
    </v-list-item>
  </v-list>
  </v-card>
</template>
<script lang="ts" setup>
const menus = ref([
  {key: '1', title: '首页',icon: 'mdi-home-roof', path: '/'},
  {key: '2', title: '说说',icon: 'mdi-chat-outline',  path: '/shuoshuo'},
  {key: '3', title: '我去过', icon: 'mdi-train-car-flatbed', path: '/mygo'},
  {key: '4', title: 'Coding', icon: 'mdi-console-line', path: '/coding'},
  {key: '5', title: '好书', icon: 'mdi-book-check-outline', path: ''},
  // {key: '6', title: '空中通联', icon: 'mdi-antenna', path: 'https://autre.cn/bh4ghm'},
])
const links = ref([
  {key: '1', title: '首页',icon: 'mdi-antenna', path: '/'},
  {key: '2', title: '微信',icon: 'mdi-wechat',  path: '/shuoshuo'},
  {key: '4', title: 'facebook', icon: 'mdi-facebook', path: '/coding'},
  {key: '5', title: '邮箱', icon: 'mdi-at', path: ''},
  {key: '6', title: '邮箱', icon: 'mdi-at', path: ''},
])
</script>