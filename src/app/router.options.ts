import type { RouterConfig } from "@nuxt/schema";
export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: "index",
            path: "/",
            component: () => import("~/pages/page.vue"),
        },
        {
            name: "indexPage",
            path: "/page/:page",
            component: () => import("~/pages/page.vue"),
            props: true,
        },
        // {
        //     name: "post",
        //     path: "/:cid.html",
        //     props: {pageType: 'post'},
        //     component: () => import("~/pages/post.vue"),
        // },
        {
            name: "category",
            path: "/topic/:category",
            component: () => import("~/pages/page.vue"),
            props: true,
        },
        {
            name: "categoryPage",
            path: "/topic/:category/:page",
            component: () => import("~/pages/page.vue"),
            props: true,
        },
        {
            name: "diary",
            path: "/diary",
            component: () => import("~/pages/diary.vue"),
            meta: {title: '说说'}
        },
        {
            name: "page",
            path: "/:slug",
            // props: {pageType: 'page'},
            component: () => import("~/pages/post.vue"),
            props: true,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    },
};
