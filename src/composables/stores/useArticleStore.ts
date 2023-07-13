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
  const articleData = ref<Article>({
    id: 0,
    slug: '',
    title: '',
    content: '',
  })

  const getArticlePage = async () => {
    const data = await articlePage({})
    if (data) {
      debugger
      articlePageData.value.records = data.records || []
      articlePageData.value.pages = data.pages || 0
      articlePageData.value.current = data.current || 1
      articlePageData.value.size = data.size || 10
    }
  }
  const getArticleData = async (slug: string) => {
    const data = await getArticle({ slug: slug })
    if (data) {
      articleData.value = data
    }
  }


  return { articlePageData, articleData, getArticlePage, getArticleData }
})
