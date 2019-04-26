import Vue from 'vue'
import App from './App.vue'
import MessagePlugin from './message'

Vue.use(MessagePlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
