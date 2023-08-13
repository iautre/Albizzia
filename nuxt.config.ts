// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
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
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],
  plugins: [

  ],
  eslint: {
    /* module options */
  },
  nitro: {
    devProxy: {
      "/api": {
        target: 'https://autre.cn/',
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
              ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
              : []
    }
  }
  // pinia: {
  //   autoImports: [
  //     'defineStore', // import { defineStore } from 'pinia'
  //   ],
  // },
})
