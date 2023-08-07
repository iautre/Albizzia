<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
const {resetWidth} = useStore.useAppSetStore()
window.addEventListener('resize', resetWidth)
</script>