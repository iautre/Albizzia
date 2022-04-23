<template>
    <div>
        <Head title="书单" />
        <n-thing>
            <template #header>
                书单
            </template>
            <n-grid cols="5 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="12" :y-gap="24">
                <n-grid-item v-for="book in books" v-bind:key="book.id" style="width:180px;">
                    <n-card hoverable>
                        <template #cover>
                            <n-image
                                preview-disabled
                                object-fit="cover"
                                width="180"
                                height="220"
                                src="https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg"
                            />
                        </template>
                        我是一部好书
                    </n-card>
                </n-grid-item>
            </n-grid>
        </n-thing>   </div>
</template>
<script lang="ts" setup >
import { h, ref, Component, computed } from 'vue'
// const route = useRoute()
// route.meta.layout = "custom"
const books = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]
const { data: bbbb } = await useFetch(`/a/books`, {
    baseURL: useRuntimeConfig().BASE_API,
    headers: {
        'Client': useRuntimeConfig().APP_KEY
    },
    transform: (input) => {
        if (input['code'] === 0) {
            return input['data']
        }
        return {}
    }
})
</script>
<style>
</style>
