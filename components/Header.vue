<template>
  <a-layout-header class="header">
    <a-menu v-model="current" mode="horizontal" class="menu">
      <a-menu-item key="/" class="home"><router-link to="/">AutreC</router-link></a-menu-item>
      <template  v-for="nav in navs">
        <a-menu-item :key="nav.link" v-if="!nav.items"><router-link :to="nav.link"><a-icon :type="nav.icon" />{{nav.text}}</router-link></a-menu-item>
        <a-sub-menu v-if="nav.items">
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon :type="nav.icon" />{{nav.text}}</span>
            <template v-for="item in nav.items">
            <a-menu-item :key="item.link">
              <router-link :to="item.link">{{item.text}}</router-link>
            </a-menu-item>
            </template>
        </a-sub-menu>
      </template>
      <a-menu-item key="about" class="right">
        <router-link to="/about/">关于</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      current: [],
      navs: []
    }
  },
  computed: {
    
  },
  methods: {
    setCurrent(){
      //this.current = [this.$site.themeConfig.nav[0].link]
      this.current = [this.$route.path]
    }
  },
  mounted: function(){
    this.setCurrent()
  }
}
</script>
<style scoped>
.header{
  height: 48px;
  padding: 0;
  border-bottom: 1px solid #e8e8e8;
  background: #fff;
}

.menu{
  max-width: 960px;
  margin: auto;
  width: 100%;
}
</style>
