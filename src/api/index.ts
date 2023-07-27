import {request} from '@/utils/request'
import exp from "constants";


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
    const result =  await request<Array<Article>>("/posts", params)
    return result
}
export const getArticle = async (cid:string)=>{
    const result =  await request<Article>(`/post2?cid=${cid}`)
    return result
}