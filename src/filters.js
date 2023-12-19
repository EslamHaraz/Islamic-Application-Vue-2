import Vue from "vue";
Vue.filter("descriptionLetters", function (value) {
  return value.slice(0, 80) + "...";
});
Vue.filter("maxChar", function (value, number) {
  return value.slice(0, number) + "....";
});
Vue.filter("namesLitters", function (value) {
  return value.slice(0, 10) + "...";
});
