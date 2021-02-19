// 全局方法
import Vue from 'vue'
import qrcode from 'qrcode'

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
    let date = new Date(parseInt(e)*1000)
    return date.Format(fmt)
  }



let utils = {
    install(Vue) {
        Vue.prototype.$dataFormat = dataFormat
        Vue.prototype.$QRCode = qrcode
        Vue.filter('dataFormat', dataFormat)
    }
}
Vue.use(utils);

// 这里是 为了在 asyncData 方法中使用
export default ({ app }, inject) => {
    // Set the function directly on the context.app object
    app.$dataFormat = dataFormat // 名称
}