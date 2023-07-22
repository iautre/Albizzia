<template>
  <NuxtLayout>
    <v-row dense>
      <v-col cols="12">
          <v-card class="ma-1">
            <v-card-title class="text-h5">
              {{articleData.title}}
            </v-card-title>
            <v-card-subtitle>
              {{articleData.title}}
            </v-card-subtitle>
          </v-card>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const router = useRoute()
import {storeToRefs} from "pinia"
const aritcleStore = useStore.useArticleStore()

await aritcleStore.getArticleData('about')
const {articleData} = storeToRefs(aritcleStore)
</script>