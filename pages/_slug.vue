<template>
  <div>
      <div class="meta">
        <span><a-icon type="calendar" style="margin-right: 2px" />
            {{postData.issued | dataFormat("yyyy-MM-dd")}}</span>
        <span><a-icon type="tags" style="margin-right: 2px" />
            {{postData.categories}}
            <template v-for="tag in postData.tags">
                {{ tag }}
            </template>
        </span>
      </div>
      <div class="text" v-html="$md.render(postData.content)"></div>
    </div>
</template>
<script>
export default {
  name: 'page',
  components: {
    
  },
  data() {
    return {
      postData: {}
      
    };
  },
  computed: {
    
  },
  mounted: function(){
    
  },
  head() {
    return {
      title: this.postData.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.postData.description
        }
      ]
    }
  },
  async asyncData ({store, route, $axios, params, payload }) {
    let  data = {}
    //store.dispatch("setCurren", 'about')
    //if(!payload){
    let res = await $axios.$get(`/a/info?slug=${params.slug}`)
    if(res.code == 0){
      data = res.data
    }
    return {postData: data }
  }
}
</script>
<style>

.meta{
  margin-bottom: 12px;
}

</style>