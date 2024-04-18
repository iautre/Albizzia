<template>
  <div>
    <NuxtLayout :title="articleList.length === 0 ?'404': title">
      <div style="margin: 0 20px;">
      <n-list>
        <n-empty v-if="articleList.length === 0" description="你什么也找不到" style="margin-top: 100px;;">
          <template #extra>
            <a href="/">
              <n-button size="small">
                看看别的
              </n-button>
            </a>
          </template>
        </n-empty>
        <n-list-item v-if="articleList.length > 0" v-for="(item, index) in articleList" :key="item.cid">
          <n-thing content-style="margin-top:0;">
            <template #header>
              <a :href="'/'+item.slug">
                {{ item.title }}
              </a>
            </template>
            <template #description>
              <ContentHeader :timeUnixStr="item.created" :categories="item.categories" :tags="item.tags" :gps="item.gps"/>
            </template>
            <n-ellipsis :line-clamp="2" :tooltip="false" style="width: 100%;">
              <MarkdownText :text="item.text"/>
            </n-ellipsis>
          </n-thing>
        </n-list-item>
        <template #footer>
          <n-space justify="center">
            <a v-if="page>1" :href="(category ? '/topic/' + category + '/' : '/page/')+ (Number(page) - 1)">
              <n-button round>
                上一页
              </n-button>
            </a>
            <a v-if="page < pages" :href="(category ? '/topic/' + category + '/' : '/page/')+ (Number(page) + 1)">
              <n-button round>
                下一页
              </n-button>
            </a>
          </n-space>
        </template>
      </n-list>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {storeToRefs} from 'pinia'
const {page, category} = defineProps({
  page: {type: Number, default: 1},
  category: {type: String, default: undefined},
})
const router = useRoute()
const articleStore = useStore.useArticleStore()
const dateformat = (e: string) => {
  const es = Number(e) * 1000
  const date = new Date(es)
  const y = date.getUTCFullYear()
  const m = '0' + (date.getUTCMonth() + 1)
  const d = '0' + date.getUTCDate()
  return `${y}-${m.substring(m.length - 2)}-${d.substring(d.length - 2)}`
}
const title = computed(()=>{
  return Array.of(category, page !== 1 ? '第'+ page + '页': undefined).filter(e=>e).join(' - ')
})
await articleStore.getArticleList(page, category)
const {articleList, pages} = storeToRefs(articleStore)
</script>
