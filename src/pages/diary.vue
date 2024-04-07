<template>
  <div>
    <NuxtLayout diary title="说说" keywords="说说">
      <div class="top-top">
        <n-card content-style="padding: 0" style="--n-border-color:none;">
          <template #cover>
            <div class="diary-top-header" style="position: absolute;width: 100%;">
              <MenuDrawer />
              <n-divider style="margin: 0;--n-color: #b3b0b0ba"/>
            </div>
            <img
                style="object-fit: cover;"
                height="240"
                width="100%"
                class="carousel-img diary-top-img"
                src="https://p1.imoxin.net/633fd686b8de3c83d51724fa/1!post"
            />
          </template>
          <div class="diary-content">
          <n-list>
            <n-list-item v-for="item in articleList" :key="item.cid">
              <n-thing :title="item.title">
                <template #header-extra>
                  <DateTimeFormat :timeUnixStr="item.created"/>
                </template>
                <MarkdownText :text="item.text"/>
              </n-thing>
            </n-list-item>
          </n-list>
          </div>
        </n-card>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {NCard, NDivider, NList, NListItem, NThing} from 'naive-ui'
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
<style scoped>
@media screen and (max-width: 720px) {
  .top-top .diary-top-img {
    border-radius: 0!important;
  }
  .top-top .diary-content{
    margin-right: 20px;
    margin-left: 20px;
  }
}

@media screen and (min-width: 720px){
  .diary-top-header{
    display: none;
  }
  .top-top{
    margin: 12px 20px;
  }
}
</style>
