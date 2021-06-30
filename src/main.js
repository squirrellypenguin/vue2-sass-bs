import App from './App.vue'
import './registerServiceWorker'
import Vue from "vue";
import router from "./router";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"
// import BootstrapVue from "bootstrap-vue"
// import InfoCard from "vue-info-card"
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret, faGem, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(fab, faUserSecret, faGem, faEnvelopeOpenText)
// // import Buefy from 'buefy'
// // import 'buefy/dist/buefy.css'
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.use(BootstrapVue)
// Vue.use(InfoCard)
// // Vue.use(Buefy)

// Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");