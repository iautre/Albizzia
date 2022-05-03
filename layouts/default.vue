<template>
  <div id="autrecoding">
    <n-notification-provider>
      <n-config-provider :date-locale="dateLocale">
        <n-layout style="height: 100vh">
          <n-layout-header style="
          height: 56px;
          line-height: 56px;
          border-bottom: 1px solid var(--n-border-color);
        ">
            <Header />
          </n-layout-header>
          <n-layout :has-sider="hasSider" position="absolute" style="top: 56px">
            <n-layout-sider v-if="hasSider" :width="348" show-trigger="bar" :collapsed-width="0" :native-scrollbar="false" style="border-right: 1px solid var(--n-border-color);"
              :show-collapsed-content="false" content-style="padding: 24px 24px 24px 24px;">
              <Sider />
            </n-layout-sider>
            <n-layout :native-scrollbar="false">
              <n-layout-content content-style="padding: 24px;min-height: calc(100vh - 120px);">
                <slot />
              </n-layout-content>
              <n-layout-footer>
                <Footer />
              </n-layout-footer>
              <n-back-top :right="100">
                <n-icon size="18">
                  <UpOutlined />
                </n-icon>
              </n-back-top>
            </n-layout>
          </n-layout>
        </n-layout>
      </n-config-provider>
      </n-notification-provider>
</div>
</template>
<script lang="ts" setup>
import {  dateZhCN } from "naive-ui";
import {
  UpOutlined
} from '@vicons/antd'
const dateLocale = dateZhCN;
const hasSider = ref(false)
</script>
<style>
a {
  color: #333;
  outline: none;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
</style>
