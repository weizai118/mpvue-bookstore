import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    backgroundTextStyle: "dark",
    enablePullDownRefresh: true,
    onReachBottomDistance: 30
  }
}
