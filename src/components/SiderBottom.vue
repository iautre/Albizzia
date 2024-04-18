<template>
  <div style="width: 300px;">
    <n-space vertical>
      <NuxtLink to="/topic/pai">
        <n-image
            :preview-disabled="true"
            width="300"
            src="https://p1.imoxin.net/e7095f48d3f02396d8a900ba0c729af4/1!post"
        />
      </NuxtLink>
      <n-image
          preview-disabled
          width="300"
          src="/mp-weixin-autre.jpg"
      />
    </n-space>
  </div>
</template>
<script lang="ts" setup>
import {NSpace, NImage} from 'naive-ui'

</script>