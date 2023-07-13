<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>
      <NuxtLink v-for="link in links" :key="link.key" :to="link.path">
        <v-btn variant="text"> {{ link.name }} </v-btn>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-responsive max-width="260">
        <v-text-field density="compact" hide-details variant="solo"></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const links = [
  { key: '1', path: '/', name: '首页' },
  { key: '2', path: '/books', name: '好书推荐' },
  { key: '3', path: '/tags/java', name: 'java' },
  { key: '4', path: '/about', name: '关于' },
]
</script>