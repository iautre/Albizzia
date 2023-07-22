<template>
  <NuxtLayout>
    <!-- {{data}} -->
    <v-row dense>
      <v-col cols="12" v-for="item in articlePageData.records" :key="item.id">

        <v-card class="ma-1">
          <v-card-title class="text-h6">
            <NuxtLink :to="item.path">
              {{ item.title }}
            </NuxtLink>
          </v-card-title>
          <v-card-subtitle>
            <v-chip prepend-icon="mdi-calendar-range" variant="text">
                {{item.issued}}
            </v-chip>
            <v-chip prepend-icon="mdi-eye-outline" variant="text">
                {{item.views}}
            </v-chip>
          </v-card-subtitle>
          <v-card-text>
            {{ item.description }}
          </v-card-text>
        </v-card>

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

import { storeToRefs } from "pinia"
const aritcleStore = useStore.useArticleStore()
// 
await aritcleStore.getArticlePage()
const { articlePageData } = storeToRefs(aritcleStore)
</script>