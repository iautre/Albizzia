<template>
  <n-space justify="space-between">
    <n-space>
      <!-- <div style="width:348px;"></div> -->
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    </n-space>
    <n-space>
      <div style="margin-right: 24px;">
        <n-input round placeholder="github" :on-input="inputText" @keyup.enter="goto">
          <template #suffix>
            <n-icon :component="SearchOutlined" />
          </template>
        </n-input>
      </div>
    </n-space>
  </n-space>
</template>
<script lang="ts" setup >
import { h, ref, Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import {
  BookOutlined,
  TagsOutlined,
  SearchOutlined
} from '@vicons/antd'
import { NuxtLink } from '~~/.nuxt/components'
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const renderLabelN = (label:string, path:string) =>{
  return () => h(NuxtLink,{to:{path:path}},{default: ()=> label})
}
const renderLabelA = (label:string, path:string) =>{
  return () => h('a',{href:path},label)
}
const renderLabel = renderLabelA
const activeKey = useMenuActiveKey(useRoute().path)
const menuOptions: MenuOption[] = [
  {
    label: renderLabel('AutreCoding', '/'),
    key: '/',
  },
  // {
  //   label: renderLabel('书单', '/book'),
  //   key: '/book',
  //   icon: renderIcon(BookOutlined),
  // },
  {
    label: renderLabel('话题', '/topic'),
    key: '/topic',
    icon: renderIcon(TagsOutlined),
  },
]
const gotovaleu = ref("")
const inputText = (e:string)=>{
  gotovaleu.value = e
}
const router = useRouter()
const goto = ()=>{
  console.log(gotovaleu.value)
  let url = 'https://github.com/search?q=' + gotovaleu.value
  window.open(url, "_blank")
}
</script>
<style>
</style>
