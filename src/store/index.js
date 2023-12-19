import Vue from "vue";
import Vuex from "vuex";
const state = {
  sidebarStatus: false,
  reciterData: "",
};
const mutations = {
  openSidebar(state) {
    state.sidebarStatus = !state.sidebarStatus;
  },
  getReciterData(state, payload) {
    state.reciterData = payload;
  },
};
Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  getters: {},
  mutations: mutations,
  actions: {},
  modules: {},
});
