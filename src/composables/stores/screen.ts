import { defineStore } from 'pinia'

export const useScreenStore = defineStore('useScreenStore', () => {

    const width = ref<number>(process.client ? document.body.getBoundingClientRect().width : 719)
    //
    // const large = computed<boolean>(()=>{
    //     return  width.value >= 1000
    // })
    // const medium = computed<boolean>(()=>{
    //     return width.value >= 720 && width.value< 1000
    // })
    // const small = computed<boolean>(()=>{
    //     return width.value < 720
    // })

    const large = ref<boolean>(false)
    const medium = ref<boolean>(false)
    const small = ref<boolean>(true)
    const spin = ref<boolean>(false)
    const resetWidth =  () => {
        let w = process.client ? document.body.getBoundingClientRect().width : 719
        width.value = w
        large.value = w>=1000
        medium.value = w >= 720 && w< 1000
        small.value = w < 720
    }
    const spinOver = ()=>{
        spin.value = false
    }

    return { width,large,medium,small,spin, resetWidth, spinOver}
})
