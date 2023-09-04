<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
// const {width, resetWidth, spinOver} = useStore.useScreenStore()
onBeforeMount(() => {
  // resetWidth()
  // window.addEventListener('resize', resetWidth)
})
onBeforeUnmount(() => {
  // window.removeEventListener('resize', resetWidth);
})
onMounted(()=>{
  // resetWidth()
  // window.addEventListener('resize', resetWidth)
  // spinOver()
})

</script>
