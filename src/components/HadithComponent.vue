<template>
  <div class="parent bg-white mt-3 mb-3 p-3">
    <div class="border-t">
      <h4 class="hadith-name mb-3 mt-3">{{ hadithDetails.hadeeth }}</h4>
      <div class="tafsir-hadith border-b-w mb-3">
        <h5 class="tafsir-text text-end p-3 pt-0">
          التفسير : {{ hadithDetails.explanation }}
        </h5>
        <div class="attribution d-Flex">
          <h5>الاسناد : {{ hadithDetails.attribution }}</h5>
          <h5>درجه : {{ hadithDetails.grade }}</h5>
        </div>
      </div>
      <div class="hints border-b-w mt-3 mb-3 text-end" v-if="hints.length > 0">
        <h4 class="mb-3">تلميحات</h4>
        <h5 class="text-color mb-3" v-for="(hint, index) in hints" :key="index">
          {{ hint }}
        </h5>
      </div>
      <div class="refernce border-b-w mt-2 mb-3 text-end">
        <h4 class="mb-3">مرجع</h4>
        <h5 class="refernce-text">{{ hadithDetails.reference }}</h5>
      </div>
      <div class="words-meaning mt-2 mb-3 text-end" v-if="wordsMeanings.length > 0">
        <h4 class="mb-3">معاني كلمات</h4>
        <div
          class="word mb-4 border-b p-2"
          v-for="(word, index) in wordsMeanings"
          :key="index"
        >
          <h5 class="mb-2">الكلمه : {{ word.word }}</h5>
          <h5>المعني :{{ word.meaning }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HadithComponent",
  data() {
    return {
      hadithId: this.$route.params.hadithId,
      hadithDetails: "",
      hints: [],
      wordsMeanings: [],
    };
  },
  mounted() {
    this.getHadith();
  },
  methods: {
    getHadith() {
      axios
        .get(
          `https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${this.hadithId}`
        )
        .then((response) => {
          this.hadithDetails = response.data;
          if (response.data.hints) {
            this.hints = response.data.hints;
          }
          if (response.data.words_meanings) {
            this.wordsMeanings = response.data.words_meanings;
          }
        });
    },
  },
};
</script>
<style scoped>
.border-t {
  border-top: 2px solid var(--first-color);
}
.hadith-name {
}
.tafsir-text,
.refernce-text,
.hadith-name {
  line-height: 1.8;
}
.attribution {
  max-width: 450px;
}
.border-b-w {
  border-bottom: 2px solid #f2f5fa;
}

.word {
  width: fit-content;
}
</style>
