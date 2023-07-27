<template>
  <NuxtLayout>
    <!-- {{data}} -->
    <v-row dense>
      <v-col cols="12" v-for="item in articleList" :key="item.cid">
        <v-card class="ma-1">
          <v-card-title class="text-h6">
            <NuxtLink :to="item.slug + '.html'">
              {{ item.title }}
            </NuxtLink>
          </v-card-title>
          <v-card-subtitle>
            <v-chip prepend-icon="mdi-calendar-range" variant="text">
              {{dateformat(item.created)}}
            </v-chip>
            <!--            <v-chip prepend-icon="mdi-eye-outline" variant="text">-->
            <!--                {{item.views}}-->
            <!--            </v-chip>-->
            <v-chip prepend-icon="mdi-format-list-bulleted" variant="text">
              <v-chip variant="text" class="pa-1" v-for="category in item.categories" :key="category.cid">
                {{category.name}}
              </v-chip>
            </v-chip>
            <v-chip prepend-icon="mdi-tag-multiple-outline" variant="text">
              <v-chip variant="text" class="pa-1" v-for="tag in item.tag" :key="tag.name">
                {{tag.name}}
              </v-chip>
            </v-chip>
          </v-card-subtitle>
          <v-card-text>
            <v-img v-if="item.thumb && item.thumb.firstimg"
                   cover
                   :src="item.thumb.firstimg"
            ></v-img>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <!--        <v-pagination v-model="articlePageData.current" :length="articlePageData.pages" rounded="circle"></v-pagination>-->
      </v-col>
    </v-row>
  </NuxtLayout>
</template>
<script lang="ts" setup>

import { storeToRefs } from "pinia"
const aritcleStore = useStore.useArticleStore()
const dateformat = (e:string)=>{
  const es  = Number(e) * 1000
  const date = new Date(es)
  const y = date.getUTCFullYear()
  const m = '0' + (date.getUTCMonth() + 1)
  const d = '0' + date.getUTCDate()
  return `${y}-${m.substring(m.length-2)}-${d.substring(d.length-2)}`
}
await aritcleStore.getArticleList()
const { articleList } = storeToRefs(aritcleStore)
</script>