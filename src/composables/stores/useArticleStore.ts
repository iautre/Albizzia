import { defineStore } from 'pinia'

import {
  articlePage,
  getArticle,
  PageModel,
  Article,
  Category,
  getTag,
  getCategory,
  getTags,
  getCategories,
} from '@/api/index'

export const useArticleStore = defineStore('ArticleData', () => {

  const articleList = ref<Array<Article>>([])
  const pages = ref<Number>(0)
  const articleData = ref<Article>()
  const tags = ref<Array<string>>([])
  const categories = ref<Array<Category>>([])
  const tag = ref<string>()
  const category = ref<Category>()

  const getArticleList = async (page=1, category:string|undefined) => {
    const res = await articlePage({current: page, category: category})
    pages.value = res.pages
    articleList.value = res.records || []
  }
  const getArticleData = async (slug:string) => {
      const data = await getArticle(slug)
      articleData.value = data
  }
  const getTagList = async ()=>{
    const data = await getTags()
    tags.value = data
  }
  const getCategoryList = async ()=>{
    categories.value = await getCategories()
  }
  const getTagData = async (name:string)=>{
    const data = await getTag(name)
    tag.value = data
  }
  const getCategoryData = async (slug:string)=>{
    category.value = await getCategory(slug)
  }

  return {
    articleList, pages, articleData, tag, category, tags, categories,
    getArticleList, getArticleData,getTagList, getCategoryList,getTagData, getCategoryData
  }
})
