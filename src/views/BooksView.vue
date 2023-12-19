<template>
  <div class="parent mt-3 mb-3">
    <div class="text-end bg-white p-3 border-b">
      <h4 class="text-end bg-white p-3 bg-head" :class="{ blur: activePopup }">
        الفئات الفرعيه
      </h4>
      <div class="subCategories-parent">
        <div
          @click="getBookDetails(book), (activePopup = true)"
          :class="{ blur: activePopup }"
          v-for="(book, index) in booksList"
          :key="index"
          class="box-component text-color text-center p-2 d-flex justify-content-center align-items-center"
        >
          <h5>{{ book.title | maxChar(55) }}</h5>
        </div>
      </div>
      <div class="paginate d-Flex m-auto mt-4" :class="{ blur: activePopup }">
        <button
          v-if="links.total_items > booksList.length"
          :disabled="buttonBackStatus == false"
          @click="returnToPerviousPage()"
          :class="{ opacity: buttonBackStatus == false }"
          class="btn"
        >
          رجوع
        </button>
        <button
          v-if="links.total_items > booksList.length"
          :disabled="buttonMoreStatus == false"
          :class="{ opacity: buttonMoreStatus == false }"
          @click="getMoreBooks()"
          class="btn"
        >
          عرض كتب اخري
        </button>
      </div>
      <div class="p-2 position-relative bg-white">
        <div
          class="tafsir-box bg-white position-fixed"
          :class="{ active: activePopup }"
        >
          <FontAwesome
            @click="activePopup = false"
            :icon="['fas', 'xmark']"
            class="position-absolute text-white xmark"
          />
          <div class="d-Flex justify-content-evenly mt-5">
            <a
              class="book box-component p-2 text-color"
              v-for="(book, index) in attachmentsList"
              :href="book.url"
              :key="index"
            >
              <h5>{{ book.description }}</h5>
              <div class="details d-Flex mt-3">
                <h6>النوع : {{ book.extension_type }}</h6>
                <h6>الحجم : {{ book.size }}</h6>
              </div>
            </a>
          </div>
        </div>
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
      booksId: this.$route.params.booksId,
      defaultNumberPage: 1,
      defaultLength: 10,
      booksList: [],
      links: [],
      buttonMoreStatus: true,
      buttonBackStatus: true,
      activePopup: false,
      attachmentsList: [],
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      axios
        .get(
          `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/get-category-items/${this.booksId}/showall/ar/ar/${this.defaultNumberPage}/${this.defaultLength}/json`
        )
        .then((response) => {
          this.booksList = response.data.data;
          this.links = response.data.links;
        });
    },
    getMoreBooks() {
      this.buttonBackStatus = true;
      if (this.defaultNumberPage == this.links.pages_number) {
        this.buttonMoreStatus = false;
        return;
      } else {
        this.defaultNumberPage++;
        this.getBooks();
      }
    },
    returnToPerviousPage() {
      this.buttonMoreStatus = true;
      if (this.defaultNumberPage < this.links.pages_number) {
        this.buttonBackStatus = false;
        return;
      } else {
        this.defaultNumberPage--;
        this.getBooks();
      }
    },
    getBookDetails(value) {
      this.attachmentsList = value.attachments;
    },
  },
};
</script>
<style scoped lang="scss">
.subCategories-parent,
.box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.paginate {
  width: 300px;
}
.paginate button {
  color: white;
  background-color: var(--first-color);
  width: 49%;
  border: 2px solid var(--first-color);
  opacity: 1;
}
.paginate button:hover {
  background-color: white;
  color: black;
}
.opacity {
  opacity: 0 !important;
}
.tafsir-box {
  width: 50%;
  visibility: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  padding: 15px;
  border: 2px solid var(--first-color);
  border-radius: 4px;
  &.active {
    opacity: 1;
    visibility: visible;
  }
}
@media (max-width: 767px) {
  .tafsir-box {
    width: 90%;
  }
}
svg.xmark {
  background-color: var(--first-color);
  width: 15px;
  height: 15px;
  padding: 5px;
  border-radius: 50%;
}
.box-component {
  cursor: pointer;
}
.blur {
  filter: blur(5px);
}
</style>
