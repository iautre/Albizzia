const cheerio = require('cheerio')
const path = require('path')
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Autre Coding',
    titleTemplate: '%s - Autre Coding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'AutreC,autre,AutreCoding'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'baidu-site-verification', content: 'code-jeOSFvD6Qk'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?be01b60a874f8ab30e0155f0d04cb18d', defer: true}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    //'~/plugins/axios',
    '@/plugins/baiduGa',
    '@/plugins/utils'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit'
  ],
  axios: {
    baseURL: 'https://coding.autre.cn/api', // Used as fallback if no runtime config is provided
  },
  markdownit: {
    injected: true
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //publicPath: 'https://c.autre.cn',
    extend (config, ctx) {
      //config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './plugins/antd-icons.js') // 引入需要的
    },
    //analyze: true,
    //将css打包引用
    extractCSS: { allChunks: true },
  },
  hooks: {
    'render:route': (url, result) => {
      this.$ = cheerio.load(result.html,{decodeEntities: false});
      //由于window.__nuxt__总是位于body中的第一个script中，
      //所以我移除了body中第一个脚本标签
      this.$(`body script`).eq(0).remove();
      result.html = this.$.html()
    }
  }
}
