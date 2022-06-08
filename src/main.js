// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: "#app", // el用于指定当前Vue示例为哪个容器服务
  router,
  render: h => h(App)
});
// 此处需要use后，this.$http.get或者this.$http.post才可以
Vue.use(VueRouter)
Vue.use(VueResource)
