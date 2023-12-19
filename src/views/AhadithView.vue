<template>
  <div class="parent mt-4 bg-white p-3 border-b border-t mb-3">
    <h4 class="text-end bg-white p-3 bg-head">عرض الاحاديث</h4>
    <div class="ahadith-parent">
      <router-link
        class="box-component text-color text-center p-2 hadith-box"
        :to="{ name: 'HadithComponent', params: { hadithId: hadith.id } }"
        v-for="(hadith, index) in ahadithList"
        :key="index"
        ><h5 class="m-0 d-flex justify-content-center align-items-center">
          {{ hadith.title | maxChar(70) }}
        </h5></router-link
      >
    </div>
    <div class="paginate d-Flex m-auto mt-4">
      <button
        :disabled="buttonBackStatus == false"
        @click="returnToPerviousPage()"
        :class="{ opacity: buttonBackStatus == false }"
        class="btn"
      >
        رجوع
      </button>
      <button
        :disabled="buttonMoreStatus == false"
        :class="{ opacity: buttonMoreStatus == false }"
        @click="getMoreAhadith()"
        class="btn"
      >
        عرض احاديث اخري
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AhadithView",
  data() {
    return {
      categoryId: this.$route.params.catId,
      ahadithList: [],
      lastPage: "",
      perPage: "",
      length: "",
      defaultNumberPage: 1,
      defaultLength: 30,
      buttonMoreStatus: true,
      buttonBackStatus: true,
    };
  },
  mounted() {
    this.getAhadeth();
  },
  methods: {
    getAhadeth() {
      axios
        .get(
          `https://hadeethenc.com/api/v1/hadeeths/list/?language=ar&category_id=${this.categoryId}&page=${this.defaultNumberPage}&per_page=${this.defaultLength}`
        )
        .then((response) => {
          this.lastPage = response.data.meta.last_page;
          this.perPage = response.data.meta.per_page;
          this.length = response.data.meta.total_items;
          this.ahadithList = response.data.data;
        });
    },
    getMoreAhadith() {
      this.buttonBackStatus = true;
      if (this.defaultNumberPage == this.lastPage) {
        this.buttonMoreStatus = false;
        return;
      } else {
        this.defaultNumberPage++;
        this.getAhadeth();
      }
    },
    returnToPerviousPage() {
      this.buttonMoreStatus = true;
      if (this.defaultNumberPage - 1 <= -this.lastPage) {
        this.buttonBackStatus = false;
      } else {
        this.defaultNumberPage--;
        this.getAhadeth();
      }
    },
  },
};
</script>
<style scoped>
.ahadith-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 20px;
}
.border-t {
  border-top: 2px solid var(--first-color);
}
.parent {
  border-radius: 5px;
}
.hadith-box {
  height: 50px;
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
</style>
