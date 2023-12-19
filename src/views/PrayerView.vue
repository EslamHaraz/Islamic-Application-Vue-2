<template>
  <div class="parent mt-3 mb-3">
    <div class="text-end bg-white p-3">
      <h4 class="text-end bg-white p-3 text-head border-b w-fit-content" :class="{ blur: activePopup }">
        الادعيه
      </h4>
      <div class="prayers-parent mt-5">
        <div
          @click="getPrayerDetails(prayer), (activePopup = true)"
          :class="{ blur: activePopup }"
          v-for="(prayer, index) in pageOfItems"
          :key="index"
          class="box-component text-color text-center p-2 d-flex justify-content-center align-items-center cursor-ponter"
        >
          <h5>{{ prayer.category }}</h5>
        </div>
        <div class="tafsir-box bg-white position-fixed" :class="{ active: activePopup }">
          <FontAwesome
            @click="activePopup = false"
            :icon="['fas', 'xmark']"
            class="position-absolute text-white xmark"
          />
          <div class="d-Flex justify-content-evenly mt-2">
            <h4 class="border-b p-3">{{ this.prayerName }}</h4>
          </div>
          <h5
            class="prayer-text mb-3 text-center"
            v-for="(prayer, index) in payerArray"
            :key="index"
          >
            {{ prayer.text }}
          </h5>
        </div>
      </div>
      <jw-pagination
        class="pagination d-flex justify-content-center flex-wrap mt-4"
        :pageSize="32"
        :items="prayers"
        @changePage="onChangePage"
        :labels="customLabels"
        :class="{ blur: activePopup }"
      >
      </jw-pagination>
    </div>
  </div>
</template>
<script>
let customLabels = {
  first: "اول",
  last: "اخر",
  previous: "سابق",
  next: "التالي",
};
import prayers from "@/Json/prayers.json";
import axios from "axios";
import JwPagination from "jw-vue-pagination";
export default {
  name: "PrayerView",
  data() {
    return {
      prayers,
      pageOfItems: [],
      customLabels,
      prayerName: "",
      payerArray: [],
      activePopup: false,
    };
  },
  components: {
    JwPagination,
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    getPrayerDetails(prayer) {
      this.prayerName = prayer.category;
      this.payerArray = prayer.array;
    },
  },
};
</script>
<style scoped lang="scss">
.prayers-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
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
  z-index: 50;
  max-height: 450px;
  overflow: auto;
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
.prayer-text {
  line-height: 1.8;
}
.blur {
  filter: blur(5px);
}

</style>
