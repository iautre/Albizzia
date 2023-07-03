<template>
    <div>

        <Head title="话题" />
        <n-thing>
            <template #header>
                标签
            </template>
            <n-space>
                <n-tag v-for="(topic,index) in metas" v-bind:key="topic.id" :type="tagType(index)">
                    {{ topic.name }}
                </n-tag>

            </n-space>
        </n-thing>   </div>
</template>
<script lang="ts" setup >
import { h, ref, Component, computed } from 'vue'
const colors = [ 'primary', 'info', 'success', 'warning', 'error']
const tagType = (index:number)=>colors[(Math.random()*10*index)%colors.length]
const { data: metas } = await useFetch(`/a/metas`, {
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
