<template>
  <Head>
    <Title>{{ title? title + ' - 有风小站' : '有风小站' }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <div ref="mainContainerRef">
      <n-layout style="max-width: 1200px;width:100%;margin: 0 auto;min-height:calc(100vh - 74px)">
        <n-layout-header v-if="medium || (small && !largePage)">
          <MenuDropdown/>
        </n-layout-header>
        <n-layout :has-sider="large || medium">
          <n-layout-header v-if="large" style="width: 200px; margin:12px 0 12px 12px;">
            <div style="width: 200px;"></div>
            <n-affix
                :trigger-top="24"
                position="fixed"
                :listen-to="() => mainContainerRef"
            >
              <Menu/>
            </n-affix>
          </n-layout-header>
          <n-layout-content :content-style="large ? 'padding-top: 12px;': ''">
            <slot/>
          </n-layout-content>
          <n-layout-sider v-if="large || medium"
                          style="width: 300px;max-width: 300px;margin:12px 12px 12px 0;"
                          :style="large ? 'padding-top: 12px':''">
            <Sider/>
          </n-layout-sider>
        </n-layout>
      </n-layout>
      <n-layout-footer>
        <Footer/>
      </n-layout-footer>
      <n-back-top :right="100"/>
    </div>
  </n-config-provider>
</template>
<script lang="ts" setup>
import {
  NConfigProvider, NLayout, NLayoutHeader, NLayoutContent,
  NLayoutSider, NLayoutFooter, zhCN, dateZhCN, NAffix, NBackTop,
} from 'naive-ui'
import {storeToRefs} from 'pinia'

const {largePage} = defineProps({
  title: {type:String, default: null},
  largePage: {type: Boolean, default: false}
})
const {large, medium, small} = storeToRefs(useStore.useScreenStore())
const mainContainerRef = ref<HTMLElement | undefined>(undefined)
</script>
