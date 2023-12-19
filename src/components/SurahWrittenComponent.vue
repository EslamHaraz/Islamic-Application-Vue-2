<template>
  <div class="parent mt-4">
    <div class="surah-name">
      <h5 class="text-white text-end p-2">
        {{ surahData.name }} - رقم {{ surahData.number }}
      </h5>
    </div>
    <div class="surah-parent p-2 position-relative bg-white">
      <p
        class="text-color ayah-text"
        @click="getTafsirAyah(ayah)"
        :class="{
          break: fiveNumbers.includes(ayah.numberInSurah),
          blur: activePopup,
        }"
        v-for="(ayah, index) in surahData.ayahs"
        :key="index"
      >
        {{ ayah.text }} ({{ ayah.numberInSurah }})
      </p>
      <div
        class="tafsir-box bg-white position-fixed"
        :class="{ active: activePopup }"
      >
        <FontAwesome
          @click="activePopup = false"
          :icon="['fas', 'xmark']"
          class="position-absolute text-white xmark"
        />
        <p class="ayah-text border-b w-100 p-3">
          {{ this.ayahText }}

          <select
            class="form-select select-tafsir m-auto mt-3"
            aria-label="Default select example"
            v-model="interpreterId"
            @mouseleave="changeTafsir()"
          >
            <option
              v-for="(book, index) in interpretersList"
              :key="index"
              :value="book.id"
              v-if="book.language == 'ar'"
            >
              {{ book.name }}
            </option>
          </select>
        </p>
        <p class="ayah-text tafsir-text">{{ this.tafsirText }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SurahComponent",
  data() {
    return {
      surahId: this.$route.params.surahId,
      surahData: [],
      index: 0,
      fiveNumbers: [],
      ayahText: "",
      tafsirText: "",
      activePopup: false,
      interpreterId: "",
      interpretersList: [],
      ayahNumber: "",
    };
  },
  mounted() {
    this.getFiveNumber();
    this.getSurah();
    this.getAllInterpreters();
  },
  methods: {
    changeTafsir() {
      if (this.interpreterId !== "") {
        axios
          .get(
            `http://api.quran-tafseer.com/tafseer/${this.interpreterId}/${this.surahData.number}/${this.ayahNumber}`
          )
          .then((response) => {
            this.tafsirText = response.data.text;
          });
      }
    },
    getAllInterpreters() {
      axios.get(`http://api.quran-tafseer.com/tafseer/`).then((response) => {
        this.interpretersList = response.data;
      });
    },
    getTafsirAyah(ayah) {
      this.ayahText = ayah.text;
      this.ayahNumber = ayah.numberInSurah;
      this.activePopup = true;
      axios
        .get(
          `http://api.quran-tafseer.com/tafseer/1/${this.surahData.number}/${ayah.numberInSurah}`
        )
        .then((response) => {
          this.tafsirText = response.data.text;
        });
    },
    getSurah() {
      axios
        .get(`https://api.alquran.cloud/v1/surah/${this.surahId}`)
        .then((response) => {
          this.surahData = response.data.data;
        });
    },
    getFiveNumber() {
      for (let i = 0; i < 286; i += 5) {
        this.fiveNumbers.push(i);
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@200;300;400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,800&family=Josefin+Sans:wght@200;300;400;500;700&family=Rajdhani:wght@300;400;500;600;700&display=swap");
p.break {
  width: 100%;
  border-bottom: 3px solid var(--first-color);
}
.surah-name {
  background-color: var(--first-color);
}
.ayah-text {
  width: fit-content;
  display: inline-block;
  margin: 3px;
  font-size: 25px;
  padding: 3px;
  font-weight: 600;
  font-family: "Rajdhani", sans-seri;
  cursor: pointer;
}

.tafsir-box {
  width: fit-content;
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
.blur {
  filter: blur(5px);
}
.border-b {
  border-bottom: 2px solid var(--first-color);
  font-weight: 700;
  cursor: default;
}
svg.xmark {
  background-color: var(--first-color);
  width: 15px;
  height: 15px;
  padding: 5px;
  border-radius: 50%;
}
.select-tafsir {
  width: 150px;
}
.tafsir-text {
  overflow: auto;
  max-height: 450px;
}
</style>
