<template>
  <n-carousel
      direction="vertical"
      dot-placement="right"
      mousewheel
      style="width: 100%;height: 200px;"
  >
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
  <n-timeline size="large" style="margin-top: 24px;">
    <n-timeline-item content="啊" />
    <n-timeline-item
        type="success"
        title="成功"
        content="哪里成功"
        time="2018-04-03 20:46"
    />
    <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46" />
    <n-timeline-item
        type="warning"
        title="警告"
        content="哪里警告"
        time="2018-04-03 20:46"
    />
    <n-timeline-item
        type="info"
        title="信息"
        content="是的"
        time="2018-04-03 20:46"
    />
  </n-timeline>
  <n-image
      width="300"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
  />
</template>
<script lang="ts" setup>
import {NImage, NCarousel, NTimeline, NTimelineItem} from 'naive-ui'
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
