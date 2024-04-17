<template>
  <n-space>
    <n-tag :bordered="false" :color="{color:'#ffffff'}" style="height: 24px;padding: 0;color:#878789;" ><DateTimeFormat :timeUnixStr="timeUnixStr"/></n-tag>
    <n-tag :bordered="false" :color="{color:'#ffffff', textColor:'#878789'}" style="height: 24px;padding: 0;color:#878789;" v-if="gps"><template #icon><n-icon  :component="LocationOutline" size="16px"  /></template>{{gps}}</n-tag>
    <n-button round size="small" v-for="(category, index) in categories" :key="category.slug" style="height: 24px;padding: 0 10px;color:#5e5d5d;">
      <router-link :to="'/topic/'+category.slug">{{ category.name}}</router-link>
    </n-button>
    <n-button round dashed size="small"  v-for="(tag, index) in tags" :key="tag" style="height: 24px;padding: 0 10px;color:#878789;">
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
