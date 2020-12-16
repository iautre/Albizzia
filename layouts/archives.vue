<template>
  <a-layout>
    <Header />
    <a-layout-content class="container">
      <a-layout>
        <a-layout-content class="content">
          <nuxt />
        </a-layout-content>
        <a-layout-sider theme="light" width="260" class="sider">
          <a-card hoverable >
            <a slot="cover" target="_blank" href="https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=o5ofeqxc">
            <img
              width="238"
              alt="阿里云"
              src="https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg"
            /></a>
          </a-card>
          <a-card >
            <template v-for="tag in tags">
              <a-tag color="pink">
              {{tag.name}}
            </a-tag>
            </template>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-layout-sider>
      </a-layout>
    </a-layout-content>
    <Footer />
    <a-back-top />
  </a-layout>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: 'archives',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      tags:[]
      
    };
  },
   
}
</script>
<style>
body{
  background: #f0f2f5;
}
h1{
  font-size: 22px;
}
h2{
  font-size: 20px;
}
h3{
  font-size: 18px;
}
h4{
  font-size: 16px;
}
.right{
  float: right;
}
.container{
  max-width: 960px;
  margin: 16px auto;
  width: 100%;
}

.content{
  padding: 16px; 
  min-height: 280px;
  background: #fff;
  max-width: 700px;
}

.sider{
  width: 260px;
  background: #f0f2f5;
  padding-left: 20px;
}
.ant-card{
  margin-bottom: 16px;
}
@media (max-width: 700px){
  .sider {
      display: none; 
  }
}
</style>
