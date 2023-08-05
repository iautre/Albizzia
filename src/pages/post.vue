<template>
  <div>
  <NuxtLayout>
    <n-result v-if="!articleData" status="404" title="404 资源不存在" description="生活总归带点荒谬" style="margin-top: 20px;">
      <template #footer>
        <NuxtLink to="/">
        <n-button>找点乐子吧</n-button>
        </NuxtLink>
      </template>
    </n-result>
    <n-thing v-if="articleData">
      <template #header>
        {{ articleData.title }}
      </template>
      <template v-if="pageType === 'post'" #description>
        <ContentHeader :timeUnixStr="articleData.created" :categories="articleData.categories" :tags="articleData.tag" />
       </template>
      <MarkdwonText :text="articleData.text" />
    </n-thing>
  </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"
import {NThing, NResult, NIcon, NButton} from 'naive-ui'
const { pageType:pageType } = defineProps(['pageType'])
const router = useRoute()
const articleStore = useStore.useArticleStore()

await articleStore.getArticleData(router.params.cid as string, router.params.slug as string)
const { articleData } = storeToRefs(articleStore)
</script>
<style>

</style>
