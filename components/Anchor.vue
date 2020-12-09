<template>
    <a-anchor :target-offset="targetOffset" wrapperClass="anchor" >
        <template v-for="anchor in anchors">
            <a-anchor-link :href="'#'+anchor.slug" :title="anchor.title">
                <template v-for="anchorc in anchor.child">
                    <a-anchor-link :href="'#'+anchorc.slug" :title="anchorc.title" >
                        <template v-for="anchorc2 in anchorc.child">
                            <a-anchor-link :href="'#'+anchorc2.slug" :title="anchorc2.title" />
                        </template>
                    </a-anchor-link>
                </template>
            </a-anchor-link>
        </template>
       </a-anchor>
</template>

<script>
export default {
  data() {
    return {
      targetOffset: undefined,
      anchors:[]
    };
  },
  computed:{
      anchors2(){
          return this.$page.headers
      }
  },
  mounted () {
    //this.setAnchors()
  },
  methods: {
    setAnchors(){
        let aaa = []
        for(let index in this.$page.headers){
            let item = this.$page.headers[index]
            if(item.level==2){
                aaa.push(item)
            }else if(item.level == 3){
                if(!aaa[aaa.length-1].child){
                    aaa[aaa.length-1].child = []
                }
                aaa[aaa.length-1].child.push(item)
            }else if(item.level == 4){
                let child = aaa[aaa.length-1].child
                let child2 = child[child.length-1].child
                if(!child2){
                    (aaa[aaa.length-1].child)[child.length-1].child = []
                }
               (aaa[aaa.length-1].child)[child.length-1].child.push(item)
            }
        }
      
       this.anchors = aaa
    }
  }
}
</script>
<style>
.anchor{
  margin-left: 0;
  margin-top: 16px;
  background: #f0f2f5;
}
</style>