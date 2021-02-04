import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
<<<<<<< HEAD
=======
import VueAxios from 'vue-axios'
>>>>>>> sub1

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
