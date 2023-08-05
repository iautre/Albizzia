<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <div ref="mainContainerRef">
        <n-layout has-sider style="width: 1200px;margin: 12px auto 12px;min-height:calc(100vh - 74px)">
          <n-layout-header style="width: 224px; padding:12px;">
            <div style="width: 200px;"></div>
            <n-affix
                :trigger-top="24"
                position="fixed"
                :listen-to="() => mainContainerRef"
            >
              <Menu/>
            </n-affix>
          </n-layout-header>
          <n-layout-content style="padding:12px;">
            <slot/>
          </n-layout-content>
          <n-layout-sider content-style="padding: 12px;max-width:324px;" style="width: 324px;max-width: 324px;">
            <Sider/>
          </n-layout-sider>
        </n-layout>
        <n-layout-footer>
          <Footer />
        </n-layout-footer>
        <n-back-top :right="100" />
    </div>
  </n-config-provider>
</template>
<script lang="ts" setup>
import {
  NConfigProvider, NLayout, NLayoutHeader, NLayoutContent,
  NLayoutSider,NLayoutFooter, zhCN, dateZhCN, NAffix, NBackTop,
} from 'naive-ui'

const mainContainerRef = ref<HTMLElement | undefined>(undefined)
</script>
