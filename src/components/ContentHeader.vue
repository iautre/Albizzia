<template>
  <n-space>
    <n-button :bordered="false" size="small">
      <DateTimeFormat :timeUnixStr="timeUnixStr"/>
    </n-button>
    <n-button :bordered="false" size="small" v-if="gps">
      <!--      <template #icon>-->
      <!--        <n-icon :component="LocationOutline"></n-icon>-->
      <!--      </template>-->
      {{gps}}
    </n-button>
    <n-button round size="small" v-for="(category, index) in categories" :key="category.slug">
      <router-link :to="'/topic/'+category.slug">{{ category.name}}</router-link>
    </n-button>
    <n-button round dashed size="small"  v-for="(tag, index) in tags" :key="tag">
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
