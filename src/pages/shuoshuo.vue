<template>
  <div>
  <NuxtLayout>
        <n-card >
          <template #cover>
          <img
              height="200"
              src="https://p1.imoxin.net/63f7833c73490246fd6dca9a/1"
          />
          </template>
          <n-list>
            <n-list-item v-for="item in articleList" :key="item.cid">
              <n-thing :title="item.title">
                <template #header-extra>
                  <DateTimeFormat :timeUnixStr="item.created"/>
                </template>
                <MarkdwonText :text="item.text" />
              </n-thing>
            </n-list-item>
            </n-list>
        </n-card>
  </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {NCard, NList, NListItem, NThing, NTime} from 'naive-ui'
import { storeToRefs } from "pinia"
const aritcleStore = useStore.useArticleStore()
const dateformat = (e:string)=>{
  const es  = Number(e) * 1000
  const date = new Date(es)
  const y = date.getUTCFullYear()
  const m = '0' + (date.getUTCMonth() + 1)
  const d = '0' + date.getUTCDate()
  return `${y}-${m.substring(m.length-2)}-${d.substring(d.length-2)}`
}
await aritcleStore.getArticleList()
const { articleList } = storeToRefs(aritcleStore)
</script>
