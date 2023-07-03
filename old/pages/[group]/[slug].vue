<template>
  <div>
    <Head :title="item.title" />
    <n-empty v-if="item.title === '404'" description="404">
      <template #extra>
        <NuxtLink to="/"><n-button size="small">
          看看别的
        </n-button>
        </NuxtLink>
      </template>
    </n-empty>
    <n-thing v-if="item.title !== '404'">
      <template #header>
        {{ item.title }}
      </template>
      <template #description>
        <n-space :size="24">
          <n-button text>
            <template #icon>
              <n-icon size="18">
                <CalendarOutlined />
              </n-icon>
            </template>
            <Datetime :issued="item.issued" />
          </n-button>
          <n-button text>
            <template #icon>
              <n-icon size="18">
                <EyeOutlined />
              </n-icon>
            </template>
            {{ item.views }}
          </n-button>
          <n-button text @click="like(item)">
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
          <n-popover v-if="item.wxmpurl" trigger="hover" placement="bottom">
            <template #trigger>
              <n-button text>
                <template #icon>
                  <n-icon size="18">
                    <QrcodeOutlined />
                  </n-icon>
                </template>
                推送到微信
              </n-button>
            </template>
            <template #header>
              微信扫一扫
            </template>
            <n-image preview-disabled :width="200" :src="wxmpQrcode" />
          </n-popover>
        </n-space>
      </template>
      <Markdown :content="item.content" />
    </n-thing>   </div>
</template>
<script lang="ts" setup >
import { h, ref, Component, computed } from 'vue'
import {
  CalendarOutlined,
  HeartOutlined,
  EyeOutlined,
  MessageOutlined,
  QrcodeOutlined
} from '@vicons/antd'
import { useNotification } from 'naive-ui'
import QRCode from 'qrcode'
const route = useRoute()
const { data: item } = await useFetch(`/a/info?slug=${route.params.slug}`, {
  baseURL: useRuntimeConfig().BASE_API,
  headers: {
    'Client': useRuntimeConfig().APP_KEY
  },
  transform: (input) => {
    if (input['code'] === 0 && input['data']) {
      return input['data']
    }
    return {title: '404'}
  }
})
const wxmpQrcode = item.value.wxmpurl ?  await QRCode.toDataURL(item.value.wxmpurl) : ''
const notification = useNotification()
const like = async (item) => {
  notification.create({
    title: '感谢支持!',
    duration: 3000,
  })
  item['likes'] = item['likes'] + 1
  const { data: likes } = await useFetch(`/a/like?slug=${route.params.slug}`, {
    baseURL: useRuntimeConfig().BASE_API,
    headers: {
      'Client': useRuntimeConfig().APP_KEY
    },
  })
}
</script>
<style>
</style>
