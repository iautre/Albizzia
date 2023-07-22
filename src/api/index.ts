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
    path: string,
    issued: Date,
    headImg?:string,
    description?:string,
    content: string,
    views: number,
}
export const articlePage = async (params:any)=>{
    const result =  await request<PageModel<Article>>("/coding/article/page", params)
    return result
}
export const getArticle = async (slug:string)=>{
    const result =  await request<Article>(`/coding/article/info?slug=${slug}`)
    return result
}