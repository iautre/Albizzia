import {request} from '@/utils/request'

export interface PageModel<T> {
    records: T[],
    pages: number,
    current: number,
    total: number,
    size: number
}
export interface Article {
    cid: number,
    slug: string,
    title: string,
    path: string,
    created: string,
    headImg?:string,
    description?:string,
    text: string,
    views: number,
    categories: Array<Category>,
    tag:Array<Tag>,
    thumb: Thumb,
}
export interface Category {
    cid: number,
    name:string,
    slug:string,
    permalink:string,
}
export interface Tag {
    name:string
}
export interface Thumb {
    firstimg: string
}
export const articlePage = async (params:any)=>{
    return await request<Array<Article>>("/posts", {params:params})
}
export const getArticle = async (slug:string)=>{
    return await request<Article>(`/post?slug=${slug}`)
}
