<template>
  <div>
    <h1>{{postData.title}}</h1>
    <div class="meta">
      <span><a-icon type="calendar" style="margin-right: 2px" />
          {{postData.issued | dataFormat("yyyy-MM-dd")}}</span>
      <span><a-icon type="tags" style="margin-right: 2px;margin-left: 8px;" />
          {{postData.categories}}
          <template v-for="tag in postData.tags">
              {{ tag }}
          </template>
      </span>
      <span ><a-icon @click="like" :theme="iconTheme" type="star" style="margin-right: 2px;margin-left: 8px;" />
          {{postData.likes}}
      </span>
      <span ><a-icon type="message" style="margin-right: 2px;margin-left: 8px;" />
          {{postData.comments}}
      </span>
    </div>
    <div class="text" v-html="$md.render(postData.content)"></div>
    <a-row type="flex">
      <a-col flex="auto"></a-col>
      <a-col><a-button icon="star" @click="like">{{postData.likes}}</a-button></a-col>
      <a-col flex="10px"/>
      <a-col>
        <a-popover title="手机扫一扫" trigger="click" @visibleChange="showQRCode">
          <template slot="content">
            <a-space :size="12">
              <img
                :width="200"
                :src="qrCode"
              >
                <template #placeholder>
                  <img
                    :src="qrCode"
                    :width="200"
                    :preview="false"
                  />
                </template>
              </img>
            </a-space>
          </template>
          <a-button icon="qrcode">
            手机查看
          </a-button>
        </a-popover>
      </a-col>
      <template v-if="postData.wxmpurl">
        <a-col flex="10px"/>
        <a-col>
          <a-popover title="去微信留言" trigger="click" @visibleChange="showWxQRCode">
            <template slot="content">
              <a-space :size="12">
                <img
                  :width="200"
                  :src="wxQRCode"
                >
                  <template #placeholder>
                    <img
                      :src="wxQRCode"
                      :width="200"
                      :preview="false"
                    />
                  </template>
                </img>
              </a-space>
            </template>
            <a-button icon="wechat">
              留言
            </a-button>
          </a-popover>
        </a-col>
      </template>
      <!--
      <a-col flex="10px"/>
      <a-col>
        <a-popover title="Title">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <a-button  icon="wechat">
            推送到微信
          </a-button>
        </a-popover>
      </a-col>
      -->
      <a-col flex="auto"></a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'a',
  components: {
    
  },
  data() {
    return {
      postData: {},
      iconTheme: "outlined",
      wxQRCode: '',
      qrCode: ''
    };
  },
  computed: {
    
  },
  methods: {
    like(){
      this.iconTheme = "filled"
      this.$axios.$get(`/a/like?slug=${this.$route.params.slug}`)
      this.postData.likes ++
    },
    async showWxQRCode(e){
      if(e === true && this.wxQRCode === ''){
        this.wxQRCode = await this.$QRCode.toDataURL(this.postData.wxmpurl)
      }
    },
    async showQRCode(e){
      if(e === true && this.qrCode === ''){
        this.qrCode = await this.$QRCode.toDataURL(window.location.href)
      }
    }
  },
  mounted: function(){
    this.$axios.$get(`/a/view?slug=${this.$route.params.slug}`)
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