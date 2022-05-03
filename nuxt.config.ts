import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Autre Coding',
            titleTemplate: '%s - Autre Coding',
            meta: [
                { name: 'keywords', content: 'AutreC,autre,AutreCoding' },
                { hid: 'description', name: 'description', content: process.env.npm_package_description || 'autre coding' },
                { name: 'baidu-site-verification', content: 'code-jeOSFvD6Qk' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            script: [
                { src: 'https://hm.baidu.com/hm.js?be01b60a874f8ab30e0155f0d04cb18d', defer: true },
                { src: 'https://autre.cn/poem/api?encode=js&domid=poemcard', defer: true}
            ]
        }
    },
    publicRuntimeConfig: {
        BASE_API: process.env.BASE_API || 'https://coding.autre.cn/api',
        APP_KEY: process.env.APP_KEY || '2d1f5385e831422eb16981a84befc910',
    },
    build: {
        transpile: ['vueuc'],   // fix dev error: Cannot find module 'vueuc'
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
            }),
        ],
        // @ts-expect-error: Missing ssr key
        ssr: {
            noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
        },
    }

})
