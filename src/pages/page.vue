<template>
  <div>
    <NuxtLayout>
      <n-list>
        <n-empty v-if="articleList.length === 0" description="你什么也找不到" style="margin-top: 100px;;">
          <template #extra>
            <NuxtLink to="/">
              <n-button size="small">
                看看别的
              </n-button>
            </NuxtLink>
          </template>
        </n-empty>
        <n-list-item v-if="articleList.length > 0" v-for="(item, index) in articleList" :key="item.cid" :style="index===0 ? 'padding-top:0;': ''">
          <n-thing>
            <template #header>
              <NuxtLink :to="'/'+item.slug + '.html'">
                {{ item.title }}
              </NuxtLink>
            </template>
            <template #description>
              <ContentHeader :timeUnixStr="item.created" :categories="item.categories" :tags="item.tag"/>
            </template>
            <n-ellipsis :line-clamp="2" :tooltip="false">
              <MarkdwonText :text="item.text"/>
            </n-ellipsis>
          </n-thing>
        </n-list-item>
        <template #footer>
          <n-space justify="center">
            <NuxtLink v-if="page>1" :to="'/page/'+ (page -1)">
              <n-button round>
                上一页
              </n-button>
            </NuxtLink>
            <NuxtLink v-if="articleList.length === 5" :to="'/page/'+ (page + 1)">
              <n-button round>
                下一页
              </n-button>
            </NuxtLink>
          </n-space>
        </template>
      </n-list>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {NButton, NEmpty, NList, NListItem, NThing, NSpace, NCard, NEllipsis} from 'naive-ui'
import {storeToRefs} from 'pinia'

const router = useRoute()
const aritcleStore = useStore.useArticleStore()
const dateformat = (e: string) => {
  const es = Number(e) * 1000
  const date = new Date(es)
  const y = date.getUTCFullYear()
  const m = '0' + (date.getUTCMonth() + 1)
  const d = '0' + date.getUTCDate()
  return `${y}-${m.substring(m.length - 2)}-${d.substring(d.length - 2)}`
}
const page = computed<Number>(() => Number(router.params.page) || 1)
await aritcleStore.getArticleList(Number(router.params.page) || 1, router.params.category as string)
const {articleList} = storeToRefs(aritcleStore)
</script>
