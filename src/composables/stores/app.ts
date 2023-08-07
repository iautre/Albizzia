import { defineStore } from 'pinia'

export const useAppSetStore = defineStore('appSet', () => {

    const width = ref<number>(document.body.getBoundingClientRect().width)

    const bigHeader = computed<boolean>(()=>{
        return  width.value >= 1000
    })
    const hasSider = computed<boolean>(()=>{
        return width.value >= 720
    })
    const resetWidth =  () => {
        debugger
        width.value = document.body.getBoundingClientRect().width
    }

    return { width,bigHeader,hasSider, resetWidth}
})
