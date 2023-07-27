import { defineStore } from 'pinia'

import { articlePage, getArticle, PageModel, Article } from '@/api/index'
import {de} from "vuetify/locale";

export const useArticleStore = defineStore('ArticleData', () => {

  const articleList = ref<Array<Article>>([])
  const articleData = ref<Article>()

  const getArticleList = async () => {
    const list = await articlePage({})
    articleList.value = list || []
  }
  const getArticleData = async (cid: string) => {
    const data = await getArticle(cid)
    articleData.value = data
  }


  return { articleList, articleData, getArticleList, getArticleData }
})
