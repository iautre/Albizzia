<template>
  <div >
    <n-space justify="space-between" style="margin-bottom: 0;padding-bottom: 0;">
      <NuxtLink to="/">
        <n-button text style="margin: 12px 20px;">
          <MenuTitle />
        </n-button>
      </NuxtLink>
      <n-button text @click="active = true" style="margin: 12px 20px;">
        <template #icon>
          <n-icon size="26" :component="ReorderFourOutline"></n-icon>
        </template>
      </n-button>
    </n-space>
    <n-drawer v-model:show="active"  placement="right">
      <n-drawer-content body-content-style="padding: 12px;">
        <n-menu :options="menus"/>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<script lang="ts" setup>
import {NDropdown, NIcon, NDivider, NSpace, NButton, NMenu, NDrawer, NDrawerContent} from 'naive-ui'
import type {MenuOption} from 'naive-ui'
const {mode} = defineProps({
  mode:{type: String, default: 'vertical'}
})

import {NuxtLink} from '#components'
import {
  ChatbubblesOutline,
  CodeSlashOutline,
  FlowerOutline,
  HomeOutline, ImageOutline, InformationCircleOutline, LogoGithub,
  RadioOutline, ReorderFourOutline,
  WifiOutline,
} from '@vicons/ionicons5'
import MenuTitle from '~/components/MenuTitle.vue'
const active = ref(false)
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, {default: () => h(icon)})
}
const renderLabelN = (label: string, path: string) => {
  return () => h(NuxtLink, {to: path}, {default: () => label})
}
const menus: MenuOption[] = [
  {
    key: '1',
    label: renderLabelN('有风小站', '/'),
    icon: renderIcon(HomeOutline),
  },
  ...menuOptions
]

// const links = ref([
//   // {key: '1', title: '首页',icon: 'mdi-antenna', path: '/'},
//   // {key: '2', title: '微信',icon: 'mdi-wechat',  path: '/shuoshuo'},
//   // {key: '4', title: 'facebook', icon: 'mdi-facebook', path: '/coding'},
//   // {key: '5', title: '邮箱', icon: 'mdi-at', path: ''},
// ])
</script>
