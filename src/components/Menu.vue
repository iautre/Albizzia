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
<!--  <n-divider style="margin: 0 32px 0"></n-divider>-->
  <n-menu :options="menuOptions" :mode="mode" :style="mode === 'vertical' ? 'width: 200px;' : ''"/>
</template>
<script lang="ts" setup>
import {NMenu, NDivider, NAvatar, NSpace} from 'naive-ui'
import type {MenuOption} from 'naive-ui'
const {mode} = defineProps({
  mode:{type: String, default: 'vertical'}
})

import {NuxtLink} from '#components'

// import {menuOptions} from '~/composables/menus'

</script>
