<template>
  <div class="parent mt-3 mb-3">
    <div class="text-end bg-white p-3 border-b">
      <h4 class="text-end bg-white p-3 w-fit-content border-b mb-3 bg-head">انواع الكتب</h4>
      <div class="books-parent">
        <router-link
          v-for="(cat, index) in categoriesList"
          :key="index"
          :to="{ name: 'SubCategoryBooksView', params: { catId: cat.id } }"
          class="box-component text-color text-center p-2 d-flex justify-content-center align-items-center"
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
  name: "BooksCategoriesView",
  data() {
    return {
      categoriesList: [],
    };
  },
  mounted() {
    this.getBooksCategories();
  },
  methods: {
    getBooksCategories() {
      axios
        .get(
          `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/get-object-category-tree/ar/json`
        )
        .then((response) => {
          this.categoriesList = response.data.sub_categories;
        });
    },
  },
};
</script>
<style scoped>
.books-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
