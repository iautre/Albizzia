<template>
<n-space>
  <div class="text" v-html="md(content)"></div>
  </n-space>
</template>
<script lang="ts">
import MarkdownIt from "markdown-it";
// import hljs from 'highlight.js'
import mdithljs from 'markdown-it-highlightjs'
import 'highlight.js/scss/vs2015.scss'
const md = (test: string) => {
  // let mdit = MarkdownIt({
  //   highlight: function (str, lang) {
  //     if (lang && hljs.getLanguage(lang)) {
  //       try {
  //         return '<pre class="hljs"><code>' +
  //           hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
  //           '</code></pre>';
  //       } catch (__) { }
  //     }

  //     return '<pre class="hljs"><code>' + mdit.utils.escapeHtml(str) + '</code></pre>';
  //   }
  // });
  let mdit = MarkdownIt().use(mdithljs, { inline: true })
  return mdit.render(test);
}
export default {
  props: {
    content: null,
  },
  setup() {
    return {
      md,
    };
  },
};
</script>
<style>
.hljs {
  padding: 15px;
}
pre{
  overflow: auto;
  white-space: pre-wrap;
}
</style>
