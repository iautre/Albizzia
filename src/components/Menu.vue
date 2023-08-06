<template>
<!--  <NuxtLink to="/">-->
<!--  <n-space justify="center" style="padding: 0 ;">-->
<!--      <n-avatar-->
<!--          round-->
<!--          :size="54"-->
<!--          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"-->
<!--      />-->
<!--    <n-space vertical>-->
<!--    <div>a lttle</div>-->
<!--    <div>有风小站</div>-->
<!--    </n-space>-->
<!--  </n-space>-->
<!--  </NuxtLink>-->
  <NuxtLink to="/">
    <n-space style="padding-left: 38px;padding-bottom: 12px;">
    <div style="font-size: 16px;">有风小站</div>
    </n-space>
  </NuxtLink>
  <n-menu :options="menus" style="width: 200px"/>
</template>
<script lang="ts" setup>
import {NMenu, NH2, NAvatar, NSpace} from 'naive-ui'
import type {MenuOption} from 'naive-ui'
// import {Component, h} from 'vue'
import {NIcon} from "naive-ui"

import {NuxtLink} from '#components'
import {
  ChatbubblesOutline,
  CodeSlashOutline,
  FlowerOutline,
  HomeOutline, ImageOutline, InformationCircleOutline, LogoGithub,
  RadioOutline,
  WifiOutline,
} from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, {default: () => h(icon)})
}
const renderLabelN = (label: string, path: string) => {
  return () => h(NuxtLink, {to: path}, {default: () => label})
}
const menus: MenuOption[] = [
  // {
  //   key: '1',
  //   label: renderLabelN('有风小站', '/'),
  //   icon: renderIcon(HomeOutline),
  // },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    key: 'divider-2',
    label: renderLabelN('说说', '/diary'),
    icon: renderIcon(ChatbubblesOutline),
  },
  // {key: '3', title: '我去过', icon: 'mdi-train-car-flatbed', path: '/mygo'},
  // {key: '4', title: 'Coding', icon: 'mdi-console-line', path: '/coding'},
  // {key: '5', title: '好书', icon: 'mdi-book-check-outline', path: ''},
  {
    key: 'divider-3',
    label: renderLabelN('随心拍', '/topic/pai'),
    icon: renderIcon(CodeSlashOutline)
  },
  {
    key: 'divider-8',
    label: renderLabelN('百花', '/100flower'),
    icon: renderIcon(FlowerOutline)
  },
  {
    key: 'divider-9',
    label: renderLabelN('标本', '/my-biaoben'),
    icon: renderIcon(ImageOutline),
  },
  {
    key: 'divider-6',
    label: renderLabelN('Coding', '/topic/coding'),
    icon: renderIcon(CodeSlashOutline)
  },
  {
    key: 'divider-10',
    label: renderLabelN('关于我', '/about'),
    icon: renderIcon(InformationCircleOutline),
  },
  {
    key: 'divider-98',
    label: () => h(
        'a',
        {
          href: 'https://github.com/iautre',
          target: '_blank',
        },
        'Github'
    ),
    icon: renderIcon(LogoGithub)
  },
  {
    key: 'divider-99',
    label: () => h(
        'a',
        {
          href: 'https://autre.cn/bh4ghm',
          target: '_blank',
        },
        '空中通联'
    ),
    icon: renderIcon(RadioOutline), path: 'https://autre.cn/bh4ghm'
  },
]

// const links = ref([
//   // {key: '1', title: '首页',icon: 'mdi-antenna', path: '/'},
//   // {key: '2', title: '微信',icon: 'mdi-wechat',  path: '/shuoshuo'},
//   // {key: '4', title: 'facebook', icon: 'mdi-facebook', path: '/coding'},
//   // {key: '5', title: '邮箱', icon: 'mdi-at', path: ''},
// ])
</script>
<style>
.mymain {
//position: fixed; z-index: 9999;width: 200px;box-shadow: none;background:none;
}
</style>
