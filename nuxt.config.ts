// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  // ssr: false,
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxt/content',
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Autre Coding',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Autre Coding.' }
      ],
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
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/css/main.css',
  ],
  plugins: [
    
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
      ssr: true,
      icons: {
        defaultSet: 'mdi'
      }
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,
      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
    }
  },

  nitro: {
    devProxy: {
      "/api": {
        target: 'https://autre.cn/',
        prependPath: true,
        changeOrigin: true,
      }

    }
  }

  // pinia: {
  //   autoImports: [
  //     'defineStore', // import { defineStore } from 'pinia'
  //   ],
  // },
})
