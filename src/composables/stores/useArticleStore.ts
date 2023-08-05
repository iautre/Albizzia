import { defineStore } from 'pinia'

import {articlePage, getArticle, PageModel, Article, getPage} from '@/api/index'

export const useArticleStore = defineStore('ArticleData', () => {

  const articleList = ref<Array<Article>>([])
  const articleData = ref<Article>()

  const getArticleList = async (page=1, category:string) => {
    const list = await articlePage({page:page, category: category})
    articleList.value = list || []
  }
  const getArticleData = async (cid:string|null = null, slug:string|null=null) => {
    if (cid){
      const data = await getArticle(cid)
      articleData.value = data
    }else if (slug) {
      const data = await getPage(slug)
      articleData.value = data
    }

  }


  return { articleList, articleData, getArticleList, getArticleData }
})
