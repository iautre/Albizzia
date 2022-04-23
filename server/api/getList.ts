
export default async () => {
    const result = await $fetch('/a/list?page=1', {
        baseURL: useRuntimeConfig().BASE_API,
        headers: {
            'Client': useRuntimeConfig().APP_KEY
        },
    })
    return result['data']
}