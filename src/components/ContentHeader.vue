<template>
  <n-space>
      <n-button text size="small" style="line-height: 24px;color:#5c5a5a;">
        <DateTimeFormat :timeUnixStr="timeUnixStr"/>
      </n-button>
      <n-button text size="small" v-if="gps"  style="line-height: 24px;color:#5c5a5a;">
        <!--      <template #icon>-->
        <!--        <n-icon :component="LocationOutline"></n-icon>-->
        <!--      </template>-->
        {{gps}}
      </n-button>
    <n-button round size="small" v-for="(category, index) in categories" :key="category.slug" style="height: 24px;padding: 0 10px;color:#5c5a5a;">
      <router-link :to="'/topic/'+category.slug">{{ category.name}}</router-link>
    </n-button>
    <n-button round dashed size="small"  v-for="(tag, index) in tags" :key="tag" style="height: 24px;padding: 0 10px;color:#5c5a5a;">
        {{ index !== 0 ? ' ' + tag : tag }}
    </n-button>
  </n-space>
</template>

<script setup lang="ts">

import {
  LocationOutline,
  PricetagsOutline, ReorderFourOutline, TodayOutline,
} from '@vicons/ionicons5'

const {timeUnixStr, categories, tags} = defineProps(
    {
      timeUnixStr: {type: String, default: '2024-01-01'},
      categories: {type: Array , default: ()=>[]},
      tags: {type: Array , default: ()=>[]},
      gps: {type: String, default: null}
    }
)

</script>
