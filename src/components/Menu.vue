<template>
  <n-menu :options="menus" style="width: 200px"/>
</template>
<script lang="ts" setup>
import {NMenu} from 'naive-ui'
import type {MenuOption} from 'naive-ui'
import {Component, h} from 'vue'
import {NIcon} from "naive-ui"
import {HomeOutlined} from '@vicons/antd'
import {NuxtLink} from '#components'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, {default: () => h(icon)})
}
const renderLabelN = (label: string, path: string) => {
  return () => h(NuxtLink, {to: path}, {default: () => label})
}
const menus: MenuOption[] = [
  {
    key: '1',
    label: renderLabelN('首页', '/'),
    icon: renderIcon(HomeOutlined),
  },
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
    key: '2',
    label: renderLabelN('说说', '/shuoshuo'),
    icon: renderIcon(HomeOutlined),
  },
  // {key: '3', title: '我去过', icon: 'mdi-train-car-flatbed', path: '/mygo'},
  // {key: '4', title: 'Coding', icon: 'mdi-console-line', path: '/coding'},
  // {key: '5', title: '好书', icon: 'mdi-book-check-outline', path: ''},
  {
    key: '8',
    label: renderLabelN('百花', '/100flower'),
    icon: renderIcon(HomeOutlined), path: '/100flower'
  },
  {
    key: '9',
    label: renderLabelN('标本', '/my-biaoben'),
    icon: renderIcon(HomeOutlined),
  },
  {
    key: '10',
    label: renderLabelN('关于我', '/about'),
    icon: renderIcon(HomeOutlined),
  },
  {
    key: '99',
    label: () => h(
        'a',
        {
          href: 'https://autre.cn/bh4ghm',
          target: '_blank',
        },
        '空中通联'
    ),
    icon: renderIcon(HomeOutlined), path: 'https://autre.cn/bh4ghm'
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