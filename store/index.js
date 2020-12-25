export const state = () => ({
    navs: [{"icon": "tag", "link": "/topic", "title": "话题"}, {"icon": "bars", "link": "/archives", "title": "归档"}, {"icon": "book", "link": "/book", "title": "书单"}]
  })
  
  export const mutations = {
    setNavs(state, navs) {
      state.navs = navs
    }
  }