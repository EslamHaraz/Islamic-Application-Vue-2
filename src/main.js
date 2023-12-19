import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import JwPagination from "jw-vue-pagination";
import Vuelidate from "vuelidate";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from "axios";
import "./assets/styles/main.css";
import "@/filters.js";
axios.defaults.baseURL = "http://localhost:3000/";
Vue.config.productionTip = false;
library.add(fas, far, fab);
Vue.component("FontAwesome", FontAwesomeIcon, "jw-pagination", JwPagination);
Vue.use(Vuelidate, "jw-pagination", JwPagination);
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 2,
  newestOnTop: true,
  position: "top-right",
  timeout: 2400,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
