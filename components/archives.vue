<template>
    <div class="main">
        <Head />
        <n-empty v-if="data.articles.length ===0" description="没有更多了">
            <template #icon>
                <n-icon>
                    <EyeOutlined />
                </n-icon>
            </template>
            <template #extra>
                <a v-if="page !== 1" :href="page === 2 ? '/' : '/page/'+ (page-1)"><n-button>上一页</n-button></a> 
            </template>
        </n-empty>
        <n-list v-if="data.articles.length > 0" style="margin-top: 0;">
            <template #header>
                <n-space>
                    <span>
                        最新
                    </span>
                    <!-- <span>
                        最热
                    </span>
                    <span>
                        随机
                    </span> -->
                </n-space>
            </template>
            <n-list-item v-for="item in data.articles" :key="item.id">
                <template v-if="item.image" #prefix>
                    <n-image preview-disabled object-fit="cover" width="180" height="220" :src="item.image" />
                </template>
                <n-thing>
                    <template #header>
                        <a :href="item.path">{{ item.title }}</a>
                    </template>
                    <template #header-extra>
                        <Datetime :issued="item.issued" />
                    </template>
                    <template #description>
                        {{ item.description }}
                    </template>
                    <template #footer>
                        <n-space :size="24">
                            <n-button text>
                                <template #icon>
                                    <n-icon size="18">
                                        <EyeOutlined />
                                    </n-icon>
                                </template>
                                {{ item.views }}
                            </n-button>
                            <n-button text>
                                <template #icon>
                                    <n-icon size="18">
                                        <HeartOutlined />
                                    </n-icon>
                                </template>
                                {{ item.likes }}
                            </n-button>
                            <n-button text>
                                <template #icon>
                                    <n-icon size="18">
                                        <MessageOutlined />
                                    </n-icon>
                                </template>
                                {{ item.comments }}
                            </n-button>
                        </n-space>
                    </template>
                </n-thing>
            </n-list-item>
            <template #footer>
                <n-space justify="center">
                    <a v-if="page !== 1" :href="page === 2 ? '/' : '/page/'+ (page-1)"><n-button>上一页</n-button></a> 
                    <a v-if="data.articles.length === 10" :href="'/page/'+ (page+1)"><n-button>下一页</n-button></a> 
                </n-space>
            </template>
            </n-list>
</div>
</template>
<script lang="ts" setup >
import { h, ref, Component, computed } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
    HeartOutlined,
    EyeOutlined,
    MessageOutlined
} from '@vicons/antd'
const route = useRoute()
const page = Number(route.params.page) || 1
const { data: data } = await useFetch('/a/list?page=' + page, {
    baseURL: useRuntimeConfig().BASE_API,
    headers: {
        'Client': useRuntimeConfig().APP_KEY
    },
    transform: (input) => {
        return input['data']
    }
})
const getMoreTitle = computed(() => data.value['articles'] < 10 ? '没有了' : '下一页')
</script>
<style>
.main .n-list__header {
    padding-top: 0;
}

.main .carousel-img {
    width: 100%;
    height: 100px;
    object-fit: cover;
}
</style>
