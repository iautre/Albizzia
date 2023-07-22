import { defineStore } from 'pinia'

import { articlePage, getArticle, PageModel, Article } from '@/api/index'

export const useArticleStore = defineStore('ArticleData', () => {

  const articlePageData = ref<PageModel<Article>>({
    records: [],
    pages: 0,
    current: 1,
    total: 0,
    size: 10
  })
  const articleData = ref<Article>()

  const getArticlePage = async () => {
    const data = await articlePage({})
    if (data) {
      articlePageData.value.records = data.records || []
      articlePageData.value.pages = data.pages || 0
      articlePageData.value.current = data.current || 1
      articlePageData.value.size = data.size || 10
    }
  }
  const getArticleData = async (slug: string) => {
    const data = await getArticle(slug)
      articleData.value = data
  }


  return { articlePageData, articleData, getArticlePage, getArticleData }
})
