<template>
  <n-space vertical >
      <n-carousel
          direction="vertical"
          dot-placement="right"
          mousewheel
          style="width: 100%;height: 200px;margin-bottom: 6px;"
      >
        <NuxtLink to="/my-biaoben"><img
            class="carousel-img"
            src="https://p1.imoxin.net/633fe4932c81eb8bdd568a42/1!post"
            alt="百花"
        ></NuxtLink>
        <NuxtLink to="/my-biaoben">
        <img
            class="carousel-img"
            src="https://p1.imoxin.net/633fe4942c81eb8bdd568a44/1!post"
            alt="标本"
        >
        </NuxtLink>
        <NuxtLink to="/my-biaoben">
        <img
            class="carousel-img"
            src="https://p1.imoxin.net/633fe4952c81eb8bdd568a46/1!post"
            alt="标本"
        >
        </NuxtLink>
      </n-carousel>
    <n-carousel
            direction="vertical"
            dot-placement="right"
            mousewheel
            style="width: 100%;height: 200px;margin-bottom: 6px;"
        >
          <NuxtLink to="/100flower"><img
              class="carousel-img"
              src="https://p1.imoxin.net/633fd616b8de3c83d517238a/1!post"
              alt="百花"
          ></NuxtLink>
          <NuxtLink to="/100flower">
            <img
                class="carousel-img"
                src="https://p1.imoxin.net/633fd618b8de3c83d5172396/1!post"
                alt="百花"
            >
          </NuxtLink>
        </n-carousel>
    <NuxtLink to="/topic/pai">
      <n-image
          :preview-disabled="true"
          width="300"
          src="https://p1.imoxin.net/634c2a6fcbc9e0b3e5d34a8b/1!post"
      />
    </NuxtLink>
<!--    <NuxtLink to="/my-biaoben">-->
<!--      <n-image-->
<!--          width="300"-->
<!--          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"-->
<!--      />-->
<!--    </NuxtLink>-->
<!--    <n-timeline size="large" style="margin-top: 24px;">-->
<!--      <n-timeline-item content="啊"/>-->
<!--      <n-timeline-item-->
<!--          type="success"-->
<!--          title="成功"-->
<!--          content="哪里成功"-->
<!--          time="2018-04-03 20:46"-->
<!--      />-->
<!--      <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46"/>-->
<!--      <n-timeline-item-->
<!--          type="warning"-->
<!--          title="警告"-->
<!--          content="哪里警告"-->
<!--          time="2018-04-03 20:46"-->
<!--      />-->
<!--      <n-timeline-item-->
<!--          type="info"-->
<!--          title="信息"-->
<!--          content="是的"-->
<!--          time="2018-04-03 20:46"-->
<!--      />-->
<!--    </n-timeline>-->
<!--    <n-image-->
<!--        width="300"-->
<!--        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"-->
<!--    />-->
  </n-space>
</template>
<script lang="ts" setup>
import {NSpace, NImage, NCarousel, NAnchor, NAnchorLink,NAffix, NTimeline, NTimelineItem} from 'naive-ui'
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
