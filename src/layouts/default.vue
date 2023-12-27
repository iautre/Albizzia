<template>
  <div>
  <Head>
    <Title>{{ title? title + ' - 有风小站' : '有风小站' }}</Title>
    <Meta name="description" :content="title"/>
  </Head>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <n-scrollbar style="height: 100vh;">
        <div ref="mainContainerRef">
          <n-layout style="max-width: 1200px;width:100%;margin: 0 auto;min-height:calc(100vh - 74px)">
            <n-layout-header :class="diary ? 'top-header diary-top-header' : 'top-header'">
              <MenuDrawer/>
              <n-divider style="margin: 0;"/>
            </n-layout-header>
            <n-layout :has-sider="true">
              <n-layout-header class="left-header" style="width: 200px; margin:24px 0 12px 12px;">
                <div style="width: 200px;"></div>
                <n-affix
                    :trigger-top="24"
                    position="fixed"
                    :listen-to="() => mainContainerRef"
                >
                  <Menu/>
                </n-affix>
              </n-layout-header>
              <n-layout-content class="main-content" >
                <slot/>
              </n-layout-content>
              <n-layout-sider class="right-sider"
                              style="width: 300px;max-width: 300px;margin:12px 12px 12px 0;"
                              >
                <Sider/>
              </n-layout-sider>
            </n-layout>
          </n-layout>
          <n-layout-footer>
            <Footer/>
          </n-layout-footer>
          <n-back-top :right="100"/>
        </div>
      </n-scrollbar>
  </n-config-provider>
  </div>
</template>
<script lang="ts" setup>
import {
  NConfigProvider, NSpin,NIcon, NScrollbar, NLayout, NLayoutHeader, NLayoutContent,
  NLayoutSider, NLayoutFooter, zhCN, dateZhCN, NAffix, NBackTop, NDivider,
} from 'naive-ui'
import {EarthOutline} from '@vicons/ionicons5'
import {storeToRefs} from 'pinia'
const {diary} = defineProps({
  title: {type: String, default: null},
  diary: {type: Boolean, default: false}
})
// const {large, medium, small, spin} = storeToRefs(useStore.useScreenStore())
const mainContainerRef = ref<HTMLElement | undefined>(undefined)
</script>
<style scoped>
.n-back-top{
  z-index: 999;
}
@media screen and (min-width: 1024px){
  .top-header {
    display: none;
  }
  .right-sider {
    padding-top: 12px
  }
  .main-content{
    padding-top: 12px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 720px){
  .left-header{
    display: none;
  }
}
@media screen and (max-width: 720px) {
  .left-header{
    display: none;
  }
  .right-sider{
    display: none;
  }
  .diary-top-header{
    display: none;
  }
}
</style>