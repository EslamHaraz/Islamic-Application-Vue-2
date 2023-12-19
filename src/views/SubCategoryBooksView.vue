<template>
  <div class="parent mt-3 mb-3">
    <div class="text-end bg-white p-3 border-b">
      <h4 class="text-end bg-white p-3 bg-head border-b">{{ this.booksList.title }}</h4>
      <h5 class="category-description" v-if="this.booksList.description">{{ this.booksList.description }}</h5>
      <hr  v-if="this.booksList.description">
      <h4 class="text-end bg-white p-3 bg-head">التصانيف</h4>

      <div class="books-parent">
        <router-link
          v-for="(cat, index) in booksList.sub_categories"
          :key="index"
          :to="{name:'BooksView',params:{booksId:cat.id}}"
          class="text-color box-component text-center p-2 d-flex justify-content-center align-items-center"
        >
          <h5 class="m-0">{{ cat.title }}</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BooksView",
  data() {
    return {
      categoryId: this.$route.params.catId,
      booksList: [],
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      axios
        .get(
          `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/get-sub-categories/${this.categoryId}/ar/json`
        )
        .then((response) => {
          this.booksList = response.data;
          console.log(response.data);
        });
    },
  },
};
</script>
<style scoped>
.category-description {
  line-height: 1.8;
}
.books-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
