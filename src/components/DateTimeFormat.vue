<template>
  <n-time :time="new Date(timeUnixStr)"  type="relative"  />
</template>

<script setup lang="ts">

const {timeUnixStr} = defineProps({timeUnixStr:{type:String, default: '0'}})

</script>
