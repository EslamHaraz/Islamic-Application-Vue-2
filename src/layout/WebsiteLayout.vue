<template>
  <div class="container position-relative">
    <HeaderComponent></HeaderComponent>
    <div class="content">
      <router-view></router-view>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "WebsiteLayout",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    if (this.$route.fullPath == "/") {
      this.$router.push({ name: "HomeView" });
    }
  },
};
</script>
<style scoped>
.content {
  min-height: 100vh;
}
</style>
