<template>
  <NuxtLayout>
    <n-thing>
      <template #header>
        {{ articleData.title }}
      </template>
      <template #description>
          <n-space>
            <n-button text style="margin-right: 10px;">
              <template #icon>
                <n-icon :component="CalendarOutlined" ></n-icon>
              </template>
              {{dateformat(articleData.created)}}
            </n-button>
            <n-button text style="margin-right: 10px;">
              <template #icon>
                <n-icon :component="BarsOutlined" ></n-icon>
              </template>
              <template v-for="category in articleData.categories" :key="category.cid">
                {{category.name}}
              </template>
            </n-button>
            <n-button text v-if="articleData.tag && articleData.tag.length > 0" >
              <template #icon>
                <n-icon :component="TagsOutlined" ></n-icon>
              </template>
              <template  v-for="tag in articleData.tag" :key="tag.cid">
                {{tag.name}}
              </template>
            </n-button>
          </n-space>
       </template>
      <div class="content text-body-1" v-html="md.render(articleData.text)"></div>
    </n-thing>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import {NThing, NTag, NIcon, NButton} from 'naive-ui'
import {BarsOutlined, CalendarOutlined, TagsOutlined} from "@vicons/antd";
const { pageType:pageType } = defineProps(['pageType'])
const router = useRoute()
const md: any = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,        // Convert '\n' in paragraphs into <br>
  highlight: function (str:any, lang:any) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code class="language-${lang} hljs">` +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>';
      } catch (__) {}
    }

    return '<pre><code class="language-none hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
  }
})

const aritcleStore = useStore.useArticleStore()
const dateformat = (e:string)=>{
  const es  = Number(e) * 1000
  const date = new Date(es)
  const y = date.getUTCFullYear()
  const m = '0' + (date.getUTCMonth() + 1)
  const d = '0' + date.getUTCDate()
  return `${y}-${m.substring(m.length-2)}-${d.substring(d.length-2)}`
}
await aritcleStore.getArticleData(router.params.cid as string, router.params.slug as string)
const { articleData } = storeToRefs(aritcleStore)
</script>
<style>
.content p {
  margin: 10px 0 ;
}
.content ol {
  margin: 10px 20px 0;
}
.content-main .title{
  font-size: 1.25rem !important;
}
</style>
