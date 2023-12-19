<template>
  <div class="parent mt-3 mb-3" >
    <div class="text-end bg-white p-3 border-b">
      <h4 class="text-end bg-white p-3 bg-head border-b mb-3 p-3 w-fit-content">الاذكار</h4>
      <div class="adkhar-box">
        <router-link
          @click="getAdkhar(adkar)"
          v-for="(adkar, index) in Object.entries(adkhar)"
          :key="index"
          :to="{ name: 'AdkharView', params: { adkarIndex: index } }"
          class="box-component text-color text-center p-2 d-flex justify-content-center align-items-center"
        >
          <h5>{{ adkar[0] }}</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import adkhar from "@/Json/adkar.json";

export default {
  name: "CategoriesOfDhikr",
  data() {
    return {
      adkhar,
    };
  },

  methods: {
    getAdkhar(adkar) {
      console.log(adkar);
    },
  },
};
</script>
<style lang="scss" scoped>
.adkhar-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
