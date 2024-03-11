<template>
  <n-space>
    <n-button text style="margin-right: 10px;">
      <template #icon>
        <n-icon :component="TodayOutline"></n-icon>
      </template>
      <DateTimeFormat :timeUnixStr="timeUnixStr"/>
    </n-button>
    <n-button text style="margin-right: 10px;">
      <template #icon>
        <n-icon :component="ReorderFourOutline"></n-icon>
      </template>
      <template v-for="(category, index) in categories" :key="category.cid">
        {{ index !== 0 ? ' ' + category.name : category.name}}
      </template>
    </n-button>
    <n-button text v-if="tags && tags.length > 0">
      <template #icon>
        <n-icon :component="PricetagsOutline"></n-icon>
      </template>
      <template v-for="(tag, index) in tags" :key="tag">
        {{ index !== 0 ? ' ' + tag : tag }}
      </template>
    </n-button>
    <n-button text v-if="gps">
      <template #icon>
        <n-icon :component="LocationOutline"></n-icon>
      </template>
      {{gps}}
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
