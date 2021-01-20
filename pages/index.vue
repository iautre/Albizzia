<template>
  <div>
    <a-list item-layout="vertical" size="large" :data-source="postData">
      <div slot="footer">
        
      </div>
      <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
        <template  slot="actions">
          <span ><a-icon type="calendar" style="margin-right: 8px" />
            {{item.modified | dataFormat("yyyy-MM-dd")}}
          </span><span ><a-icon type="star" style="margin-right: 8px" />
            {{item.likes}}
          </span><span ><a-icon type="message" style="margin-right: 8px" />
            {{item.comments}}
          </span><span ><a-icon type="eye" style="margin-right: 8px" />
            {{item.views}}
          </span>
        </template>
        <img v-if="item.image != null"
          slot="extra"
          width="120"
          :alt="item.title"
          :src="item.image"
        />
        <a-list-item-meta >
          <router-link slot="title"  :to="item.path">{{ item.title }}</router-link>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>  
</template>
<script>
import axios from 'axios'
export default {
  components: {
    
  },
  data() {
    return {
      postData: [],
      
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
      title: '首页',
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
    let data = []
    //store.dispatch("setCurren", 'about')
    //if(!payload){
    let res = await $axios.$get(`/a/list?page=1`)
    if(res.code == 0){
        data = res.data
    }
    return {postData: data }
  }
}
</script>
<style> 

.meta{
  margin-bottom: 10px;
}

</style>
