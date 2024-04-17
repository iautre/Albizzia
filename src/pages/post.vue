<template>
  <div>
    <NuxtLayout :title="!articleData ? '404' : articleData.title" :keywords="articleData?.tags">
      <div style="margin: 12px 20px;">
        <n-result v-if="!articleData" status="404" title="404 资源不存在" description="生活总归带点荒谬"
                  style="margin-top: 20px;">
          <template #footer>
            <NuxtLink to="/">
              <n-button>找点乐子吧</n-button>
            </NuxtLink>
          </template>
        </n-result>
        <n-thing v-if="articleData" style="margin-top: 12px; width: 100%;">
          <template #header>
            {{ articleData.title }}
          </template>
          <template v-if="articleData.type === 'post'" #description>
            <ContentHeader :timeUnixStr="articleData.created" :categories="articleData.categories"
                           :tags="articleData.tags" :gps="articleData.gps"/>
          </template>
          <div class="content-text">
            <n-image-group>
              <template v-for="(item, index) in articleData.thumbs" :key="index">
                <MarkdownText v-if="!item.url" :text="item.text"/>
                <template v-else>
                  <n-image lazy object-fit="contain" :src="item.url" :alt="item.alt"
                           :previewed-img-props="{ style: { 'object-fit': 'contain'} }"/>
                  <n-flex justify="center">
                    <n-gradient-text type="warning">{{ item.alt }}</n-gradient-text>
                  </n-flex>
                </template>
              </template>
            </n-image-group>
          </div>
        </n-thing>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {storeToRefs} from "pinia"
import {NThing, NResult, NIcon, NButton} from 'naive-ui'
// const { pageType:pageType } = defineProps(['pageType'])
const {slug} = defineProps({
  slug: {type: String, default: ''},
})
const articleStore = useStore.useArticleStore()

await articleStore.getArticleData(slug)
const {articleData} = storeToRefs(articleStore)
</script>
<style>

</style>
