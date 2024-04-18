<template>
  <n-space justify="center" style="padding: 12px;">
    <div> © <n-time :time="new Date()" format="yyyy"/></div>
    <a href="https://autre.me">有风小站</a>
    <a href="https://autre.me">Autre.me</a>
    <a href="https://autre.cn" target="_blank">向左向右</a>
    <a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备13008071号</a>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61012402000254" target="_blank" rel="nofollow">
      <img src="https://img.static.autre.cn/postcard/img/beian.png" style="width: 20px; vertical-align: middle; display: inherit;">
      陕公网安备61012402000254号
    </a>
    <a href="/links" >友链</a>
  </n-space>
</template>
<script lang="ts" setup>
import {NSpace, NTime} from 'naive-ui'
</script>
