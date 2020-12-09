<template>
  <div>
      <div class="meta">
        <span><a-icon type="calendar" style="margin-right: 2px" />
            {{postData.date}}</span>
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
  async asyncData ({store, route, $axios, params, payload }) {
    var res = payload
    //store.dispatch("setCurren", 'about')
    //if(!payload){
      var data = await $axios.$get(`/p/info?slug=${params.slug}`)
      res = data.data
   // }
    return {postData: res }
  }
}
</script>
<style>

.meta{
  margin-bottom: 12px;
}

</style>