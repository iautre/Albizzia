<template>
  <div>
    <Head :title="item.title" />
    <n-empty v-if="item.title === '404'" description="404">
      <template #extra>
        <NuxtLink to="/"><n-button size="small">
          看看别的
        </n-button>
        </NuxtLink>
      </template>
    </n-empty>
    <n-thing v-if="item.title !== '404'">
      <template #header>
        {{ item.title }}
      </template>
      <Markdown :content="item.content" />
    </n-thing>   </div>
</template>
<script lang="ts" setup >
import { h, ref, Component, computed } from 'vue'
const route = useRoute()
const { data: item } = await useFetch(`/a/info?slug=${route.params.group}`, {
  baseURL: useRuntimeConfig().BASE_API,
  headers: {
    'Client': useRuntimeConfig().APP_KEY
  },
  transform: (input) => {
    if (input['code'] === 0 && input['data']) {
      return input['data']
    }
    return {title: '404'}
  }
})
</script>
<style>
</style>
