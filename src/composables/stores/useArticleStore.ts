import { defineStore } from 'pinia'

import {
  articlePage,
  getArticle,
  PageModel,
  Article,
  Tag,
  Category,
  getTag,
  getCategory,
  getTags,
  getCategories,
} from '@/api/index'

export const useArticleStore = defineStore('ArticleData', () => {

  const articleList = ref<Array<Article>>([])
  const articleData = ref<Article>()
  const tags = ref<Array<Tag>>([])
  const categories = ref<Array<Category>>([])
  const tag = ref<Tag>()
  const category = ref<Category>()

  const getArticleList = async (page=1, category:string|undefined) => {
    const list = await articlePage({page:page, category: category})
    articleList.value = list || []
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
    articleList, articleData, tag, category, tags, categories,
    getArticleList, getArticleData,getTagList, getCategoryList,getTagData, getCategoryData
  }
})
