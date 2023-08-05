<template>
  <n-time :time="Number(timeUnixStr)"  type="relative" :unix="true" />
</template>

<script setup lang="ts">
import {NTime} from 'naive-ui'

const {timeUnixStr} = defineProps({timeUnixStr:{type:String, default: '0'}})

</script>
