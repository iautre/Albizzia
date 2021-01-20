export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Autre Coding',
    titleTemplate: '%s - Autre Coding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'baidu-site-verification', content: 'code-jeOSFvD6Qk'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?409a7a374fbcec1acc64716522171ae2'}
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
    '~/plugins/baiduGa',
    '~/plugins/utils'
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
    baseURL: 'https://cloud.autre.cn/blog', // Used as fallback if no runtime config is provided
  },
  markdownit: {
    injected: true
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //publicPath: 'https://c.autre.cn',
    extend (config, ctx) {
    },
    //将css打包引用
    extractCSS: { allChunks: true }
  }
}
