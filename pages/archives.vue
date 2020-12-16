<template>
  <div>
    <a-collapse :default-active-key="firstPostYear" :bordered="false" v-for="(value, key) in postData">
          <a-collapse-panel :key="key" :header="key">
            <a-list size="small" :data-source="value">
              <a-list-item slot="renderItem" slot-scope="item, index">
                <router-link :to="item.path">{{ item.modified }} . {{ item.title }}</router-link>
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
  async asyncData ({store, route, $axios, params, payload }) {
    let dataFormat = function(e, fmt){
      Date.prototype.Format = function(fmt) { 
        let o = { 
            "M+" : this.getMonth()+1,                 //月份 
            "d+" : this.getDate(),                    //日 
            "h+" : this.getHours(),                   //小时 
            "m+" : this.getMinutes(),                 //分 
            "s+" : this.getSeconds(),                 //秒 
            "q+" : Math.floor((this.getMonth()+3)/3), //季度 
            "S"  : this.getMilliseconds()             //毫秒 
        }; 
        if(/(y+)/.test(fmt)) {
                fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
        }
        for(let k in o) {
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return fmt; 
      } 
      let date = new Date(e)
      return date.Format(fmt)
    }

    let data = {}
    let firstPostYear = ""
    //store.dispatch("setCurren", 'about')
    //if(!payload){
    let res = await $axios.$get(`/a/all`)
    if(res.code == 0){
      for(let index in res.data){
        let item = res.data[index]
        let dateStr = dataFormat(item.modified, "yyyy")
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
