<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
const {resetWidth} = useStore.useScreenStore()
onBeforeMount(() => {
  window.addEventListener('resize', resetWidth)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resetWidth);
})

</script>
