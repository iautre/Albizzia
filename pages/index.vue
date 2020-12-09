<template>
  <div>
    <a-list item-layout="vertical" size="large" :data-source="postData">
      <div slot="footer">
        
      </div>
      <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
        <template  slot="actions">
          <span ><a-icon type="calendar" style="margin-right: 8px" />
            {{item.modified}}
          </span><span ><a-icon type="star" style="margin-right: 8px" />
            {{item.likes}}
          </span><span ><a-icon type="message" style="margin-right: 8px" />
            {{item.comments}}
          </span><span ><a-icon type="message" style="margin-right: 8px" />
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
          <a slot="title" :href="item.path">{{ item.title }}</a>
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
      temp: {},
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ]
     
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  mounted: function(){
    
  },
  async asyncData ({store, route, $axios, params, payload }) {
    var res = payload
    //store.dispatch("setCurren", 'about')
    //if(!payload){
      var data = await $axios.$get(`/a/list?page=1`)
      res = data.data
   // }
    return {postData: res }
  }
}
</script>
<style> 

.meta{
  margin-bottom: 10px;
}

</style>
