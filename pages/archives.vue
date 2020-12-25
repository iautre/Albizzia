<template>
  <div>
    <a-collapse :default-active-key="firstPostYear" :bordered="false" v-for="(value, key) in postData" v-bind:key="key">
          <a-collapse-panel :key="key" :header="key">
            <a-list size="small" :data-source="value">
              <a-list-item slot="renderItem" slot-scope="item, index">
                <router-link :to="item.path">{{ item.modified | dataFormat("yyyy-MM-dd") }} . {{ item.title }}</router-link>
              </a-list-item>
            </a-list>
          </a-collapse-panel>
      </a-collapse>
  </div>  
</template>
<script>
import axios from 'axios'
export default {
  components: {
    
  },
  data() {
    return {
      postData: {},
      firstPostYear: ""
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
      title: '归档',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '技术分享'
        }
      ]
    }
  },
  async asyncData ({store, app, route, $axios, params, payload }) {
    
    let data = {}
    let firstPostYear = ""
    //store.dispatch("setCurren", 'about')
    //if(!payload){
    let res = await $axios.$get(`/a/all`)
    if(res.code == 0){
      for(let index in res.data){
        let item = res.data[index]
        let dateStr = app.$dataFormat(item.modified, "yyyy")
        if(index == 0)firstPostYear = dateStr
        if(!data[dateStr])data[dateStr]=[]
        data[dateStr].push(item)
      }
    }
    return {postData: data,firstPostYear: firstPostYear}
  }
}
</script>
<style> 

.meta{
  margin-bottom: 10px;
}
.ant-collapse-borderless{
  background-color: #ffff;
}
</style>
