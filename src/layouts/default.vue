<template>
  <n-layout has-sider style="width: 1200px;margin: 20px auto 20px;">
    <n-layout-header style="width: 200px">
      <Menu/>
    </n-layout-header>
    <n-layout-content>
      <slot/>
    </n-layout-content>
    <n-layout-sider content-style="padding: 24px;" style="width: 300px;">
      <Sider/>
    </n-layout-sider>
  </n-layout>
</template>
<script setup lang="ts">
import {NLayout, NLayoutHeader, NLayoutContent, NLayoutSider} from "naive-ui";
</script>