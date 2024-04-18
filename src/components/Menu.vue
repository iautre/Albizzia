<template>
  <div>
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
  <a href="/">
    <n-space style="padding-left: 38px;padding-bottom: 12px;">
      <MenuTitle />
    </n-space>
  </a>
<!--  <n-divider style="margin: 0 32px 0"></n-divider>-->
  <n-menu :options="menuOptions" :mode="mode" :style="mode === 'vertical' ? 'width: 200px;' : ''"/>
  </div>
</template>
<script lang="ts" setup>
import {NMenu, NDivider, NAvatar, NSpace} from 'naive-ui'
const {mode} = defineProps({
  mode:{type: String, default: 'vertical'}
})
import MenuTitle from '~/components/MenuTitle.vue'

// import {menuOptions} from '~/composables/menus'

</script>
