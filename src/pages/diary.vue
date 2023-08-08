<template>
  <div>
    <NuxtLayout largePage>
      <div :style="large || medium ? 'margin: 12px;': ''">
        <n-card content-style="padding: 0 12px;">
          <template #cover>
            <img
                height="200"
                class="carousel-img"
                src="https://p1.imoxin.net/634c2a4acbc9e0b3e5d34a87/1!post"
            />
          </template>
          <n-list>
            <n-list-item v-for="item in articleList" :key="item.cid">
              <n-thing :title="item.title">
                <template #header-extra>
                  <DateTimeFormat :timeUnixStr="item.created"/>
                </template>
                <MarkdwonText :text="item.text"/>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-card>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {NCard, NList, NListItem, NThing, NTime} from 'naive-ui'
import {storeToRefs} from 'pinia'

const aritcleStore = useStore.useArticleStore()
const {large, medium, small} = storeToRefs(useStore.useScreenStore())
const dateformat = (e: string) => {
  const es = Number(e) * 1000
  const date = new Date(es)
  const y = date.getUTCFullYear()
  const m = '0' + (date.getUTCMonth() + 1)
  const d = '0' + date.getUTCDate()
  return `${y}-${m.substring(m.length - 2)}-${d.substring(d.length - 2)}`
}
await aritcleStore.getArticleList(1, 'diary')
const {articleList} = storeToRefs(aritcleStore)
</script>
