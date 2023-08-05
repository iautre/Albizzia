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
      <template v-for="category in categories" :key="category.cid">
        {{ category.name }}
      </template>
    </n-button>
    <n-button text v-if="tags && tags.length > 0">
      <template #icon>
        <n-icon :component="PricetagsOutline"></n-icon>
      </template>
      <template v-for="tag in tags" :key="tag.name">
        {{ tag.name }}
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
import {NButton, NIcon, NSpace} from 'naive-ui'

import type {Category, Tag} from "~/api";
import {
  LocationOutline,
  PricetagsOutline, ReorderFourOutline, TodayOutline,
} from '@vicons/ionicons5'

const {timeUnixStr, categories, tags} = defineProps(
    {
      timeUnixStr: {type: String, default: '0'},
      categories: {type: Array , default: ()=>[]},
      tags: {type: Array , default: ()=>[]},
      gps: {type: String, default: null}
    }
)

</script>
