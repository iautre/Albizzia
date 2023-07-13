import {request} from '@/utils/request'


export interface PageModel<T> {
    records: T[],
    pages: number,
    current: number,
    total: number,
    size: number
}
export interface Article {
    id: number,
    title: string,
    slug: string,
    headImg?:string,
    description?:string,
    content: string,
}
export const articlePage = async (params:any)=>{
    const result =  await request<PageModel<Article>>("/coding/article/page", params)
    debugger
    return result
}
export const getArticle = async (params:any)=>{
    const result =  await request<Article>("/coding/article/info", params)
    debugger
    return result
}