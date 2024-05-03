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
    issued: string,
    headImg?:string,
    description?:string,
    text: string,
    text2: string,
    views: number,
    categories: Array<Category>,
    tags:Array<string>,
    thumb: Thumb,
    thumbs: Array<string>
    gps: string,
}
export interface Category {
    name:string,
    slug:string,
}
export interface Thumb {
    firstimg: string
}
export const articlePage = async (params:any)=>{
    return await request<PageModel<Article>>("/api/console/content/public/posts", {params:params})
}
export const getArticle = async (slug:string)=>{
    return await request<Article>(`/api/console/content/public/post?slug=${slug}`)
}
export const getCategories= async ()=>{
    return await request<Array<Category>>(`/api/console/content/public/categories`)
}
export const getTags = async ()=>{
    return await request<Array<string>>(`/api/console/content/public/tags`)
}
export const getCategory = async (slug:string)=>{
    return await request<Category>(`/api/console/content/public/category?slug=${slug}`)
}
export const getTag = async (name:string)=>{
    return await request<string>(`/api/console/content/public/tag?name=${name}`)
}
