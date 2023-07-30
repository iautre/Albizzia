<template>
  <NuxtLayout>
    <div class="content-main">
      <v-row dense>
        <v-col cols="12">
          <v-card class="ma-1" v-if="articleData" style="min-height: 80vh;">
            <v-card-title class="text-h1 title">
              {{ articleData.title }}
            </v-card-title>
            <v-card-subtitle v-if="pageType === 'post'">
              <v-chip prepend-icon="mdi-calendar-range" variant="text">
                {{dateformat(articleData.created)}}
              </v-chip>
              <v-chip prepend-icon="mdi-format-list-bulleted" variant="text">
                <v-chip variant="text" class="pa-1" v-for="category in articleData.categories" :key="category.cid">
                  {{category.name}}
                </v-chip>
              </v-chip>
              <v-chip v-if="articleData.tag && articleData.tag.length > 0" prepend-icon="mdi-tag-multiple-outline" variant="text">
                <v-chip variant="text" class="pa-1" v-for="tag in articleData.tag" :key="tag.name">
                  {{tag.name}}
                </v-chip>
              </v-chip>
            </v-card-subtitle>
            <v-card-text>
              <div class="content text-body-1" v-html="md.render(articleData.text)"></div>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
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
