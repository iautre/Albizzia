<template>
  <div style="position: relative;">
    <div ref="containerSiderRef" style="overflow: auto;height: 900px" >
      <n-space vertical >
        <n-carousel
            direction="vertical"
            dot-placement="right"
            mousewheel
            style="width: 100%;height: 240px;margin-bottom: 6px;"
        >
          <NuxtLink to="/my-biaoben"><img
              class="carousel-img"
              src="https://p1.imoxin.net/e47a5b20399177ad04fb99773ff2c768/1!post"
              alt="百花"
          ></NuxtLink>
          <NuxtLink to="/my-biaoben">
            <img
                class="carousel-img"
                src="https://p1.imoxin.net/4f37a7522be9c458050772cfb6ce0475/1!post"
                alt="标本"
            >
          </NuxtLink>
          <NuxtLink to="/my-biaoben">
            <img
                class="carousel-img"
                src="https://p1.imoxin.net/c2c1ed270c4f4819fc68b227fc5e9274/1!post"
                alt="标本"
            >
          </NuxtLink>
        </n-carousel>
        <n-carousel
            direction="vertical"
            dot-placement="right"
            mousewheel
            style="width: 100%;height: 240px;margin-bottom: 6px;"
        >
          <NuxtLink to="/100flower"><img
              class="carousel-img"
              src="https://p1.imoxin.net/affd5d27258b4afb4e10dd05adb957d7/1!post"
              alt="百花"
          ></NuxtLink>
          <NuxtLink to="/100flower">
            <img
                class="carousel-img"
                src="https://p1.imoxin.net/c3075e9110677bd908da808a172e568e/1!post"
                alt="百花"
            >
          </NuxtLink>
        </n-carousel>
        <NuxtLink to="/topic/pai">
          <n-image
              :preview-disabled="true"
              width="300"
              src="https://p1.imoxin.net/e7095f48d3f02396d8a900ba0c729af4/1!post"
          />
        </NuxtLink>
          <n-image
              preview-disabled
              width="300"
              src="/mp-weixin-autre.png"
          />
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
    </div>
  </div>
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
