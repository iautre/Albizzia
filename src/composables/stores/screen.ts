import { defineStore } from 'pinia'

export const useScreenStore = defineStore('useScreenStore', () => {

    const width = ref<number>(document.body.getBoundingClientRect().width)

    const large = computed<boolean>(()=>{
        return  width.value >= 1000
    })
    const medium = computed<boolean>(()=>{
        return width.value >= 720 && width.value< 1000
    })
    const small = computed<boolean>(()=>{
        return width.value < 720
    })
    const resetWidth =  () => {
        width.value = document.body.getBoundingClientRect().width
    }

    return { width,large,medium,small, resetWidth}
})
