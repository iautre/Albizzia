<template>
  <div class="content text-body-1" v-html="md.render(text)"></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import {NCode, NImage} from 'naive-ui'
import StateCore from 'markdown-it/lib/rules_core/state_core'


const {text} = defineProps({text:{type:String, default: ''}})

const md: any = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,        // Convert '\n' in paragraphs into <br>
  highlight: function (str:any, lang:any) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<n-code><pre><code class="language-${lang} hljs">` +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre></n-code>';
      } catch (__) {}
    }

    return '<n-code><pre><code class="language-none hljs">' + md.utils.escapeHtml(str) + '</code></pre></n-code>';
  }
})
md.core.ruler.push('my-ruler', (state:StateCore)=> {
  state.tokens.forEach(token => {
    if (token.children && token.children.length>0){
      token.children.forEach((children) => {
        if (children.type === 'image'){
          // debugger

          // children.info="ddddd"
          // children.info = () => h('n-image', {src: children.attrGet('src')}, {default: () => ''})
        }
      })
    }
  })
})
// md.renderer.rules.image = (tokens: any, idx: any, options: any, env: any, self: any) => {
//   // return md.render('<n-image src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"/>')
//     return h("div", '22222');
// }

</script>
