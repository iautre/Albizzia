<template>
  <NuxtLayout>
    <!-- {{data}} -->
    <v-row dense>
      <v-col cols="12" v-for="item in articlePageData.records" :key="item.id">
        <NuxtLink :to="item.slug">
          <v-card class="ma-1">
            <v-card-title class="text-h5">
              {{item.title}}
            </v-card-title>
            <v-card-subtitle>
              {{item.title}}
            </v-card-subtitle>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-pagination v-model="articlePageData.current" :length="articlePageData.pages" rounded="circle"></v-pagination>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>
<script lang="ts" setup>

import {storeToRefs} from "pinia"
const aritcleStore = useStore.useArticleStore()
// 
await aritcleStore.getArticlePage()
const {articlePageData} = storeToRefs(aritcleStore)
</script>