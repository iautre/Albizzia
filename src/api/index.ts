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
    text2: string,
    views: number,
    categories: Array<Category>,
    tag:Array<Tag>,
    thumb: Thumb,
    imgs: Array<string>
}
export interface Category {
    name:string,
    slug:string,
}
export interface Tag {
    name:string
}
export interface Thumb {
    firstimg: string
}
export const articlePage = async (params:any)=>{
    return await request<PageModel<Article>>("/content/public/posts", {params:params})
}
export const getArticle = async (slug:string)=>{
    return await request<Article>(`/content/public/post?slug=${slug}`)
}
export const getCategories= async ()=>{
    return await request<Array<Category>>(`/content/public/categories`)
}
export const getTags = async ()=>{
    return await request<Array<Tag>>(`/content/public/tags`)
}
export const getCategory = async (slug:string)=>{
    return await request<Category>(`/content/public/category?slug=${slug}`)
}
export const getTag = async (name:string)=>{
    return await request<Tag>(`/content/public/tag?name=${name}`)
}
