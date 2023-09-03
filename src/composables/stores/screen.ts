import { defineStore } from 'pinia'

export const useScreenStore = defineStore('useScreenStore', () => {

    const width = ref<number>(process.client ? document.body.getBoundingClientRect().width : 719)

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
        width.value = process.client ? document.body.getBoundingClientRect().width : 719
    }

    return { width,large,medium,small, resetWidth}
})
