<template>
  <div class="parent mt-3 mb-3">
    <div class="text-end bg-white p-3 border-b">
      <h4 class="text-end bg-white border-b mb-3 p-3 w-fit-content">انواع الاحاديث</h4>
      <div class="ahadith-parent">
        <router-link
          v-for="(cat, index) in categloriesList"
          :key="index"
          :to="{ name: 'AhadithView', params: { catId: cat.id } }"
          class="hadith-category text-color text-center p-2"
        >
          <h5>{{ cat.title }}</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AhadithsView",
  data() {
    return {
      categloriesList: [],
    };
  },
  mounted() {
    this.getAhadithCategories();
  },
  methods: {
    getAhadithCategories() {
      axios
        .get(`https://hadeethenc.com/api/v1/categories/roots/?language=ar`)
        .then((response) => {
          this.categloriesList = response.data;
        });
    },
  },
};
</script>
<style scoped>

.hadith-category {
  background-color: #f2f5fa;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 2px #edededa8;
}
.hadith-category:hover {
  color: var(--first-color);
}
.ahadith-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
