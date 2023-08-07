import { defineStore } from 'pinia'

import {articlePage, getArticle, PageModel, Article} from '@/api/index'

export const useArticleStore = defineStore('ArticleData', () => {

  const articleList = ref<Array<Article>>([])
  const articleData = ref<Article>()

  const getArticleList = async (page=1, category:string) => {
    const list = await articlePage({page:page, category: category})
    articleList.value = list || []
  }
  const getArticleData = async (slug:string) => {
      const data = await getArticle(slug)
      articleData.value = data
  }


  return { articleList, articleData, getArticleList, getArticleData }
})
