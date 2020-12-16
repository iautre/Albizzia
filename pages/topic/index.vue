<template>
  <div>
    <template v-for="topic in topics">
        <a-tag color="pink" class="tags">
          <router-link :to="topic.slug">{{topic.name}}</router-link>
        </a-tag>
      </template>
  </div>  
</template>
<script>
import axios from 'axios'
export default {
  components: {
    
  },
  data() {
    return {
      topics: {}
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  mounted: function(){
    
  },
  head() {
    return {
      title: '标签',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '技术分享'
        }
      ]
    }
  },
  async asyncData ({store, route, $axios, params, payload }) {
   
    let topics = []
    //store.dispatch("setCurren", 'about')
    //if(!payload){
    let res = await $axios.$get(`/a/metas`)
    if(res.code == 0){
      topics = res.data
    }
    return {topics: topics}
  }
}
</script>
<style> 

.meta{
  margin-bottom: 10px;
}
.tags{
  margin-bottom: 8px;
}
</style>
