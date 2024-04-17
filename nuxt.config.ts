// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: true,
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    // '@nuxtjs/eslint-module',
  ],
  app: {
    buildAssetsDir: "/static/",
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: '有风小站',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: '有风小站.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'},
        { name: 'google-adsense-account', content: 'ca-pub-7180931165350205'}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {src: 'https://hm.baidu.com/hm.js?cde2381539508af2f6b075e992c61cae'},
        {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7180931165350205', crossorigin: 'anonymous'}
      ]
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/github.css',
  ],
  plugins: [
  ],
  eslint: {
    /* module options */
  },
  nitro: {
    devProxy: {
      "/api": {
        target: 'https://gateway.autre.cn',
        prependPath: true,
        changeOrigin: true,
      }
    }
  },
  build: {
    transpile:
        process.env.NODE_ENV === 'production'
            ? [
              'naive-ui',
              'vueuc',
              '@css-render/vue3-ssr',
              '@juggle/resize-observer'
            ]
            : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
          process.env.NODE_ENV === 'development'
              ? ['naive-ui', 'vueuc']
              : []
    },
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
  // pinia: {
  //   autoImports: [
  //     'defineStore', // import { defineStore } from 'pinia'
  //   ],
  // },
})
