<template>
  <NuxtLayout>
    <n-list>
      <n-list-item v-for="item in articleList" :key="item.cid">
        <n-thing>
          <template #header>
            <NuxtLink :to="item.slug + '.html'">
              {{ item.title }}
            </NuxtLink>
          </template>
          <template #description>
            <n-space>
              <n-button text style="margin-right: 10px;">
                <template #icon>
                  <n-icon :component="CalendarOutlined"></n-icon>
                </template>
                {{ dateformat(item.created) }}
              </n-button>
              <n-button text style="margin-right: 10px;">
                <template #icon>
                  <n-icon :component="BarsOutlined"></n-icon>
                </template>
                <template v-for="category in item.categories" :key="category.cid">
                  {{ category.name }}
                </template>
              </n-button>
              <n-button text v-if="item.tag && item.tag.length > 0">
                <template #icon>
                  <n-icon :component="TagsOutlined"></n-icon>
                </template>
                <template v-for="tag in item.tag" :key="tag.name">
                  {{ tag.name }}
                </template>
              </n-button>
            </n-space>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import {NButton, NIcon, NList, NListItem, NThing, NSpace} from 'naive-ui'
import {storeToRefs} from "pinia"
import {BarsOutlined, CalendarOutlined, TagsOutlined} from "@vicons/antd";

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
await aritcleStore.getArticleList(Number(router.params.page as string))
const {articleList} = storeToRefs(aritcleStore)
</script>
