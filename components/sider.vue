<template>
  <n-space vertical :size="24">
    <n-card hoverable :bordered="false">
      <n-thing>
        <template #avatar>
          <n-avatar round :size="52" src="https://tva3.sinaimg.cn/crop.0.0.1080.1080.180/65a969ddjw8exzscanu65j20u00u0wg6.jpg?KID=imgbed,tva&Expires=1650647393&ssig=smtLxT24iV" />
        </template>
        <template #header>
          a little
        </template>
        <template #description>
          捣鼓捣鼓一下
        </template>
        <template #action>
          <n-space>
            <a href="https://weibo.com/1705601501" target="_blank" rel="nofollow">
              <n-button circle size="small">
                <template #icon>
                  <n-icon>
                    <WeiboOutlined />
                  </n-icon>
                </template>
              </n-button>
            </a>
            <a href="https://github.com/autrec" target="_blank">
              <n-button circle size="small">
                <template #icon>
                  <n-icon>
                    <GithubOutlined />
                  </n-icon>
                </template>
              </n-button>
            </a>
            <n-popover trigger="hover" placement="bottom">
              <template #trigger>
                <n-button circle size="small">
                  <template #icon>
                    <n-icon>
                      <WechatOutlined />
                    </n-icon>
                  </template>
                </n-button>
              </template>
              <template #header>
                「微信」扫一扫 AutreCoding
              </template>
              <n-image preview-disabled :width="200" src="/qrcode_for_gh_0f5d4a067e90_258.jpg" />
            </n-popover>
          </n-space>
        </template>
      </n-thing>
    </n-card>
    <n-card :bordered="false">
      <template #cover>
        <a target="_blank" href="https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=o5ofeqxc">
          <img width="238" rel="nofollow" alt="阿里云" src="https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg" /></a>
      </template>
    </n-card>
    <n-card hoverable :bordered="true">
      <span id="poemcard"></span>
    </n-card>
    <!-- <n-card hoverable :bordered="true">
      「微信」扫一扫 AutreCoding
    </n-card>
    <n-card hoverable :bordered="true">
      「微信」扫一扫 AutreCoding
    </n-card> -->
  </n-space>
</template>
<script lang="ts" setup >
import {
  WeiboOutlined,
  GithubOutlined,
  WechatOutlined
} from '@vicons/antd'
</script>
<style>
</style>
