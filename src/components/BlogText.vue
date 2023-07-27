<template>
    <NuxtLayout>
      <div class="content-main">
        <v-row dense>
            <v-col cols="12">
                <v-card class="ma-1" v-if="articleData">
                    <v-card-title class="text-h1 title">
                        {{ articleData.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        <v-chip prepend-icon="mdi-calendar-range" variant="text">
                            {{dateformat(articleData.issued)}}
                        </v-chip>
                        <v-chip prepend-icon="mdi-eye-outline" variant="text">
                            {{articleData.views}}
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
const dateformat = (e:Date)=>{
    const date = new Date(e)
    const y = date.getUTCFullYear()
    const m = '0' + (date.getUTCMonth() + 1)
    const d = '0' + date.getUTCDate()
    return `${y}-${m.substring(m.length-2)}-${d.substring(d.length-2)}`
}
await aritcleStore.getArticleData(router.params.slug as string)
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